import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from './../Loading/Loding';
import { AuthContext } from '../../Context/AuthContext.jsx';

export default function Patients() {
    let { BASE_URL_DOCTOR}=useContext(AuthContext)

    
    const userToken = localStorage.getItem('userToken');
    let [patientsData, setPatientsData] = useState([])
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        getAllPatients()
    }, [])

    const getAllPatients = () => {

        axios.get(`${BASE_URL_DOCTOR}/GetAllPatient`, {
            headers: {
                'Authorization': `Bearer ${userToken}`,

            }
        }).then((data) => {
            setPatientsData(data.data.data)
            setLoading(false)
            console.log(data.data.data);

        }).catch((err) => {
            console.log(err);
            setLoading(false)

        })
    }


    return (
        <>
            {loading === true ? <Loading /> : null}
            <div className='container my-5'>
                {patientsData.map((e,index) => {
                    return <div key={index} className='row d-flex justify-content-center align-items-center '>
                        <div className='col-md-9  my-2 border border-2 '>
                            <div className='row p-2'>
                            <div className='col-md-2 d-flex justify-content-center align-items-center'>
                                    <h5 className='fs-3'>{index+1}</h5>
                                </div>
                                <div className='col-md-2 d-flex justify-content-center align-items-center'>
                                    <h5>Name:{e.fullName}</h5>
                                </div>
                                <div className='col-md-2 d-flex justify-content-center align-items-center'>
                                    <h5>Gender:{e.gender}</h5>
                                </div>
                                <div className='col-md-2 d-flex justify-content-center align-items-center'>
                                    <h5>Age: {e.age}</h5>
                                </div>
                                <div className='col-md-2 d-flex justify-content-center align-items-center'>
                                    <Link to={`/patientdetails/${e.userid}`} className='btn btn-danger' >Show Details</Link >
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>


        </>
    )
}
