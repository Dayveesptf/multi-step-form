import './step3-yearly.css'
import React, { useState } from 'react';
import { useFormContext } from '../../formContext'; // Assuming you're using a context to manage form data
import { Link, useNavigate } from 'react-router-dom';

const ThirdStepYearly: React.FC = () => {
  const { updateFormData } = useFormContext();
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const navigate = useNavigate();

  // Add-ons data
  const addOns = [
    { id: 'onlineService', title: 'Online service', description: 'Access to multiplayer games', price: 10 },
    { id: 'largerStorage', title: 'Larger storage', description: 'Extra 1TB of cloud save', price: 20 },
    { id: 'customProfile', title: 'Customizable profile', description: 'Custom theme on your profile', price: 20 },
  ];

  // Toggle selection of an add-on
  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((addOn) => addOn !== id) : [...prev, id]
    );
  };

  // Handle "Next Step" click
  const handleNextStep = () => {
    if (selectedAddOns.length === 0) {
        alert('Please select at least one add-on to proceed.');
        return;
      }

    const selectedDetails = addOns.filter((addOn) => selectedAddOns.includes(addOn.id));
    updateFormData('addOns', selectedDetails); // Save selected add-ons in context
    console.log('Selected Add-Ons:', selectedDetails); // Debugging info
    navigate('/step4-yearly');
  };
    return (
<div className="third-step-container">
    <div className="third-step-side-bar">
      <div className='third-content-container'>
                <div className='third-number-container'><h1>1</h1></div>
                <div className='third-progress-write-up'>
                    <h5>STEP 1</h5>
                    <h1>YOUR INFO</h1>
                </div>
            </div>
            <div className='third-content-container'>
                <div className='third-number-container'><h1>2</h1></div>
                <div className='second-progress-write-up'>
                    <h5>STEP 2</h5>
                    <h1>SELECT PLAN</h1>
                </div>
            </div>
            <div className='third-content-container'>
                <div className='third-number-container' style={{backgroundColor: 'gray'}}><h1>3</h1></div>
                <div className='third-progress-write-up'>
                    <h5>STEP 3</h5>
                    <h1>ADD-ONS</h1>
                </div>
            </div>
            <div className='third-content-container'>
                <div className='third-number-container'><h1>4</h1></div>
                <div className='third-progress-write-up'>
                    <h5>STEP 4</h5>
                    <h1>SUMMARY</h1>
                </div>
            </div>      
            </div>
            <div className="third-step-writeup">
        <h1>Pick add-ons</h1>
        <h5>Add-ons help enhance your gaming experience</h5>

        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className={`select-container ${selectedAddOns.includes(addOn.id) ? 'selected' : ''}`}
            onClick={() => toggleAddOn(addOn.id)}
          >
            <div className="inside-box">
              <h4>{addOn.title}</h4>
              <p>{addOn.description}</p>
            </div>
            <h6>+${addOn.price}/yr</h6>
          </div>
        ))}
        <div className="third-button-set">
        <button className="button1"><Link to='/step2'>Go Back</Link></button>
        <button className="button2" onClick={handleNextStep}>Next Step</button>
      </div>
      </div>
    </div>
    )
 }
 export default ThirdStepYearly;