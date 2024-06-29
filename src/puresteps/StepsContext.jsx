import React, { createContext, useContext, useState } from "react";

const StepsContext = createContext();

export const StepsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const value = { currentStep, goToStep };

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  );
};

export const useSteps = () => useContext(StepsContext);
