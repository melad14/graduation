import React, { useContext, useEffect, useState } from 'react'
import image from '../../Images/Capture.PNG'
import { AuthContext } from '../../Context/AuthContext.jsx'
import axios from 'axios'
import Loading from '../Loading/Loding.jsx';

export default function Account() {
    const userToken = localStorage.getItem('userToken');
    let [resultData, setResultData] = useState([])
    let [resultDetect, setResultDetect] = useState([])
    let { userData, BASE_URL_ACCOUNT } = useContext(AuthContext)
    let [loading, setLoading] = useState(true)

    const getMedical = async () => {
        await axios.get(`${BASE_URL_ACCOUNT}/MedicalData/getMedicatData`, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
            }
        }).then((response) => {
            const result = response.data.data
            setResultData(result);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }
    const getDetection = async () => {
        await axios.get(`${BASE_URL_ACCOUNT}/Detection/GetDetection`, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
            }
        }).then((response) => {
            const result = response.data.data
            setResultDetect(result);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(() => {
        getMedical();
        getDetection();
    }, [])

    return (<>  {loading ? <Loading /> : null}
        <div className='container my-4 d-flex '>
            <form action="" className='w-100 mx-4 border  border-1 rounded-3 p-3 shadow shadow-4' >

                <div className="row g-3 ">
                    <div className="col-md-12">
                        <img src={image} className='profile  d-block rounded-circle' alt="" />
                    </div>
                    <div className="col-md-4 p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label className='text-muted' htmlFor="type"> profile type :</label>
                            <h2 className='text-dark '> {userData.user.userType}  </h2>
                        </div>
                    </div>
                    <div className="col-md-4 p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label className='text-muted' htmlFor="name">Your Name :</label>
                            <h2 className='text-dark '>{userData.user.fullName}  </h2>
                        </div>
                    </div>
                    <div className="col-md-4 p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label className='text-muted' htmlFor="email">Your email :</label>
                            <h2 className='text-dark '>{userData.user.email}  </h2>
                        </div>
                    </div>

                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="age" className=' text-muted'>Age :</label>
                            <h2 className='text-dark '>{userData.user.age}  </h2>
                        </div>
                    </div>
                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="gender" className=' text-muted'>Gender</label>

                            <h2 className='text-dark '>{userData.user.gender} </h2>

                        </div>
                    </div>



                </div>


            </form>

        </div>

        {resultData.length > 0 && resultData.map((result, index) => (
            <div className='col-12 mt-4 container' key={index}>
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
                    <div className='col-md-6 '>
                        <div className='mb-3'>
                            <h3 className='text-muted' htmlFor="kidney">Result:</h3>
                            <h5 className='text-dark'>{result.medical_result}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ))}

<div className='container d-flex justify-content-center align-items-center'>
<div className='row '>
            {resultDetect.length > 0 && resultDetect.map((result, index) => (
                <div className='col-6 mt-4 ' key={index}>
                    <div className='border border-1 rounded-3 p-3 shadow'>
                        <h3 className='text-center mb-4'>Detection  {index + 1}</h3>
                        <img src={result.file} className='w-75' />
                        <h3 className='text-success'>Results : {result.detection_result}</h3>
                    </div>
                </div>
            ))}</div>
</div>
       

    </>)
}



