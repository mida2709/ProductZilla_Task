import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
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
      navigate('/result', { state: { formData } });
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderForm = () => {
    switch (step) {
        case 1:
            return (
              <div className='container'>
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
                  <button type="submit" className="next-button">Next</button>
                </form>
              </div>
            );
      case 2:
        return (
            <div className='container'>
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
              <button className="back-button" onClick={() => setStep(step - 1)}>Back</button>
                <button className="next-button" type="submit"> Next</button>
            </form>
          </div>
        );
      case 3:
        return (
            <div className='container'>
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
                <button className="back-button" onClick={() => setStep(step - 1)}>Back</button>
                <button className="next-button" type="submit"> Next</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderForm()}</div>;
};

export default Form;
