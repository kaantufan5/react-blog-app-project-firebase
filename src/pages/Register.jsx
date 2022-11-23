import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { createUser, signUpProvider } from "../helpers/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName);
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div>
      {currentUser ? (
        <div
          className="d-flex justify-content-center"
          style={{
            height: "84vh",
          }}
        >
          <div
            className="register-form-register"
            style={{ backgroundColor: "#e0dac4" }}
          >
            <h1 className="form-title display-3">
              You have already registered
            </h1>
            <button
              className="btn btn-primary form-control"
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "#0b022d",
              }}
            >
              Home
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div
            className="register-form-register"
            style={{ backgroundColor: "#e0dac4" }}
          >
            <h1 className="form-title display-3 register-title">Register</h1>
            <form id="register" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter Your First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />

                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />

                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <input
                  type="submit"
                  className="btn btn-primary form-control register-btn"
                  value={"Register"}
                  style={{ backgroundColor: "#0b022d" }}
                />

                <button
                  className="btn btn-primary form-control register-google-btn"
                  onClick={handleProviderLogin}
                  style={{ backgroundColor: "#0b022d" }}
                >
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
