import React, { useState } from 'react';
import axios from 'axios';

export default function Doctor() {
    const [create, setCreate] = useState(true);
    const [patients, setPatients] = useState(false);

    const [formData, setFormData] = useState({
        UserName: '',
        Email: '',
        FullName: '',
        Age: '',
        Gender: '',
        Image: '',
        UserType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('UserName', formData.UserName);
        data.append('Email', formData.Email);
        data.append('FullName', formData.FullName);
        data.append('Age', formData.Age);
        data.append('Gender', formData.Gender);
        data.append('Image', formData.Image);
        data.append('UserType', formData.UserType);

        try {
            const response = await axios.post('http://heartdiseaseproj.runasp.net/api/Doctor/AddNewPatient', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            // Handle successful response
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            // Handle error response
        }
    };

    return (
        <>
            <div className='vh-100 d-flex flex-column justify-content-center align-items-center mb-5'>
                <div className='container text-white d-flex justify-content-center'>
                    <button
                        onClick={() => {
                            setCreate(true);
                            setPatients(false);
                        }}
                        className={create ? "btn btn-danger mx-2" : "btn btn-dark mx-2"}>
                        Create Account
                    </button>
                    <button
                        onClick={() => {
                            setCreate(false);
                            setPatients(true);
                        }}
                        className={patients ? "btn btn-danger mx-2" : "btn btn-dark mx-2"}>
                        Your Patients
                    </button>
                </div>

                <div className='w-50 h-50'>
                    {create ? (
                        <form className='w-100 my-3' onSubmit={handleSubmit}>
                            <label className='my-1'>User Name</label>
                            <input
                                className='form form-control w-100'
                                type="text"
                                name="UserName"
                                value={formData.UserName}
                                onChange={handleChange}
                            />

                            <label className='my-1'>Email</label>
                            <input
                                className='form form-control w-100'
                                type="text"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                            />

                            <label className='my-1'>Full Name</label>
                            <input
                                className='form form-control w-100'
                                type="text"
                                name="FullName"
                                value={formData.FullName}
                                onChange={handleChange}
                            />

                            <label className='my-1'>Age</label>
                            <input
                                className='form form-control w-100'
                                type="text"
                                name="Age"
                                value={formData.Age}
                                onChange={handleChange}
                            />

                            <label className='my-1'>Gender</label>
                            <select
                                className='form form-control'
                                name="Gender"
                                value={formData.Gender}
                                onChange={handleChange}>
                                <option value="none">Select An Option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <label className='my-1'>Image</label>
                            <input
                                className='form form-control w-100'
                                type="file"
                                name="Image"
                                value={formData.Image}
                                onChange={handleChange}
                            />

                            <label className='my-1'>User Type</label>
                            <select
                                className='form form-control'
                                name="UserType"
                                value={formData.UserType}
                                onChange={handleChange}>
                                <option value="none">Select An Option</option>
                                <option value="doctor">Doctor</option>
                                <option value="patient">Patient</option>
                            </select>

                            <button className='btn btn-danger my-2' type="submit">Submit</button>
                        </form>
                    ) : (
                        <div className='row my-3'>
                            <div className='col-md-12 border border-2'>
                                <div className='row p-2'>
                                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                        <h5>Name: fady ashraf</h5>
                                    </div>
                                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                        <h5>Male</h5>
                                    </div>
                                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                        <h5>Age: 60</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-12 border border-2 mt-2'>
                                <div className='row p-2'>
                                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                        <h5>Name: melad shehata</h5>
                                    </div>
                                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                        <h5>Male</h5>
                                    </div>
                                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                        <h5>Age: 60</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
