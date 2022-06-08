import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const auth = localStorage.getItem("user");
  return (
    <>
      <Navbar />
      <h1 className="App">Welcome Ankit Singh</h1>
    </>
  );
};

export default Home;
