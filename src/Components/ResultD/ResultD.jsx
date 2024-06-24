import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Aos from 'aos'
import 'aos/dist/aos.css'


export default function ResultD() {
    const userToken = localStorage.getItem('userToken');

  const location = useLocation();
  const { prediction, predictId } = location.state || {};
console.log('predictId',location.state);
  useEffect(() => {
    if (predictId && prediction) {
      const sendResult = async () => {
        try {
          const response = await axios.put(`https://heartdisease-five.vercel.app/api/Account/Detection/AddResultOfDetection/${predictId}`,
             { detection_result: prediction },{
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
        <h1 className='primary px-5'>Detection Result</h1>
        <h2 className='text-success p-5' data-aos="fade-up">{prediction}</h2>
      </div>
    </div>
  );
}
