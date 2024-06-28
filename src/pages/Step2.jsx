import React from "react";

const Step2 = ({ setFormState, formState, nextStep }) => {
  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, step2: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.step2) {
      alert("Please select Yes or No.");
    } else if (formState.step2 === "no") {
      alert("You answered No. Redirecting to home page.");
      window.location.href = "/";
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 2: Do you like JavaScript?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="step2"
            value="yes"
            checked={formState.step2 === "yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="step2"
            value="no"
            checked={formState.step2 === "no"}
            onChange={handleChange}
          />
          No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step2;
