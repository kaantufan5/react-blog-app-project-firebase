import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { AuthContext } from "../contexts/AuthContext";
import { AddBlog } from "../helpers/functions";

const NewBlog = () => {
  const navigate = useNavigate();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  const { currentUser } = useContext(AuthContext);
  const initialValues = {
    title: "",
    imageURL: "",
    context: "",
    email: "",
    displayName: "",
    userId: "",
    photoURL: "",
    createdTime: "",
  };

  const [info, setInfo] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
      email: currentUser.email,
      displayName: currentUser.displayName,
      userId: currentUser.uid,
      photoURL: currentUser.photoURL,
      createdTime: dateTime,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(info, navigate);
  };

  return (
    <div>
      {currentUser 
      ? 
      (
        <div className="container mt-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
              <div
                className="card p-3 py-4"
                style={{ backgroundColor: "#e0dac4" }}
              >
                <Grid textAlign="center" style={{ width: "300" }}>
                  <h1 style={{ marginBottom: "1.4rem" }}>──── New Blog ────</h1>
                  <Box style={{ backgroundColor: "#e9e8e3", padding: "20px" }}>
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={3} direction="column">
                        <TextField
                          required
                          name="title"
                          value={info.title}
                          onChange={handleChange}
                          label="Title"
                        />
                        <TextField
                          required
                          name="imageURL"
                          value={info.imageURL}
                          onChange={handleChange}
                          label="Image URL"
                        />
                        <TextField
                          required
                          name="context"
                          multiline
                          rows={14}
                          value={info.context}
                          onChange={handleChange}
                          label="Context"
                        />

                        <Button
                          variant="contained"
                          type="submit"
                          value="Submit"
                          style={{ backgroundColor: "#0b022d" }}
                        >
                          ADD NEW BLOG
                        </Button>
                      </Stack>
                    </form>
                  </Box>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      ) 
      : 
      (
        navigate('/undefined')
      )}
    </div>
  );
};

export default NewBlog;
