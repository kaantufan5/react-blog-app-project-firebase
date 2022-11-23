import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ktlogo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="ana-baslik navbar-brand text-white pt-3">
            <img className="ktlogo" src={ktlogo} alt="kaantufanLogo" />
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  <Link to="/profile" className="text-white">
                    {currentUser.displayName}
                  </Link>
                </h5>
                <button
                  className="ms-2 btn btn-success"
                  onClick={() => navigate("/newblog")}
                >
                  New Blog
                </button>
                <button
                  className="ms-2 btn btn-danger"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
