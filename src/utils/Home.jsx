import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/multi-steps">Start the Multi-Step in utils folder</Link>
    </div>
  );
};

export default Home;
