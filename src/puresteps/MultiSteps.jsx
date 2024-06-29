import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSteps } from "./StepsContext";
import Registered from "./Registered";
import TrueIdentity from "./TrueIdentity";
import Signup from "./Signup";
import OldEnough from "./OldEnough";

const MultiSteps = () => {
  const { currentStep, goToStep } = useSteps();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentStep === 1) navigate("/multi-steps#registered");
    if (currentStep === 2) navigate("/multi-steps#true-identity");
    if (currentStep === 3) navigate("/multi-steps#old-enough");
    if (currentStep === 4) navigate("/multi-steps#signup");
  }, [currentStep, navigate]);

  return (
    <div>
      {currentStep === 1 && <Registered goToStep={goToStep} />}
      {currentStep === 2 && <TrueIdentity goToStep={goToStep} />}
      {currentStep === 3 && <OldEnough goToStep={goToStep} />}
      {currentStep === 4 && <Signup />}
    </div>
  );
};

export default MultiSteps;
