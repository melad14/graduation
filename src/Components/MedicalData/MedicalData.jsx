import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext.jsx';
import Loading from '../Loading/Loding.jsx';

export default function MedicalData() {
    let { BASE_URL_ACCOUNT } = useContext(AuthContext)
    const userToken = localStorage.getItem('userToken');
    let [loading, setLoading] = useState(false)
    let idd;
    

    const notify = (msg, type) => {
        toast[type](msg)
    };
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        age: '',
        gender: 'male',
        chesttype: '',
        restingbp: '',
        cholesterol: '',
        fastingbs: '',
        restingecg: '',
        maxhr: '',
        exerciseangina: 'yes',
        stdepression: '',
        stslope: '',
        kidney: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL_ACCOUNT}/MedicalData/AddMedicalData`, formData, {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                },
            });
            console.log(response);
            idd=response.data.data._id
        } catch (error) {
            console.error('Error submitting the form to doctor endpoint', error);
        }
        try {
            const response = await axios.post('http://4.227.145.82:8001/predict', formData);
            setLoading(false)
            console.log('Prediction:', response.data);
            navigate('/result', { state: { prediction: response.data.prediction, predictId: idd } });
            notify("Successfully Added", 'success')
        } catch (error) {
            setLoading(false)
            console.error('Error submitting the form', error);
        }
    };

    return (<>
        {loading ? <Loading /> : null}
        <div className="container my-4 d-flex">
            <form onSubmit={handleSubmit} className='col-md-12 mx-4 border  border-1 rounded-3 p-3 shadow shadow-4'>
                <h1 className='primary mx-3'>Medical Data</h1>

                <div className="row g-4 p-4 ">
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="age">Age</label>
                        <input type="number" className='form form-control mt-2' name='age' value={formData.age} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="gender">Gender</label>
                        <select className='form-select mt-2' name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="chesttype">Chest Pain Type</label>
                        <select className='form-select mt-2' name="chesttype" value={formData.chesttype} onChange={handleChange}>
                            <option value="">Choose One</option>
                            <option value="typicalangina">Typical Angina</option>
                            <option value="atypicalangina">Atypical Angina</option>
                            <option value="nonanginalpain">Non Anginal Pain</option>
                            <option value="asymptomatic">Asymptomatic</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="restingbp">Resting Blood Pressure</label>
                        <input type="text" className='form form-control mt-2' name='restingbp' value={formData.restingbp} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="cholesterol">Serum Cholesterol</label>
                        <input type="text" className='form form-control mt-2' name='cholesterol' value={formData.cholesterol} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="fastingbs">Fasting Blood Sugar</label>
                        <select className='form-select mt-2' name="fastingbs" value={formData.fastingbs} onChange={handleChange}>
                            <option value="">Choose One</option>
                            <option value="greater">Greater Than 120 mg/dl</option>
                            <option value="less">Less Than 120 mg/dl</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="restingecg">Resting ECG Results</label>
                        <select className='form-select mt-2' name="restingecg" value={formData.restingecg} onChange={handleChange}>
                            <option value="">Choose One</option>
                            <option value="normal">Normal</option>
                            <option value="abnormal">Having ST-T Wave Abnormality</option>
                            <option value="definite">Probable or Definite Left Ventricular Hypertrophy</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="maxhr">Max Heart Rate</label>
                        <input type="number" className='form form-control mt-2' name='maxhr' value={formData.maxhr} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="exerciseangina">Exercise-induced Angina</label>
                        <select className='form-select mt-2' name="exerciseangina" value={formData.exerciseangina} onChange={handleChange}>
                            <option value="">Choose One</option>

                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="stdepression">ST Depression</label>
                        <input type="number" className='form form-control mt-2' name='stdepression' value={formData.stdepression} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="stslope">Slope Of The Peak Exercise ST Segment</label>
                        <select className='form-select mt-2' name="stslope" value={formData.stslope} onChange={handleChange}>
                            <option value="">Choose One</option>
                            <option value="upsloping">Upsloping</option>
                            <option value="flat">Flat</option>
                            <option value="downsloping">Downsloping</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className='text-muted' htmlFor="kidney">Kidney Disease</label>
                        <select className='form-select mt-2' name="kidney" value={formData.kidney} onChange={handleChange}>
                            <option value="">Choose One</option>

                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <button className='btn btn-danger mx-4 text-center'>Predict</button>
            </form>
        </div>
    </>);
}
