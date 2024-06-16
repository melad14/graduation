import React, { useState } from 'react';
import joi from 'joi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    fullName: '',
    gender: '',
    age: 0,
    email: '',
    password: '',
    userType: ''
  });

  function getUserData(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
 
  async function sendUserData() {
    try {
      await axios.post(`http://heartdiseaseproj.runasp.net/api/Account/Register`, user);
      navigate('/login');
      setLoading(false);

    } catch (err) {
      console.error(err);
      setLoading(false);
      // Set a user-friendly error message
     // setError(err.response?.data?.message || 'An error occurred during registration');
    }
  }

  function submitRegister(e) {
    e.preventDefault();
    setLoading(true);

    let validation = validationReg();
    if (validation.error) {
      setErrorList(validation.error.details);
      setLoading(false);
    } else {
      sendUserData();
    }
  }

  function validationReg() {
    let scheme = joi.object({
      fullName: joi.string().min(3).max(20).required(),
      gender: joi.string().valid('male', 'female').required(),
      age: joi.number().min(16).max(80).required(),
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().required(),
      userType: joi.string().valid('patient', 'doctor').required()
    });

    return scheme.validate(user, { abortEarly: false });
  }

  return (
    <div className="w-25 mx-auto py-3">
      <h3 className="my-4 shadow p-3 mb-5 rounded-4 text-center">REGISTRATION</h3>

      {error && <p className='text-danger'>{error}</p>}

      <form className='my-5' onSubmit={submitRegister}>
        <div className='row'>
          <div className="col-md-6">
            <input onChange={getUserData} type="text" className='form-control myInput mb-2 my-2' name='fullName' id='fullName' placeholder='Full Name' />
            <p className='text-danger'>{errorList.filter((error) => error.context.label === 'fullName')[0]?.message}</p>
          </div>
          <div className="col-md-6">
            <select onChange={getUserData} className='form-control myInput mb-2 my-2' name='gender' id='gender'>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className='text-danger'>{errorList.filter((error) => error.context.label === 'gender')[0]?.message}</p>
          </div>
        </div>
        <input onChange={getUserData} type="number" className='form-control myInput mb-2 my-2' name='age' id='age' placeholder='Age' />
        <p className='text-danger'>{errorList.filter((error) => error.context.label === 'age')[0]?.message}</p>
        <input onChange={getUserData} type="email" className='form-control myInput mb-2 my-2' name='email' id='email' placeholder='Email' />
        <p className='text-danger'>{errorList.filter((error) => error.context.label === 'email')[0]?.message}</p>
        <input onChange={getUserData} type="password" className='form-control myInput mb-2 my-2' name='password' id='password' placeholder='Password' />
        <p className='text-danger'>{errorList.filter((error) => error.context.label === 'password')[0]?.message}</p>
        <select onChange={getUserData} className='form-control myInput mb-2 my-2' name='userType' id='userType'>
          <option value="">Select User Type</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <p className='text-danger'>{errorList.filter((error) => error.context.label === 'userType')[0]?.message}</p>
        <button type='submit' className="btn btn-primary mb-2">
          {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
        </button>
      </form>
    </div>
  );
}
