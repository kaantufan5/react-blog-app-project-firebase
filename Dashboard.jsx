import React from "react";
import { useFetch } from "../helpers/functions";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import randomColor from "randomcolor";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Dashboard = () => {
  const color = randomColor();
  const { isLoading, blogList } = useFetch();
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : blogList?.length === 0 ? (
        <h1>No result found</h1>
      ) : (
        blogList?.map((item, index) => (
          // <ul>
          //   <h3>Display Name: {item.displayName}</h3>
          //   <h2>Title: {item.title}</h2>
          //   <Stack direction="row" spacing={2}>
          //     <Avatar sx={{ bgcolor: deepOrange[500] }}>
          //       {item.displayName[0].toUpperCase()}
          //     </Avatar>
          //   </Stack>
          //   <img src={item.imageURL} alt="blog-profile" width="150px" />
          //   <p>Email: {item.email}</p>
          //   <p>Created Time: {item.createdTime}</p>
          //   <p>Context: {item.context}</p>
          // </ul>

          <div className="blogs-cards">
            <Card
              sx={{ maxWidth: 320, backgroundColor: "#1E1E1E", maxHeight: 445 }}
            >
              <CardHeader
                sx={{
                  color: "white",
                }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], color: "black" }}
                    aria-label="recipe"
                  >
                    {item.displayName[0].toUpperCase()}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.title}
                subheader={item.createdTime}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.imageURL}
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="#888888"
                  sx={{ height: 90, maxHeight: 90 }}
                >
                  {item.context}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  sx={{
                    color: "white",
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="share"
                  sx={{
                    color: "white",
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
