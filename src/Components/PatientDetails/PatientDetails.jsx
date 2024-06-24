import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loding.jsx'
import { AuthContext } from '../../Context/AuthContext.jsx'

export default function PatientDetails() {
    let {BASE_URL_DOCTOR}=useContext(AuthContext)
    let [loading, setLoading] = useState(true)
    let [patientData, setPatientData] = useState({})
    let [resultData, setResultData] = useState([])
    let [resultDetect, setResultDetect] = useState([])

    const userToken = localStorage.getItem('userToken');
    
    let { id } = useParams()

    const getPatientDetails = () => {
        axios.get(`${BASE_URL_DOCTOR}/GetPatientById/${id}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
            }
        }).then((response) => {
            const { data, result, resultDetection } = response.data;
            setPatientData(data);
            setResultData(result);
            setResultDetect(resultDetection);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPatientDetails();
    }, [id])

    return (
        <>
            {loading ? <Loading /> : null}
            <div className='container my-4'>
                <div className='my-5 primary'><h1>Patient Details</h1></div>
                <div className='my-5 primary'>
                    <Link className='text-light btn btn-danger mx-3' to={`/docAddData/${patientData.userid}`}>Add Medical Data</Link>
                    <Link className='text-light btn btn-danger ' to={`/docAddDetection/${patientData.userid}`}>Add Detection</Link>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <div className='border border-1 rounded-3 p-3 shadow'>
                            <h3 className='text-center mb-4'>Patient Details</h3>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className='text-muted' htmlFor="name">Name:</label>
                                        <h5 className='text-dark'>{patientData.fullName}</h5>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className='text-muted' htmlFor="email">Email:</label>
                                        <h5 className='text-dark'>{patientData.email}</h5>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className='text-muted' htmlFor="age">Age:</label>
                                        <h5 className='text-dark'>{patientData.age}</h5>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className='text-muted' htmlFor="gender">Gender:</label>
                                        <h5 className='text-dark'>{patientData.gender}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {resultData.length > 0 && resultData.map((result, index) => (
                        <div className='col-12 mt-4' key={index}>
                            <div className='border border-1 rounded-3 p-3 shadow'>
                                <h3 className='text-center mb-4'>Health Details {index + 1}</h3>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="chesttype">Chest Type:</label>
                                            <h5 className='text-dark'>{result.chesttype}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="restingbp">Resting BP:</label>
                                            <h5 className='text-dark'>{result.restingbp}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="cholesterol">Cholesterol:</label>
                                            <h5 className='text-dark'>{result.cholesterol}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="fastingbs">Fasting BS:</label>
                                            <h5 className='text-dark'>{result.fastingbs}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="restingecg">Resting ECG:</label>
                                            <h5 className='text-dark'>{result.restingecg}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="maxhr">Max HR:</label>
                                            <h5 className='text-dark'>{result.maxhr}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="exerciseangina">Exercise Angina:</label>
                                            <h5 className='text-dark'>{result.exerciseangina}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="stdepression">ST Depression:</label>
                                            <h5 className='text-dark'>{result.stdepression}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="stslope">ST Slope:</label>
                                            <h5 className='text-dark'>{result.stslope}</h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='text-muted' htmlFor="kidney">Kidney:</label>
                                            <h5 className='text-dark'>{result.kidney}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <h3 className='text-muted' htmlFor="kidney">Result:</h3>
                                            <h5 className='text-dark'>{result.medical_result}</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))}
                    {resultDetect.length > 0 && resultDetect.map((result, index) => (
                        <div className='col-6 mt-4' key={index}>
                            <div className='border border-1 rounded-3 p-3 shadow'>
                                <h3 className='text-center mb-4'>Detection  {index + 1}</h3>

                                <img src={result.file} className='w-75' />
                                <h3 className='text-success'>Results : {result.detection_result}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
