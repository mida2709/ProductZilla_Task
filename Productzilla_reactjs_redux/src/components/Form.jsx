import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitFormData } from '../store/formActions';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    bootcamp: '',
    birthDate: '',
    birthPlace: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      dispatch(submitFormData(formData));
      navigate('/result');
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderForm = () => {
    return (
      <div className="container">
        <div className="step-navigation-container">
          <div className="step-line"></div>
          <div className="step-navigation">
            <div className={`step ${step === 1 ? 'active' : ''}`}>1</div>
            <div className={`step ${step === 2 ? 'active' : ''}`}>2</div>
            <div className={`step ${step === 3 ? 'active' : ''}`}>3</div>
          </div>
          <div className="step-line"></div>
        </div>
        {step === 1 && (
          <div className="step-container">
            <h2>Step 1</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <div>
                <p>Choose a bootcamp:</p>
                <label>
                  <input
                    type="radio"
                    name="bootcamp"
                    value="UI/UX"
                    checked={formData.bootcamp === 'UI/UX'}
                    onChange={handleChange}
                    required
                  />
                  UI/UX
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="bootcamp"
                    value="Backend Engineer"
                    checked={formData.bootcamp === 'Backend Engineer'}
                    onChange={handleChange}
                    required
                  />
                  Backend Engineer
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="bootcamp"
                    value="Frontend Engineer"
                    checked={formData.bootcamp === 'Frontend Engineer'}
                    onChange={handleChange}
                    required
                  />
                  Frontend Engineer
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="bootcamp"
                    value="Digital Marketing"
                    checked={formData.bootcamp === 'Digital Marketing'}
                    onChange={handleChange}
                    required
                  />
                  Digital Marketing
                </label>
              </div>
              <br />
              <button className="next-button" type="submit">Next</button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="step-container">
            <h2>Step 2</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Birth Date:
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Birth Place:
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Address:
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <br />
              <button className="back-button" onClick={prevStep}>Back</button>
              <button className="next-button" type="submit">Next</button>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="step-container">
            <h2>Step 3</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <button className="back-button" onClick={prevStep}>Back</button>
              <button className="next-button" type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  };

  return <div>{renderForm()}</div>;
};

export default Form;
