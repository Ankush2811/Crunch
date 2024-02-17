import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";

export default function RestaurantCard(props) {
  const { resData } = props;
  // TODO : 1. Bottom Padding of card should be less
  //        2. Ellipses in Cuisine names
  
  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: 1,
        textDecoration: "none",
        height: "95%",
        borderRadius: 4,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData?.info?.cloudinaryImageId
          }
          alt="crunch"
          sx={{
            borderRadius: 6,
            objectFit: "cover",
            filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px )", // Check::remove bottom border from here
            // boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0.5px 1px 0px rgba(0,0,0,0.14), inset 0px 0px 0px 0px rgba(0,0,0,0.12)",
          }}
        >
          {/* <Typography gutterBottom variant="h5" component="div">
            30 % OFF UPTO 120
          </Typography> */}
        </CardMedia>

        <CardContent
          sx={{
            borderRadius: 4,
            textAlign: "left",
            height: "120px",
            paddingTop: "4px",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            style={{
              fontWeight: "500",
              fontSize: "18px",
              marginBottom: "0px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {resData?.info?.name}
          </Typography>
          <Typography
            gutterBottom
            component="div"
            style={{ fontWeight: "500", fontSize: "14px", marginTop: "2px" }}
          >
            <StarsRoundedIcon style={{ color: "green", fontSize: "14px" }} />{" "}
            {resData?.info?.avgRating}{" "}
            <FiberManualRecordSharpIcon
              fontSize="small"
              style={{ fontSize: "8px" }}
            />{" "}
            {resData?.info?.sla?.slaString}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {resData?.info?.cuisines?.slice(0, 3).join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {resData?.info?.areaName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
