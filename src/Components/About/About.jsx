import React from 'react'
import img1 from '../../Images/human-heart-design.jpg'
import team1 from '../../Images/WhatsApp Image 2024-06-23 at 22.34.10_18c9963a.jpg'
import team2 from '../../Images/WhatsApp Image 2024-06-23 at 17.52.48_061574e0.jpg'
import team3 from '../../Images/WhatsApp Image 2024-06-23 at 18.03.52_47a9349f.jpg'
import team4 from '../../Images/WhatsApp Image 2024-06-23 at 18.22.58_15779590.jpg'
import team5 from '../../Images/WhatsApp Image 2024-06-23 at 18.39.03_b0dec641.jpg'
import team6 from '../../Images/WhatsApp Image 2024-06-23 at 18.24.45_a1b716a5.jpg'
import team7 from '../../Images/WhatsApp Image 2024-06-24 at 18.12.15_4400a599.jpg'
import team8 from '../../Images/WhatsApp Image 2024-06-24 at 18.58.46_1fbbc468.jpg'
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

            <div class="container my-5">
            <div class="section-title text-center" style={{marginTop:'150px'}}>
                <h1 className='primary my-5' >Our Team Members</h1>
            </div>
            <div class="row">
                
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team1} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>Melad Shehata Malak</h2>
                            <h3>Front End </h3>
                      
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team8} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>Fady Ashraf moneer</h2>
                            <h3>Front end</h3>
                      
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team2} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>Youssef Nasser Latef</h2>
                            <h3>Backend </h3>
                      
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team4} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>Ahmed mostafa </h2>
                            <h3>ML Engineer</h3>
                      
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team3} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>youssef assuty</h2>
                            <h3>ML Engineer</h3>
                      
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team7} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>Sandra rafla william </h2>
                            <h3>System Analyst </h3>
                      
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team5} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>Youssef Isco</h2>
                            <h3>deployment</h3>
                      
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-6">
                        <div class="team-img">
                            <img src={team6} className='w-100' alt="Team Image"/>
                        </div>
                        <div class="team-content">
                            <h2>Ghada </h2>
                            <h3>Data Analyst </h3>
                      
                        </div>
                    </div>
                </div>
               
             
            </div> 
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
