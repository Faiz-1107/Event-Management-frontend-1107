
import React from "react";
import Hero from "../components/Hero";

const Home = ({ isLoggedIn, onShowSignup }) => {
  return (
    <Hero
      isLoggedIn={isLoggedIn}
      onShowSignup={onShowSignup} 
    />
  );
};

export default Home;
