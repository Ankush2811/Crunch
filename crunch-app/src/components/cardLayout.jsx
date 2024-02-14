import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import RestaurantCard from "./card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShimmerEffect } from "./shimmer";

export default function RestaurantCardLayout() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfTopRestaurants, setListOfTopRestaurants] = useState(null);
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4998403&lng=77.061843&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    const json = await data.json();
    console.log("json", json);

    setListOfTopRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const allRes =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setOriginalList(allRes);
    setListOfRestaurants(allRes);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let filterByFastDelivery = () => {
    const filteredList = originalList.filter(
      (res) => res?.info?.sla?.deliveryTime < 30
    );
    setListOfRestaurants(filteredList);
  };
  const originalData = () => {
    setListOfRestaurants(originalList);
  };
  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      <Typography
        variant="h6"
        style={{ marginTop: "25px", marginBottom: "18px" }}
      >
        Top Rated Restaurants
      </Typography>
      {loading ? (
        <Grid container spacing={1} justifyContent="center">
          {[...Array(5)].map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2.25}>
              <ShimmerEffect />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={1} justifyContent="center">
          {listOfTopRestaurants
            ?.filter((res) => res?.info?.avgRating >= 4)
            .slice(0, 5)
            .map((res) => (
              <Grid key={res?.info?.id} item xs={12} sm={6} md={4} lg={2.25}>
                <RestaurantCard resData={res} />
              </Grid>
            ))}
        </Grid>
      )}

      <Divider
        style={{
          paddingTop: "25px",
          margin: "30px",
          marginLeft: "80px",
          marginRight: "80px",
        }}
      />
      <Typography variant="h6">All Restaurants</Typography>
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
        onClick={originalData}
      >
        {loading ? <ShimmerEffect width={100} height={30} /> : "All"}
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
          const filteredByRating = originalList.filter(
            (res) => res?.info?.avgRating >= 4
          );
          setListOfRestaurants(filteredByRating);
        }}
      >
        {loading ? <ShimmerEffect width={100} height={30} /> : "Ratings 4.0+"}
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
        {loading ? <ShimmerEffect width={100} height={30} /> : "Fast Delivery"}
      </Button>
      {loading ? (
        <Grid container spacing={1} justifyContent="center">
        {[...Array(15)].map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={2.25}>
            <ShimmerEffect />
          </Grid>
        ))}
      </Grid>
      ) : (
        <Grid container spacing={1} justifyContent="center">
          {listOfRestaurants?.map((res) => (
            <Grid key={res?.info?.id} item xs={12} sm={6} md={4} lg={2.25}>
              <RestaurantCard resData={res} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
