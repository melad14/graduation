import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return <>
<div style={{ marginTop: '200px' }}>
       <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 " >
            <div className="container ">
                <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <Link>
                                <h1 className="primary mb-0">Heart disease prediction </h1>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
                                <button type="submit" className="btn bag-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{ top: 0, right: 0 }}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href="val" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="val" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="val" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="val" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Who we are</h4>
                            <p className="mb-4">Our mission is to be a relentless force for a world of longer,
                             healthier lives. As we move into the second century of our work, we are advancing 
                             health and hope for everyone, everywhere.
                                </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3"> Info</h4>
                            <Link className="btn-link" to='/about'>ABOUT</Link>
                            <Link className="btn-link" to='/medicaldata'>MEDICAL DATA</Link>
                            <Link className="btn-link" to='/account'>PROFILE</Link>
                            <Link className="btn-link" to='/patientdiagnosis'>Patient Diagnosis</Link>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Office</h4>
                            <Link className="btn-link ">Heart disease prediction</Link>
                            <Link className="btn-link rkm" > KvK: 12345678</Link>
                            <Link className="btn-link rkm" >Btw: N5678970B01</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Contact</h4>
                            <p>Address: street 2 d 202HK Egypt</p>
                            <p>Email: info@Heart.com</p>
                            <p className="rkm">Phone: +0123456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid copyright bg-dark ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start pb-5 mb-md-0">
                    </div>
                    <div className="col-md-6 my-auto text-center text-md-end mb-5  text-white">
                        <span className="text-light"><Link to="/" className="primary"><i className="fas fa-copyright text-light me-2"></i> Heart disease prediction</Link>, All right reserved.</span>

                    </div>
                </div>
            </div>
        </div>
</div>
     

    </>
}