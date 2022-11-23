import React from "react";
import { Link } from "react-router-dom";

const Undefined = () => {
  return <div>
    <div className="card p-3 py-4" style={{ backgroundColor: "#e0dac4" }}>
          <h2 className="text-center">Profil Bulunamadı</h2>
          <hr />
          <div className="text-center">
            <Link to="/login">
              <button
                className="btn btn-primary px-4 ms-1"
                style={{ backgroundColor: "#0b022d" }}
              >
                Login
              </button>
            </Link>

            <hr />

            <Link to="/register">
              <button
                className="btn btn-primary px-4 ms-1"
                style={{ backgroundColor: "#0b022d" }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
  </div>;
};

export default Undefined;
