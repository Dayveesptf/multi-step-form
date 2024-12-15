import React from 'react';
import './step5.css';
import thanks from '../../assets/icon-thank-you.svg'

const FifthStep: React.FC = () => {
 
  return (
    <div className="fifth-step-container">
      <div className="fifth-step-side-bar">
      <div className='fifth-content-container'>
                <div className='fifth-number-container'><h1>1</h1></div>
                <div className='fifth-progress-write-up'>
                    <h5>STEP 1</h5>
                    <h1>YOUR INFO</h1>
                </div>
            </div>
            <div className='fifth-content-container'>
                <div className='fifth-number-container'><h1>2</h1></div>
                <div className='fifth-progress-write-up'>
                    <h5>STEP 2</h5>
                    <h1>SELECT PLAN</h1>
                </div>
            </div>
            <div className='fifth-content-container'>
                <div className='fifth-number-container'><h1>3</h1></div>
                <div className='fifth-progress-write-up'>
                    <h5>STEP 3</h5>
                    <h1>ADD-ONS</h1>
                </div>
            </div>
            <div className='fifth-content-container'>
                <div className='fifth-number-container' style={{backgroundColor: 'gray'}}><h1>4</h1></div>
                <div className='fifth-progress-write-up'>
                    <h5>STEP 4</h5>
                    <h1>SUMMARY</h1>
                </div>
            </div>      
            </div>

            <div className='thank-container'>
                <div className='img-container'>
                    <img src={thanks} alt="" />
                </div>
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at dtechservices2@gmail.com</p>
            </div>
    </div>
  );
};

export default FifthStep;