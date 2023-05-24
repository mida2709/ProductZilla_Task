import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const goToNextStep = (nextStep) => {
    navigate(`/step${nextStep}`);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, goToNextStep }}>
      {children}
    </FormContext.Provider>
  );
};
