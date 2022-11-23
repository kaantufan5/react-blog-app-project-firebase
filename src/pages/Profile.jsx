import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import DoneIcon from "@mui/icons-material/Done";
import { AuthContext } from "../contexts/AuthContext";
import emptyProfile from "../assets/Default-Profile.png"
import { resetPassword, userDelete, verifyEmail } from "../helpers/functions";


const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const photoURL = currentUser.photoURL
  const navigate = useNavigate();
  let blognumber = 0;

  const onDelete = () => {
    userDelete(navigate)
  }

  const changePassword = () => {
    resetPassword(navigate)
  } 

  const sendEmail = () => {
    verifyEmail(navigate)
  }

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          {currentUser 
          ? 
          (
            <div
              className="card p-3 py-4"
              style={{ backgroundColor: "#e0dac4" }}
            >
              <div className="text-center">
                  <img
                  src={emptyProfile}
                  width="100"
                  alt="profilePNG"
                  className="rounded-circle"
                  />
              </div>
              <div className="text-center mt-3">
                <h2 className="mt-2 mb-0">
                  {currentUser.displayName
                    ? currentUser.displayName
                    : "Kullanıcı Adı Bulunamadı!"}
                </h2>
                <hr />

                <div className="px-4 mt-3">
                  <h5 className="text-align-left">Email</h5>
                  <p>{currentUser.email ? currentUser.email : "Bulunamadı"}</p>
                </div>

                <div className="px-4 mt-3">
                  <h5 className="text-align-left">Email Verified</h5>
                  <p>
                    {currentUser.emailVerified ? (
                      <DoneIcon color="success" />
                    ) : (
                      <div>
                        <DoNotDisturbIcon sx={{ color: pink[500] }}/>
                        <br />
                        <Link to={"/profile"} onClick={sendEmail} >Click me for verify your email</Link>
                      </div>
                    )}
                  </p>
                </div>

                <div id="myModal" className="modal fade">
	  <div className="modal-dialog modal-confirm">
		<div className="modal-content">
			<div className="modal-header flex-column">
				<div className="icon-box">
					<i className="material-icons">&#xE5CD;</i>
				</div>						
				<h4 className="modal-title w-100">Are you sure?</h4>	
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div className="modal-body">
				<h5>Do you really want to delete your profile?</h5>
			</div>
			<div className="modal-footer justify-content-center">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" onClick={() => onDelete()} className="btn btn-danger" data-dismiss="modal">Delete</button>
			</div>
		</div>
	</div>
</div>   

                <div className="buttons">

                    <button
                      className="btn btn-danger delete-btn"
                      href="#myModal" 
                      data-toggle="modal"
                    >
                      Delete Profile
                    </button>

                  <Link to="/">
                    <button
                      className="btn btn-primary home-btn"
                    >
                      Home
                    </button>
                  </Link>

                  <Link to="/">
                    <button
                      className="btn btn-warning reset-btn"
                      onClick={changePassword}
                    >
                      Change Password
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ) 
          : 
          (
            navigate('/undefined')
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
