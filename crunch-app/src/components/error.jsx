import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography
        gutterBottom
        component="div"
        style={{
          fontWeight: "500",
          fontSize: "50px",
          color: "#EE302A",
        }}
      >
        {error?.status} - {error?.statusText}
      </Typography>
      <Typography
        gutterBottom    
        component="div"
        style={{
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        Oops! Looks like you've ventured into uncharted territory.
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 375,
            height: 180,
          },
        }}
      >
        <Card
          sx={{
            width: 275,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #EE302A",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 16, fontWeight: 500 }}
              color="black"
              gutterBottom
            >
              Here's a joke to lighten the mood:
            </Typography>
            <Typography
              sx={{ fontSize: 16, fontWeight: 400 }}
              color="text.secondary"
              gutterBottom
            >
              Why was the JavaScript developer sad?
            </Typography>
            <Typography
              sx={{ fontSize: 16, fontWeight: 300 }}
              color="text.secondary"
              gutterBottom
            >
              Because he didn't know how to "null" his feelings!
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Button
        variant="contained"
        style={{
          color: "white",
          backgroundColor: "#EE302A",
          marginTop: "30px",
        }}
        component={Link}
        to="/"
      >
        Go Back to your own territory
      </Button>
    </div>
  );
};

export default NotFoundPage;
