import {  Routes, Route } from 'react-router-dom';
import FourthStepMonthly from './pages/step4/step4-monthly'
import FourthStepYearly from './pages/step4/step4-yearly'
import FirstStep from './pages/step1/step1';
import ThirdStepMonthly from './pages/step3/step3-monthly';
import ThirdStepYearly from './pages/step3/step3-yearly';
import SecondStep from './pages/step2/step2';
import ScrollToTop from './scroll';
import FifthStep from './pages/step5/step5';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FirstStep />} />
        <Route path="/step2" element={<SecondStep />} />
        <Route path="/step3-monthly" element={<ThirdStepMonthly />} />
        <Route path="/step3-yearly" element={<ThirdStepYearly />} />
        <Route path="/step4-monthly" element={<FourthStepMonthly />} />
        <Route path="/step4-yearly" element={<FourthStepYearly />} />
        <Route path="/success" element={<FifthStep />} />
      </Routes>
    </div>
);
}

export default App
