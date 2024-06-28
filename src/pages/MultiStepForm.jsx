import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import FinalStep from "./FinalStep";

const MultiStepForm = () => {
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const handleStepChange = (stats) => {
    if (stats.nextStep && formState[`step${stats.activeStep}`] === "no") {
      alert("You answered No. Redirecting to home page.");
      navigate("/");
    }
  };

  return (
    <StepWizard onStepChange={handleStepChange}>
      <Step1 setFormState={setFormState} formState={formState} />
      <Step2 setFormState={setFormState} formState={formState} />
      <Step3 setFormState={setFormState} formState={formState} />
      <FinalStep />
    </StepWizard>
  );
};

export default MultiStepForm;
