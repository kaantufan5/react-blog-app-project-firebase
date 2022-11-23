import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signIn(email, password, navigate);
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
            <h1 className="form-title display-3">You have already logged</h1>
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
            className="register-form-login"
            style={{ backgroundColor: "#e0dac4" }}
          >
            <h1 className="form-title display-2 login-title">Login</h1>
            <form id="register" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email name"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password name"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="link">Forgot Password?</div>
              <input
                style={{ backgroundColor: "#0b022d" }}
                type="submit"
                className="btn btn-primary mt-3 form-control login-btn"
                value="Login"
              />
            </form>
            <button
              style={{ backgroundColor: "#0b022d" }}
              className="btn btn-primary form-control login-google-btn"
              onClick={handleProviderLogin}
            >
              Continue with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
