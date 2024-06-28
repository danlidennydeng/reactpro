import React from "react";

const Step3 = ({ setFormState, formState, nextStep }) => {
  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, step3: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.step3) {
      alert("Please select Yes or No.");
    } else if (formState.step3 === "no") {
      alert("You answered No. Redirecting to home page.");
      window.location.href = "/";
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 3: Do you like programming?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="step3"
            value="yes"
            checked={formState.step3 === "yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="step3"
            value="no"
            checked={formState.step3 === "no"}
            onChange={handleChange}
          />
          No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step3;
