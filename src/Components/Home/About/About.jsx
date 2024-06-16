import React from 'react'
import img1 from '../../../Images/human-heart-design.jpg'
export default function About() {
    return <>
        <div className="container overflow-hidden py-5 px-lg-0">

            <div className="text-center my-5">
                <h2 className='text-danger' data-aos='fade-up'>WHO WE ARE</h2>
                <p className=' h4 text-muted w-75 mx-auto' data-aos='fade-up'>
                    Welcome to our team working on the development and operation of
                    the Heart Diseases Prediction Website. We are a dedicated group
                    of professionals with a shared passion for improving heart health
                    and providing valuable insights to individuals at risk of heart diseases.
                    Our team comprises experts from various fields, including healthcare,
                    data science, web development, and user experience design. Together,
                    we strive to create a reliable and user-friendly platform that empowers
                    users to assess their risk of heart diseases and take proactive steps towards
                    prevention.</p>

            </div>

            <div className='bgg py-5 mt-5'>
                <div className="container my-5">
                    <div className="text-center my-5">
                        <div className="row my-5 d-flex  ">

                            <div className="col-md-6 pt-5">
                                <p className=' h3 text-muted text-start mt-5  ' data-aos='fade-up'>
                                    Our team's collaborative efforts, combining medical expertise, data analysis,
                                    web development, user experience design, and marketing, enable us to provide
                                    a comprehensive and reliable heart disease prediction website. We are committed
                                    to helping individuals make informed decisions about their heart health and take
                                    proactive measures to lead healthier lives.

                                    Disclaimer: The information provided on our website is for educational purposes only
                                    and should not replace professional medical advice. It is always recommended to consult
                                    with a qualified healthcare provider for personalized diagnosis and treatment options
                                    related to heart diseases.

                                </p>
                            </div>
                            <div className="col-md-6 p-5  d-flex justify-content-center align-items-center" data-aos='fade-up' >
                                <img src={img1} className='w-100 ' alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
