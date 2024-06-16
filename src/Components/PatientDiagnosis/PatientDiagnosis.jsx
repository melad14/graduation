import React from 'react'

export default function PatientDiagnosis() {
  return <>
  
  <>

        <div className="container my-4 d-flex">


            <form action="" className='col-md-12 mx-4 border border-dark border-1 rounded-3 p-3 shadow shadow-4'>
                <h1 className='primary'>Patient Diagnosis</h1>

                <div className="row g-4 p-4 ">
                <div className="col-md-4">
                        <label className='text-muted' htmlFor="age" >Age</label>
                        <input type="number" className='form form-control mt-2' name='age' />
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="gender">Gender</label>
                        <select className=' form-select mt-2' name="gender" id="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                  
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="diabets">Diabets</label>
                        <select className=' form-select mt-2' name="diabets" id="">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="smooking">Smooking</label>
                        <select className=' form-select mt-2' name="smooking" id="">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="blood" >Blood Pressure</label>
                        <select className=' form-select mt-2' name="blood" id="">
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="chest">Chest Pain</label>
                        <select className=' form-select mt-2' name="chest" id="">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="breathe">Shortness Of Breathe</label>
                        <select className=' form-select mt-2' name="breathe" id="">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="cholesterol" >Cholesterol Level</label>
                        <select className=' form-select mt-2' name="cholesterol" id="">
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="familyhistory" > Family History</label>
                        <input type="string" className='form form-control mt-2' name='familyhistory' />
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="bmi" > BMI</label>
                        <input type="number" className='form form-control mt-2' name='bmi' />
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="physicalact" >Physical Act</label>
                        <select className=' form-select mt-2' name="physicalact" id="">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                      
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="sleeptime" > Sleep Time</label>
                        <input type="number" className='form form-control mt-2' name='sleeptime' />
                    </div>
                </div>

            </form>


        </div>
    </>
  </>
}
