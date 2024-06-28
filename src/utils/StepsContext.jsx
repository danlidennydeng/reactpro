import React, { createContext, useContext, useState } from "react";

const StepsContext = createContext();

export const StepsProvider = ({ children }) => {
  const [allowedSteps, setAllowedSteps] = useState([1]);
  const [currentStep, setCurrentStep] = useState(1);

  const goToStep = (step) => {
    setAllowedSteps((prevSteps) => [...new Set([...prevSteps, step])]);
    setCurrentStep(step);
  };

  const value = { allowedSteps, currentStep, goToStep };

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  );
};

export const useSteps = () => useContext(StepsContext);
