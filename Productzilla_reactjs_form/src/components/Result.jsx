import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/Form';

const Result = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/step-three');
  };

  return (
    <div className='step-container'>
      <h2>Selamat Datang!</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Bootcamp: {formData.bootcamp}</p>
      <p>Birth Date: {formData.birthDate}</p>
      <p>Birth Place: {formData.birthPlace}</p>
      <p>Address: {formData.address}</p>
      <button className='back-button' onClick={handleBack}>Back</button>
    </div>
  );
};

export default Result;
