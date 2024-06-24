import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';



import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Result() {

  const userToken = localStorage.getItem('userToken');

  const location = useLocation();
  const { prediction, predictId } = location.state || {};
  console.log('predictId', location.state);
  const medical_result = prediction === 1 ? 'Oops! You have chances of Heart Disease.' : 'Great! You DONT have chances of Heart Disease';


  useEffect(() => {
    if (predictId) {
      const sendResult = async () => {
        try {
          const response = await axios.put(`https://heartdisease-five.vercel.app/api/Account/MedicalData/AddResultOfMedicalData/${predictId}`,
            { medical_result }, {
            headers: {
              'Authorization': `Bearer ${userToken}`,
            },
          });
          console.log('Result sent successfully:', response.data);
        } catch (error) {
          console.error('Error sending the result:', error);
        }
      };

      sendResult();
    }


    Aos.init({
      duration: 2000
    })
  }, []);

  return (
    <div className="container my-4 d-flex">
      <div className='col-md-12 mx-4 border border-1 rounded-3 p-3 shadow shadow-3 p-5'>
        <h1 className='primary px-5'>Prediction Result</h1>
        {prediction === 1 ? (
          <h2 className='text-danger p-5'  data-aos='fade-up'>Oops! You have chances of Heart Disease.</h2>
        ) : (
          <h2 className='text-success p-5'  data-aos='fade-up'>Great! You DON'T have chances of Heart Disease.</h2>
        )}
      </div>
    </div>
  );
}
