import React, { useContext } from 'react'
import image from '../../Images/Capture.PNG'
import { AuthContext } from '../../Context/AuthContext.jsx'

export default function Account() {
    let { userData } = useContext(AuthContext)
 
   
    return (
        <div className='container my-4 d-flex '>
            <form action="" className='w-100 mx-4 border  border-1 rounded-3 p-3 shadow shadow-4' >

                <div className="row g-3 ">
                    <div className="col-md-12">
                        <img src={image} className='profile  d-block rounded-circle' alt="" />
                    </div>
                    <div className="col-md-4 p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label className='text-muted' htmlFor="type"> profile type :</label>
                            <h2 className='text-dark '> {userData.UserType}  </h2>
                        </div>
                    </div>
                    <div className="col-md-4 p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label className='text-muted' htmlFor="name">Your Name :</label>
                            <h2 className='text-dark '>{userData.FullName}  </h2>
                        </div>
                    </div>
                    <div className="col-md-4 p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label className='text-muted' htmlFor="email">Your email :</label>
                            <h2 className='text-dark '>{userData.email}  </h2>
                        </div>
                    </div>

                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="age" className=' text-muted'>Age :</label>
                            <h2 className='text-dark '>{userData.Age}  </h2>
                        </div>
                    </div>
                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="gender" className=' text-muted'>Gender</label>
                       
                            <h2 className='text-dark '>{userData.Gender} </h2>
                            
                        </div>
                    </div>

               
             
                </div>


            </form>

        </div>
    )
}



