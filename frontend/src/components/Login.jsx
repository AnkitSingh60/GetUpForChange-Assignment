import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log("result:", result);
    if (
      result.Message ===
      "Either the email or the password you entered is not correct"
      ) {
          alert("Invalid login! Press CLEAR to login again.");
          
        } else {
            alert("Logged in successfully");
            navigate("/");
    }
    localStorage.setItem("user", JSON.stringify(result));
  };

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="box1">
          <h4 className="h2Heading">Login</h4>
          <div className="loginForm">
            <form onSubmit={submitHandler}>
              <div className="form-group col-md-3">
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
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="Enter your password"
                />
              </div>

              <button className="Loginbutton" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
