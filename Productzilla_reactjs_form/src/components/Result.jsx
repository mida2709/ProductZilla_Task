import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state || !location.state.formData) {
      // Jika tidak ada data formulir dari state, kembali ke halaman form
      navigate('/');
    }
  }, [location, navigate]);

  if (!location.state || !location.state.formData) {
    // Jika tidak ada data formulir dari state, tampilkan pesan loading
    return <p>Loading...</p>;
  }

  const formData = location.state.formData;

  return (
    <div className='container'>
      <h2>Selamat Datang!</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Bootcamp: {formData.bootcamp}</p>
      <p>Birth Date: {formData.birthDate}</p>
      <p>Birth Place: {formData.birthPlace}</p>
      <p>Address: {formData.address}</p>
    </div>
  );
};

export default Result;
