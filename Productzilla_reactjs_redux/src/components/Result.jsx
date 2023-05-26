import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const formData = useSelector((state) => state.formData);

  return (
    <div className='container'>
      <h2>Selamat Datang🙌🏻!</h2>
      <p>Name:          {formData.name}</p>
      <p>Email:         {formData.email}</p>
      <p>phoneNumber:   {formData.phoneNumber}</p>
      <p>bootcamp:      {formData.bootcamp}</p>
      <p>birthPlace:    {formData.birthPlace}</p>
      <p>birthDate :    {formData.birthDate}</p>
      <p>Email:         {formData.email}</p>
      <h2>Thank You😊!</h2>
      {/* Display other form data fields */}
    </div>
  );
};

export default Result;
