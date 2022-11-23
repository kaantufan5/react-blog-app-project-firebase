import React, { useContext } from "react";
import { useFetch } from "../helpers/functions";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";


const Dashboard = ({ blogsId, setBlogDetail }) => {
  const navigate = useNavigate();
  const { isLoading, blogList } = useFetch();
  const { currentUser } = useContext(AuthContext);
  const [about, setAbout] = useState();
  

  const detailFunc = (id) => {
    navigate(`/details/${id}`);
  };


  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : blogList?.length === 0 ? (
        <h1>No result found</h1>
      ) : (
        blogList?.map((item, index) => (
          <div key={item.id} className="blogs-cards">
            <Card
              variant="outlined"
              sx={{
                minWidth: 440,
                background: "#09090D",
                borderColor: "#272930",
              }}
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={item.imageURL} alt="" />
                </AspectRatio>
              </CardOverflow>
              <Typography
                level="h2"
                sx={{ fontSize: "md", mt: 2, color: "#EEEFF0" }}
              >
                {item.title}
              </Typography>
              <Typography
                level="body2"
                sx={{ mt: 0.5, mb: 2, color: "#BDBFC4" }}
              >
                {item.displayName} 
              </Typography>
              <CardOverflow
                variant="soft"
                sx={{
                  display: "flex",
                  gap: 1.5,
                  py: 1.5,
                  px: "var(--Card-padding)",
                  borderTop: "1px solid",
                  borderColor: "#272930",
                  bgcolor: "#272930",
                }}
              >
                <Typography
                  level="body3"
                  sx={{
                    fontWeight: "md",
                    color: "#9A9CA2",
                    padding: "0.35rem",
                  }}
                >
                  {item.createdTime}
                </Typography>

                <Button
                  variant="solid"
                  size="sm"
                  onClick={() => detailFunc(item.id)}
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{
                    ml: "13.2rem",
                    fontWeight: 600,
                  }}
                >
                  Details
                </Button>
              </CardOverflow>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
