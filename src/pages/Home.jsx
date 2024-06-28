import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Application</h1>
      <Link to="/multi-steps">Start Registration Process</Link>
    </div>
  );
};

export default Home;
