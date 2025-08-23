// import React from "react";
// import Hero from "../components/Hero";

// const Home = () => {
//     return (
//         <div>
//             <Hero />
//         </div>
//     );
// }

// export default Home;



// frontend/src/components/Home.jsx
import React from "react";
import Hero from "../components/Hero";

const Home = ({ isLoggedIn, onShowSignup }) => {
  return (
    <Hero
      isLoggedIn={isLoggedIn}
      onShowSignup={onShowSignup} // ⭐ passes signup trigger to Hero
    />
  );
};

export default Home;
