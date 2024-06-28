import React, { useEffect } from "react";
import StepWizard from "react-step-wizard";
import Registered from "./Registered";
import TrueIdentity from "./TrueIdentity";
import Signup from "./Signup";
import OldEnough from "./OldEnough";
import { useNavigate } from "react-router-dom";
import { useSteps } from "./StepsContext";

const MultiSteps = () => {
  const { allowedSteps, currentStep, goToStep } = useSteps();
  const navigate = useNavigate();

  useEffect(() => {
    if (!allowedSteps.includes(currentStep)) {
      navigate("/");
    }
  }, [currentStep, allowedSteps, navigate]);

  return (
    <StepWizard initialStep={currentStep} isHashEnabled={false}>
      <Registered goToStep={goToStep} hashKey="registered" />
      <TrueIdentity goToStep={goToStep} hashKey="true-identity" />
      <OldEnough goToStep={goToStep} hashKey="old-enough" />
      <Signup hashKey="signup" />
    </StepWizard>
  );
};

export default MultiSteps;
