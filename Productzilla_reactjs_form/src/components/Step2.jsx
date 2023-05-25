import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/Form';

function Step2() {
  const navigate = useNavigate();
  const { updateFormData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    birthDate: '',
    birthPlace: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);
    navigate('/step3');
  };

  const handleBack = () => {
    navigate('/step1');
  };

  return (
    <div className="step-container">
      <h2>Step 2</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <span>Birth Date:</span>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <span>Birth Place:</span>
          <input
            type="text"
            name="birthPlace"
            value={formData.birthPlace}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <span>Address:</span>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="button" className="back-button" onClick={handleBack}>
          Back
        </button>
        <button type="submit" className="next-button">
          Next
        </button>
      </form>
    </div>
  );
}

export default Step2;
