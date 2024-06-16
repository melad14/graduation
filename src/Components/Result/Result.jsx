import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Result() {
    const location = useLocation();
    const { prediction } = location.state || {};
    return (
        <div className="container my-4 d-flex">
            <div className='col-md-12 mx-4 border border-1 rounded-3 p-3 shadow shadow-3 p-5'>
                <h1 className='primary px-5'>Prediction Result</h1>
                {prediction === 1 ? (
                    <h2 className='text-danger p-5'>Oops! You have chances of Heart Disease.</h2>
                ) : (
                    <h2 className='text-success p-5'>Great! You DON'T have chances of Heart Disease.</h2>
                )}
            </div>
        </div>
    );
}
