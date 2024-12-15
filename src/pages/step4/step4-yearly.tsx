import './step4-yearly.css'
import { useFormContext } from '../../formContext'; // Access the context for form data
import {  Link } from 'react-router-dom';

type AddOn = {
    name: string;
    price: string;
  };

function FourthStepYearly() {
const { formData } = useFormContext();

  // Extract plan and add-ons from the form data
  const selectedPlan = formData?.plan; // Example: { name: 'Arcade', price: '$9/mo' }
  const selectedAddOns = formData?.addOns?.map((addOn: { id: string; title: string; description: string; price: number }) => ({
    name: addOn.title, // Map 'title' to 'name'
    price: `$${addOn.price}/mo`, // Ensure price is in the correct format
  })) as AddOn[] || [];

  // Calculate total price
  const totalPrice = [selectedPlan?.price, ...selectedAddOns.map((addOn: any) => addOn.price)]
    .map(price => parseFloat(price.replace(/[^0-9.]/g, ''))) // Extract numeric values
    .reduce((sum, price) => sum + price, 0);


    return (
        <div className="fourth-step-container">
        <div className="fourth-step-side-bar">
          <div className='fourth-content-container'>
                    <div className='fourth-number-container'><h1>1</h1></div>
                    <div className='fourth-progress-write-up'>
                        <h5>STEP 1</h5>
                        <h1>YOUR INFO</h1>
                    </div>
                </div>
                <div className='fourth-content-container'>
                    <div className='fourth-number-container'><h1>2</h1></div>
                    <div className='fourth-progress-write-up'>
                        <h5>STEP 2</h5>
                        <h1>SELECT PLAN</h1>
                    </div>
                </div>
                <div className='fourth-content-container'>
                    <div className='fourth-number-container'><h1>3</h1></div>
                    <div className='fourth-progress-write-up'>
                        <h5>STEP 3</h5>
                        <h1>ADD-ONS</h1>
                    </div>
                </div>
                <div className='fourth-content-container'>
                    <div className='fourth-number-container' style={{backgroundColor: 'gray'}}><h1>4</h1></div>
                    <div className='fourth-progress-write-up'>
                        <h5>STEP 4</h5>
                        <h1>SUMMARY</h1>
                    </div>
                </div>      
                </div>

                <div className='fourth-step-writeup'>
                    <h1 style={{marginTop: '1%'}}>Finishing up</h1>
                    <h5>Double-check everything looks OK before confirming</h5>
                    <div className='summary-container'>
                        <div className='box-1'>
                            <h3>{selectedPlan?.name}(Yearly)</h3>
                            <h6>{selectedPlan?.price}</h6>
                        </div>
                        {selectedAddOns.map((addOn, index: number) => (
                        <div className="box-2" key={index}>
                            <h3>{addOn.name}</h3>
                            <h6>+{addOn.price}</h6>
                        </div>
                        ))}
                        <div className="total-container">
                            <h3>Total (per year)</h3>
                            <h6>${totalPrice.toFixed(2)}</h6>
                        </div>
                    </div>
                    <div className="fourth-button-set">
                        <button className="button1">
                            <Link to="/step3-yearly">Go back</Link>
                        </button>
                        <button className="button2"><Link to="/success">Confirm</Link></button>
                    </div>
                </div>
        </div>
    )
 }
 export default FourthStepYearly;