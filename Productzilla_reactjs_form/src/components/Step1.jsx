import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/Form';

function Step1() {
  const navigate = useNavigate();
  const { updateFormData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bootcamp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);
    navigate('/step2');
  };

  const { name, email, phone, bootcamp } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div className="step-container">
      <h2>Step 1</h2>
        <span>Name:</span>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="step-container">
        <span>Email:</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="step-container">
        <span>Phone:</span>
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <div className="step-container">
        <span>Bootcamp:</span>
        <div className="radio-group">
          <span>
            <input
              type="radio"
              value="UI/UX"
              checked={bootcamp === 'UI/UX'}
              name="bootcamp"
              onChange={handleChange}
            />
            UI/UX
          </span>
          <span>
            <input
              type="radio"
              value="Backend Engineer"
              checked={bootcamp === 'Backend Engineer'}
              name="bootcamp"
              onChange={handleChange}
            />
            Backend Engineer
          </span>
          <span>
            <input
              type="radio"
              value="Frontend Engineer"
              checked={bootcamp === 'Frontend Engineer'}
              name="bootcamp"
              onChange={handleChange}
            />
            Frontend Engineer
          </span>
          <span>
            <input
              type="radio"
              value="Digital Marketing"
              checked={bootcamp === 'Digital Marketing'}
              name="bootcamp"
              onChange={handleChange}
            />
            Digital Marketing
          </span>

        </div>
      <button type="submit" className="next-button">
          Next
        </button>
      </div>
    </form>
  );
}

export default Step1;
