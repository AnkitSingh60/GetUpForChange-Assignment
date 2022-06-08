import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("Hey kiddo");

    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    result = await result.json();
    console.log("result:", result);

    localStorage.setItem("user", JSON.stringify(result));

    alert("Signup successfully");
    navigate("/login");
  };


  return (
    <>
      <Navbar />

      <div className="mainContainer">
        <div className="box2">
          <h4 className="h2Heading">Sign Up</h4>
          <div className="loginForm">
            <form onSubmit={submitHandler}>
              <div className="form-group col-md-3">
                <label>Name</label>
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="Enter your name"
                />
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Phone</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group col-md-3">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="Enter your password"
                />
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="Confirm your password"
                />
              </div>

              <button className="Loginbutton" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
