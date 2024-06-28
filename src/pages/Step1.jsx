import React from "react";

const Step1 = ({ setFormState, formState, nextStep }) => {
  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, step1: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.step1) {
      alert("Please select Yes or No.");
    } else if (formState.step1 === "no") {
      alert("You answered No. Redirecting to home page.");
      window.location.href = "/";
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 1: Do you like React?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="step1"
            value="yes"
            checked={formState.step1 === "yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="step1"
            value="no"
            checked={formState.step1 === "no"}
            onChange={handleChange}
          />
          No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step1;
