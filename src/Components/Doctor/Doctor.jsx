import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext.jsx';


export default function Doctor() {
    let { BASE_URL_DOCTOR}=useContext(AuthContext)

    let navigate = useNavigate();
    const notify = (msg, type) => {
        toast[type](msg)
    };

    const userToken = localStorage.getItem('userToken');
    const [loading, setLoading] = useState(false)
 

    let addPatientFormik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            age: '',
            gender: '',
            userType: '',
            password: ''
        },

        onSubmit: async (values) => {
            setLoading(true)


            await axios.post(`${BASE_URL_DOCTOR}/AddNewPatient`, values, {
                headers: {
                    'Authorization': `Bearer ${userToken}`,

                }
            }).then((data) => {

            
                setLoading(false)
                notify("Successfuly Added", "success")
                navigate('/patients')
            }).catch((error) => {

                setLoading(false)
                notify(error.response.data.error, "error")

                console.log(error.response.data);


            })
        }
    })






    return (
        <>
            <div className='vh-100 d-flex flex-column justify-content-center align-items-center mb-5'>
                <div className='container text-white d-flex justify-content-center'>
                    <button

                        className= "btn btn-danger mx-2">
                        Create Account
                    </button>
                    <Link to='/patients'

                        className= "btn btn-dark mx-2">
                        Your Patients
                    </Link >
                </div>

                <div className='w-50 h-50'>

                    <form className='w-100 my-3 border  rounded-5 shadow-lg p-4' onSubmit={addPatientFormik.handleSubmit}>

                        <label className='my-1'>full name</label>
                        <input
                            className='form form-control w-100'
                            type="text" p-4
                            name="fullName"
                            id='fullName'
                            onBlur={addPatientFormik.handleBlur} value={addPatientFormik.values.fullName} onChange={addPatientFormik.handleChange}
                        />

                        <label className='my-1'>email</label>
                        <input
                            className='form form-control w-100'
                            type="text"
                            name="email"
                            id='email'
                            onBlur={addPatientFormik.handleBlur} value={addPatientFormik.values.email} onChange={addPatientFormik.handleChange}
                        />
                        <label className='my-1'>password</label>
                        <input
                            className='form form-control w-100'
                            type="password"
                            name="password"
                            id='password'
                            onBlur={addPatientFormik.handleBlur} value={addPatientFormik.values.password} onChange={addPatientFormik.handleChange}
                        />


                        <label className='my-1'>age</label>
                        <input
                            className='form form-control w-100'
                            type="number"
                            name="age"
                            id='age'
                            onBlur={addPatientFormik.handleBlur} value={addPatientFormik.values.age} onChange={addPatientFormik.handleChange}
                        />

                        <label className='my-1'>gender</label>
                        <select
                            className='form form-control'
                            name="gender"
                            id='gender'
                            onBlur={addPatientFormik.handleBlur} value={addPatientFormik.values.gender} onChange={addPatientFormik.handleChange}>
                            <option value="none">Select An Option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <label className='my-2'> type</label>
                        <select
                            className='form form-control'
                            name="userType"
                            id='userType'
                            onBlur={addPatientFormik.handleBlur} value={addPatientFormik.values.userType} onChange={addPatientFormik.handleChange}>
                            <option value="none">Select An Option</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>


                        <button disabled={!(addPatientFormik.isValid && addPatientFormik.dirty && !loading)} type='submit' className='btn bg-danger text-white my-2' >
                            {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Submit'}
                        </button>

                    </form>

                </div>
            </div >
        </>
    );
}
