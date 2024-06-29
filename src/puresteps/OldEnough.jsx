import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OldEnough = ({ goToStep }) => {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === "yes") {
      alert(
        "Sorry! You are not ready to register with us yet. Please register yourself to your state government as an active voter first"
      );
      navigate("/");
    } else if (answer === "no") {
      goToStep(2);
    } else {
      alert("Please select an answer.");
    }
  };

  return (
    <div>
      <h2>Are you old enough to vote?</h2>
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

export default OldEnough;
