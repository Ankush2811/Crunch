import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import RestaurantCard from "./card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { restaurantList } from "../utils/mockData";

export default function RestaurantCardLayout() {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    restaurantList.restaurants
  );

  let filterByFastDelivery = () => {
    const filteredList = restaurantList?.restaurants.filter(
      (res) => res.info.sla.deliveryTime < 30
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      <Typography variant="body1">Top Rated Restaurants</Typography>
      <Grid container spacing={1} justifyContent="center">
        {restaurantList?.restaurants
          .filter((res) => res?.info?.avgRating > 4)
          .map((res) => (
            <Grid key={res?.info?.id} item xs={12} sm={6} md={4} lg={2.25}>
              <RestaurantCard resData={res} />
            </Grid>
          ))}
      </Grid>
      <Divider style={{ paddingTop: "30px", margin: "30px" }} />
      <Typography variant="body1">All Restaurants</Typography>
      <Button
        variant="outlined"
        style={{
          color: "#EE302A",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "18px",
          margin: "10px",
          border: "1px solid rgb(226, 226, 231)",
        }}
        onClick={() => {
          setListOfRestaurants(restaurantList?.restaurants);
        }}
      >
        All
      </Button>
      <Button
        variant="outlined"
        style={{
          color: "#EE302A",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "18px",
          border: "1px solid rgb(226, 226, 231)",
        }}
        onClick={() => {
          const filteredByRating = restaurantList?.restaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredByRating);
        }}
      >
        Ratings 4.0+
      </Button>
      <Button
        variant="outlined"
        style={{
          color: "#EE302A",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "18px",
          border: "1px solid rgb(226, 226, 231)",
          marginLeft: "10px",
        }}
        onClick={filterByFastDelivery}
      >
        Fast Delivery
      </Button>
      <Grid container spacing={1} justifyContent="center">
        {listOfRestaurants.map((res) => (
          <Grid key={res?.info?.id} item xs={12} sm={6} md={4} lg={2.25}>
            <RestaurantCard resData={res} />
          </Grid>
        ))}
        {/* <Grid item xs={12} sm={6} md={4} lg={2}>
          <RestaurantCard resData={restaurantList?.restaurants[1]?.info} />
        </Grid>
        */}
      </Grid>
    </Box>
  );
}
