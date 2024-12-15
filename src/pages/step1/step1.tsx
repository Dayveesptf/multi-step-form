import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../formContext';
import './step1.css';

const FirstStep: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (!formData.name || !formData.email || !formData.number) {
      setError('All fields are required!');
      return;
    }
    setError('');
    navigate('/step2');
  };

  return (
    <div className="first-step-container">
      <div className="first-step-side-bar">
      <div className='content-container'>
                <div className='number-container' style={{backgroundColor: 'gray'}}><h1>1</h1></div>
                <div className='progress-write-up'>
                    <h5>STEP 1</h5>
                    <h1>YOUR INFO</h1>
                </div>
            </div>
            <div className='content-container'>
                <div className='number-container'><h1>2</h1></div>
                <div className='progress-write-up'>
                    <h5>STEP 2</h5>
                    <h1>SELECT PLAN</h1>
                </div>
            </div>
            <div className='content-container'>
                <div className='number-container'><h1>3</h1></div>
                <div className='progress-write-up'>
                    <h5>STEP 3</h5>
                    <h1>ADD-ONS</h1>
                </div>
            </div>
            <div className='content-container'>
                <div className='number-container'><h1>4</h1></div>
                <div className='progress-write-up'>
                    <h5>STEP 4</h5>
                    <h1>SUMMARY</h1>
                </div>
            </div>      
            </div>
      <div className="first-step-form-container">
        <h1>Personal info</h1>
        <h5>Please provide your name, email address, and phone number.</h5>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label>Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
          placeholder="e.g. Davies David"
        />

        <label>Email Address</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          placeholder="e.g. daviesdave97@gmail.com"
        />

        <label>Phone No.</label>
        <input
          type="text"
          required
          value={formData.number}
          onChange={(e) => updateFormData('number', e.target.value)}
          placeholder="e.g. +2348076872077"
        />
        <br />
        <button onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default FirstStep;