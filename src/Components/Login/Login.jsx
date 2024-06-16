import React, { useContext, useState } from 'react'

import joi from 'joi'
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext.jsx'
import axios from 'axios'


export default function Login() {
;
  let { SaveUserData } = useContext(AuthContext)
  let navigate = useNavigate()
  const [error, setError] = useState('');
  const [errorList, setErrorList] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function getUserData(e) {
    const myUser = { ...user }
    myUser[e.target.name] = e.target.value
    setUser(myUser)
  }
  async function sendUserData() {
    await axios.post(`http://heartdiseaseproj.runasp.net/api/Account/login`, user).then((data) => {
        navigate('/');
     
     
      localStorage.setItem('userToken', data.data.token)
      SaveUserData()
      setLoading(false)
    
    }).catch((err) => {
      console.log(err);
      setLoading(false)
      //setError(err)


    })

  }


 async function submitLogin(e) {
    e.preventDefault()
    setLoading(true)

    let validation = validationLog()
    if (validation.error) {
      setLoading(false)
      setErrorList(validation.error.details)
    }
    else {
      sendUserData()
    }
  }

  function validationLog() {

    let schema = joi.object({
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().required(),

    })

    return schema.validate(user, { abortEarly: false })

  }


  return <div className="w-25 mx-auto py-3 ">

    <h3 className="my-4  shadow p-3 mb-5 rounded-4 text-center">LOG IN</h3>

    {error ? <p className='text-danger '>{error}</p> : ''}


    <form onSubmit={submitLogin}>


      <input onChange={getUserData} type="email" className='form-control myInput mb-2 my-2 ' name='email' id='email' placeholder='Email' />
      <p className='text-danger'>{errorList.filter((error) => error.context.label === 'email')[0]?.message}</p>
      <input onChange={getUserData} type="password" className='form-control myInput mb-2 my-2 ' name='password' id='password' placeholder='Password' />
      <p className='text-danger'>{errorList.filter((error) => error.context.label === 'password')[0]?.message}</p>

      <button type='submit' className="btn bag-primary my-2 ">
        {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
      </button>


    </form>
  </div>
}
