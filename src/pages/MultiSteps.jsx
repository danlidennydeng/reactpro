import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import Registered from "./Registered";
import TrueIdentity from "./TrueIdentity";
import Signup from "./Signup";
import OldEnough from "./OldEnough";

const MultiSteps = () => {
  const [step, setStep] = useState(1);

  const goToStep = (stepName) => {
    switch (stepName) {
      case "true-identity":
        setStep(2);
        break;
      case "signup":
        setStep(4);
        break;
      case "old-enough":
        setStep(3);
        break;
      default:
        setStep(1);
    }
  };

  return (
    <StepWizard isHashEnabled>
      <Registered goToStep={goToStep} hashKey="registered" />
      <TrueIdentity goToStep={goToStep} hashKey="true-identity" />
      <OldEnough goToStep={goToStep} hashKey="old-enough" />
      <Signup hashKey="signup" />
    </StepWizard>
  );
};

export default MultiSteps;
