import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const auth = localStorage.getItem("user");
  return (
    <>
      <Navbar />
      {auth ? (
        <h1 className="HomH1">
          {" "}
          <div className="imageDiv">
         <img className="image" src="https://clipart.world/wp-content/uploads/2021/06/Welcome-clipart-png.png" alt="welcomeImg" />
         </div>
          <span className="wlcmspan">____</span>
          {"`"}
          <span className="nameSpan">
            {JSON.parse(auth).name.toUpperCase()}
            {"`___"}
          </span>
        </h1>
      ) : (
          <>
            <div className="imageDiv">
         <img className="image" src="https://clipart.world/wp-content/uploads/2021/06/Welcome-clipart-png.png" alt="welcomeImg" />
         </div>

        <h1 className="HomH1">
         <span className="nameSpan">Please Login/Signup </span> </h1>
          </> 
      )}
   
    </>
  );
};

export default Home;
