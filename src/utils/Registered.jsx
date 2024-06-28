import React, { useState } from "react";

const Registered = ({ goToStep }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === "yes") {
      goToStep(2);
    } else if (answer === "no") {
      goToStep(3);
    } else {
      alert("Please select an answer.");
    }
  };

  return (
    <div>
      <h2>Have you registered to vote yet?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="yes"
            checked={answer === "yes"}
            onChange={(e) => setAnswer(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={answer === "no"}
            onChange={(e) => setAnswer(e.target.value)}
          />
          No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Registered;
