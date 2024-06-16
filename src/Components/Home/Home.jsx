import React, { useEffect } from 'react'
import './Home.css'
import homeImage from '../../Images/Wavy_Med-03_Single-05.jpg'
import who from '../../Images/human-heart-design.jpg'
import who1 from '../../Images/female-doctor-with-patient-who-is-complaining-chest-pain-during-coronavirus-epidemic.jpg'

//animaaate
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })

  }, [])


  return <>
    <div className="home" id='home'>
      <div className="secContainer">

        <div data-aos='fade-up' className="homeText">
          <span className="homeSpan">
            for Healthy Lifestyle
          </span>
          <h1 className='homeTitle'>Heart disease detection </h1>

          <div data-aos='fade-down-right' className="homeImage ">
            <img src={homeImage} alt="home img" />
          </div>
          <div className="btns flex">
            <button data-aos='fade-right' className="btn">More Details</button>
            <button data-aos='fade-left' className="btn ">Medical Data </button>
          </div>
        </div>
      </div>
    </div>


    <div className='bgg py-5 mt-5'>
      <div className="container my-5">
        <div className="text-center my-5">
          <h2 className='text-danger ' data-aos='fade-up'>Understanding the Global Impact of Heart Disease</h2>
          <div className="row my-5 d-flex  ">
            <div className="col-md-6 pt-5">
              <p className=' h3 text-muted text-start mt-5  ' data-aos='fade-up'>
              <i class="fa fa-check text-success me-3"></i>  The World Health Organization (WHO) has estimated that 12 million deaths occur worldwide, every year due to the Heart diseases.<br />
              <i class="fa fa-check text-success me-3"></i>   About 25% deaths in the age group of 25-69 year occur because of heart diseases. In urban areas, 32.8% deaths occur because of heart ailments, while this percentage in rural areas is 22.9.  <br />

            

              <i class="fa fa-check text-success me-3"></i>   Over 80% of deaths in world are because of Heart disease. WHO estimated by 2030, almost 23.6 million people will die due to Heart disease.<br />

             

              <i class="fa fa-check text-success me-3"></i>   The diagnosis of diseases is a significant and tedious task in medicine  Treatment of the said disease is quite high and not affordable by most of the patients particularly in India. <br />

              
              </p>
            </div>
            <div className="col-md-6 p-5  d-flex justify-content-center align-items-center" data-aos='fade-up'>
              <img src={who} className='w-100' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='bgg py-5 mt-5'>
      <div className="container my-5">
        <div className="text-center my-5">
          <h2 className='text-danger ' data-aos='fade-up'>PROPOSED SYSTEM </h2>
          <div className="row my-5 d-flex  ">
            <div className="col-md-6 p-5  d-flex justify-content-center align-items-center" data-aos='fade-up'>
              <img src={who1} className='w-100' alt="" />
            </div>
            <div className="col-md-6 pt-5">
              <p className=' h3 text-muted text-start mt-5  ' data-aos='fade-up'>
                To predict the heart attack disease. <br /> <br/>
                It helps in reducing treatment costs by providing effective treatments. <br /> <br/>
                TTo find the parameters values in prediction like accuracy, elapsed time and energy consumption. <br /> <br/>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}
