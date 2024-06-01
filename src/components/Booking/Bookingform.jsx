// BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [plan, setPlan] = useState('Junior');
  const [months, setMonths] = useState(1);
  const [totalAmount, setTotalAmount] = useState(20000); // Initial amount for Junior plan

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);
    calculateTotalAmount(selectedPlan, months);
  };

  const handleMonthChange = (e) => {
    const selectedMonths = parseInt(e.target.value);
    setMonths(selectedMonths);
    calculateTotalAmount(plan, selectedMonths);
  };

  const calculateTotalAmount = (selectedPlan, selectedMonths) => {
    let amount = 0;
    switch (selectedPlan) {
      case 'Junior':
        amount = 20000 * selectedMonths;
        break;
      case 'Senior':
        amount = 40000 * selectedMonths;
        break;
      case 'Elite':
        amount = 50000 * selectedMonths;
        break;
      default:
        break;
    }
    setTotalAmount(amount);
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/pay', { totalAmount });
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <div>
        <label>
          Select Plan:
          <select value={plan} onChange={handlePlanChange}>
            <option value="Junior">Junior Plan</option>
            <option value="Senior">Senior Plan</option>
            <option value="Elite">Elite Plan</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Select Months:
          <input type="number" min="1" value={months} onChange={handleMonthChange} />
        </label>
      </div>
      <div>
        Total Amount: {totalAmount}
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default BookingForm;
