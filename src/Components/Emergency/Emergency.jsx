import React, { useEffect } from 'react'
import DotIcon from '../DotIcon/DotIcon.jsx'
import 'aos/dist/aos.css'
import Aos from 'aos'

export default function Emergency() {

    useEffect(() => {
        Aos.init({
          duration: 2000
        })
    
      }, [])

    return (
        <>

            <div className='container my-5'>

                <div data-aos='fade-right' className='border border-2 rounded-5 shadow-sm p-3'>
                    <h1 className='my-3'>Types of Cardiac Emergencies</h1>
                    <p>
                        <span className='h5'>Cardiac emergencies typically include Acute Coronary Syndrome (ACS), Myocardial Infarction (MI), sudden cardiac arrest, and heart failure.</span>
                    </p>
                    <ul>
                        <li className='h5 my-3'>
                            <DotIcon />
                            Acute Coronary Syndrome (ACS) refers to a spectrum of clinical symptoms indicating a sudden reduction in blood flow to the heart.
                        </li>
                        <li className='h5 my-3 '>
                            <DotIcon />
                            Myocardial Infarction (MI), also known as a heart attack, occurs when blood flow to a part of the heart is blocked, leading to damage or death of the heart muscle tissue.
                        </li>

                        <li className='h5 my-3'>
                            <DotIcon />
                            Sudden Cardiac Arrest is the abrupt loss of heart function, usually due to an electrical malfunction in the heart.
                        </li>
                        <li className='h5 my-3'>
                            <DotIcon />
                            Heart Failure happens when the heart is unable to pump enough blood to meet the body's needs.
                        </li>
                    </ul>
                </div>

                <div data-aos='fade-left'  className='border border-2 rounded-5 shadow-sm p-3 my-3'>
                    <h1>Management of Cardiac Emergencies</h1>
                    <p className='fs-5'>Dealing with cardiac emergencies requires an organized and timely response from trained healthcare professionals.</p>
                    <ul>
                        <li className='h5 my-3'>
                            <DotIcon />
                            Recognizing Symptoms: The first and most crucial step is recognizing the signs and symptoms of cardiac emergencies, such as chest pain, fatigue, shortness of breath, nausea, or dizziness. If an individual experiences these symptoms, they should seek immediate medical attention. A healthcare professional may perform tests like an Electrocardiogram (ECG) or blood tests to confirm the diagnosis and determine the appropriate treatment plan.
                        </li>
                        <li className='h5 my-3 '>
                            <DotIcon />
                            Door-to-Balloon Time: The term "door-to-balloon" refers to the time from a patient's arrival at the hospital to the opening of the blocked coronary artery using balloon angioplasty. The American Heart Association recommends a door-to-balloon protocol time of 90 minutes or less. This timeframe is critical because delays can increase damage to the heart muscle.
                        </li>

                        <li className='h5 my-3'>
                            <DotIcon />
                            Treatment: Treatments include medications such as aspirin and nitroglycerin, and interventional procedures like balloon angioplasty or stenting. Additionally, bystanders can play a vital role in managing cardiac emergencies by performing Cardiopulmonary Resuscitation (CPR) and using an Automated External Defibrillator (AED) until professional medical help arrives. Rapid recognition and care of cardiac emergencies can significantly improve patient outcomes and reduce the risk of associated complications.
                        </li>

                    </ul>
                </div>
                <div data-aos='fade-right' className='border border-2 rounded-5 shadow-sm p-3 my-3'>
                    <h1>Can Cardiac Emergencies Be Prevented?</h1>
                    <p>While it is not possible to entirely prevent cardiac emergencies, several measures can be taken to reduce the risk, such as:</p>
                    <ul>
                        <li className='h5 my-3'>
                            <DotIcon />
                            Maintaining a healthy lifestyle by engaging in regular physical activity, following a balanced diet, and avoiding tobacco and alcohol.

                        </li>
                        <li className='h5 my-3 '>
                            <DotIcon />
                            Managing underlying medical conditions like hypertension, diabetes, and high cholesterol.
                        </li>

                        <li className='h5 my-3'>
                            <DotIcon />
                            Regular medical check-ups can help identify risk factors, facilitate early detection, and provide appropriate care.
                        </li>

                    </ul>
                </div>


            </div>



        </>
    )
}
