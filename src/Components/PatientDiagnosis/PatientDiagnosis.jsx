import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext.jsx';
import Loading from '../Loading/Loding.jsx';

export default function PatientDiagnosis() {
  let { BASE_URL_ACCOUNT } = useContext(AuthContext)
  const userToken = localStorage.getItem('userToken');
  const [file, setFile] = useState(null);
  let [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');

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
    event.preventDefault();
    setLoading(true)
    if (!file) {
      alert("Please upload a file first!");
      setLoading(false)
      return;
    }

    const formData = new FormData();
    formData.append('file', file);


    try {
      const response1 = await axios.post(`${BASE_URL_ACCOUNT}/Detection/AddDetection`, formData, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      });
      console.log(response1);

      idd = response1.data.data._id
    } catch (error) {
      console.error('Error submitting endpoint', error);
    }
    try {
      const response2 = await axios.post('http://4.227.145.82:9000/predict', formData);
      setLoading(false)


      const prediction = response2.data.result
      navigate('/resultD', { state: { prediction, predictId: idd } });
    } catch (error) {
      setLoading(false)
      console.log('Error submitting the form', error);
    }
  };
  return (<>
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
  </>

  );
}
