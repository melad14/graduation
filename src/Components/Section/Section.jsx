import React, { useEffect } from 'react'
import './section.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Section() {

  
  useEffect(() => {
    Aos.init({
      duration: 1000
    })

  }, [])

  return (
    <section id="services">
    <div className="container">
        <header className="section-header">
            <h1 className='primary my-3'>Services</h1>
        </header>
        <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service "data-aos="fade-up">
                    <div className="icon icon-1"></div>
                    <h4>Consultation</h4>
                    <span>20 Min | $50.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-2"></div>
                    <h4>Health Checkup</h4>
                    <span>30 Min | $30.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-3"></div>
                    <h4>Flu Shots</h4>
                    <span>10 Min | $15.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-4"></div>
                    <h4>Blood Test</h4>
                    <span>30 Min | $10.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-5"></div>
                    <h4>Physical Exams</h4>
                    <span>30 Min | $50.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-6"></div>
                    <h4>Prevention</h4>
                    <span>10 Min | $20.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-7"></div>
                    <h4>Family Planning</h4>
                    <span>30 Min | $20.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-8"></div>
                    <h4>Home Visits</h4>
                    <span>30 Min | $30.00</span>
                    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 d-sm-none d-md-block d-lg-none">
                <div className="single-service"data-aos="fade-up">
                    <div className="icon icon-9"></div>
                    <h4>Insurance</h4>
                    <span>10 Min | $100.00</span>
                    
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
