import React, { useContext, useState } from 'react'

import joi from 'joi'
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'


export default function Login() {
  const notify = (msg, type) => {
    toast[type](msg)
  };


  let { SaveUserData } = useContext(AuthContext)
  let navigate = useNavigate()

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
    await axios.post(`https://heartdisease-five.vercel.app/api/Account/login`, user).then((data) => {
        navigate('/');
     
        console.log(data);
     
      localStorage.setItem('userToken', data.data.token)
      SaveUserData()
      setLoading(false)
      notify("success", 'success')
    
    }).catch((err) => {
      console.log(err.response.data.error);
      setLoading(false)
      notify(err.response.data.error, 'error')
     


    })

  }


 async function submitLogin(e) {
    e.preventDefault()
    setLoading(true)

    let validation = validationLog()
    if (validation.error) {
      setLoading(false)
      console.log(validation.error.details[0].message);
      notify(validation.error.details[0].message, 'error')

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




    <form onSubmit={submitLogin}>


      <input onChange={getUserData} type="email" className='form-control myInput mb-2 my-2 ' name='email' id='email' placeholder='Email' />

      <input onChange={getUserData} type="password" className='form-control myInput mb-2 my-2 ' name='password' id='password' placeholder='Password' />
   

      <button type='submit' className="btn bag-primary my-2 ">
        {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
      </button>


    </form>
  </div>
}
