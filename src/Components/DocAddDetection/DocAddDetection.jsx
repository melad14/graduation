import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext.jsx';
import Loading from '../Loading/Loding.jsx';

export default function DocAddDetection() {
  let { BASE_URL_DOCTOR } = useContext(AuthContext)
  let { id } = useParams();
  const userToken = localStorage.getItem('userToken');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  let idd;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();

    if (!file) {
      alert("Please upload a file first!");
      setLoading(false)
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${BASE_URL_DOCTOR}/Detection/docAddDetection/${id}`, formData, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      });
      console.log(response);
      idd = response.data.data._id
    } catch (error) {

      console.error('Error submitting the form to doctor endpoint', error);
    }

    try {
      const response = await axios.post('http://4.227.145.82:9000/predict', formData);
      setLoading(false)
      navigate('/resultD', { state: { prediction: response.data.result, predictId: idd } });
    } catch (error) {
      setLoading(false)

      console.log('Error submitting the form to prediction endpoint', error);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="container my-4 d-flex flex-column align-items-center">
        <form onSubmit={handleSubmit} className='col-md-6 mx-4 rounded-3 p-3 shadow shadow-4'>
          <h1 className='primary'>Patient Diagnosis</h1>
          <div>
            <input type="file" className='form form-control mt-2' onChange={handleFileChange} placeholder='Upload image' />
          </div>
          {preview && (
            <div className="mt-3">
              <img src={preview} alt="Selected" style={{ maxHeight: '300px', width: '100%' }} className="img-fluid" />
            </div>
          )}
          <button type="submit" className='my-3 btn btn-outline-danger'>detect</button>
        </form>
        {result && <div>Result: {result}</div>}
      </div>
    </>);
}
