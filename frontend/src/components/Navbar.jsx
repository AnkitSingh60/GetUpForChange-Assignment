import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {auth ? (<li className="nav-item">
            {<span className="headernameSpan nav-link">
          {JSON.parse(auth).name.toUpperCase()}
        </span>}
        </li>) : ""}
          {auth ? (
            ""
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {auth ? (<li className="nav-item">
        <Link onClick={logout} className="nav-link logout" to="/">
          Logout
        </Link>
      </li>) : ""}
    </nav>
  );
};

export default Navbar;
