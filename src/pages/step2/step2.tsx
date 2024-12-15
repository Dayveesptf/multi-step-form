import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './step2.css';
import { useFormContext } from '../../formContext'; // Assuming you're using a context to save data
import arcade from '../../assets/icon-arcade.svg'
import advanced from '../../assets/icon-advanced.svg'
import pro from '../../assets/icon-pro.svg'

const SecondStep: React.FC = () => {
  const { updateFormData } = useFormContext();
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null); // Stores the selected plan
  const navigate = useNavigate();

  // Toggle billing between Monthly and Yearly
  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  // Handle plan selection
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  // Handle "Next Step" button
  const handleNextStep = () => {
    if (!selectedPlan) {
      alert('Please select a plan before proceeding.');
      return;
    }

    // Save selected plan details in context
    updateFormData('plan', {
      name: selectedPlan!,
      price: isYearly
        ? selectedPlan === 'Arcade'
          ? '$90/yr'
          : selectedPlan === 'Advanced'
          ? '$120/yr'
          : '$150/yr'
        : selectedPlan === 'Arcade'
        ? '$9/mo'
        : selectedPlan === 'Advanced'
        ? '$12/mo'
        : '$15/mo',
    });

    // Navigate to the correct step based on toggle state
    navigate(isYearly ? '/step3-yearly' : '/step3-monthly');
  };

  return (
    <div className="second-step-container">
    <div className="second-step-side-bar">
      <div className='second-content-container'>
                <div className='second-number-container'><h1>1</h1></div>
                <div className='second-progress-write-up'>
                    <h5>STEP 1</h5>
                    <h1>YOUR INFO</h1>
                </div>
            </div>
            <div className='second-content-container'>
                <div className='second-number-container' style={{backgroundColor: 'gray'}}><h1>2</h1></div>
                <div className='second-progress-write-up'>
                    <h5>STEP 2</h5>
                    <h1>SELECT PLAN</h1>
                </div>
            </div>
            <div className='second-content-container'>
                <div className='second-number-container'><h1>3</h1></div>
                <div className='second-progress-write-up'>
                    <h5>STEP 3</h5>
                    <h1>ADD-ONS</h1>
                </div>
            </div>
            <div className='second-content-container'>
                <div className='second-number-container'><h1>4</h1></div>
                <div className='second-progress-write-up'>
                    <h5>STEP 4</h5>
                    <h1>SUMMARY</h1>
                </div>
            </div>      
            </div>
    <div className="second-step-details-container">
      <h1>Select your plan</h1>
      <h5>You have the option of monthly or yearly billing</h5>

      {/* Plans Container */}
      <div className="sub-container">
        <div
          className={`arcade ${selectedPlan === 'Arcade' ? 'selected' : ''}`}
          onClick={() => handleSelectPlan('Arcade')}
        >
          <img src={arcade} alt="Arcade Plan" />
          <h4>Arcade</h4>
          <p>{isYearly ? '$90/yr' : '$9/mo'}</p>
        </div>
        <div
          className={`advanced ${selectedPlan === 'Advanced' ? 'selected' : ''}`}
          onClick={() => handleSelectPlan('Advanced')}
        >
          <img src={advanced} alt="Advanced Plan" />
          <h4>Advanced</h4>
          <p>{isYearly ? '$120/yr' : '$12/mo'}</p>
        </div>
        <div
          className={`pro ${selectedPlan === 'Pro' ? 'selected' : ''}`}
          onClick={() => handleSelectPlan('Pro')}
        >
          <img src={pro} alt="Pro Plan" />
          <h4>Pro</h4>
          <p>{isYearly ? '$150/yr' : '$15/mo'}</p>
        </div>
      </div>

      {/* Toggle Slider */}
      <div className="toggle-container">
        <span className={isYearly ? '' : 'active'}>Monthly</span>
        <div className="toggle-slider" onClick={toggleBilling}>
          <div className={`slider-circle ${isYearly ? 'right' : 'left'}`}></div>
        </div>
        <span className={isYearly ? 'active' : ''}>Yearly</span>
      </div>

      {/* Buttons */}
      <div className="second-button-set">
        <button className="button1">
          <Link to="/">Go back</Link>
        </button>
        <button className="button2" onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </div>
    </div>
  );
};

export default SecondStep;
