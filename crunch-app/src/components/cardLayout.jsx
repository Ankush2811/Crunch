import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import ActionAreaCard from "./card";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function CardLayout() {
  const restaurantList = {
    restaurants: [
      {
        info: {
          id: "95857",
          name: "Domino's Pizza",
          cloudinaryImageId: "cmfruzqw8ib4r392rlsa",
          locality: "Priyadarsani Parisar West",
          areaName: "Nehru Nagar",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
          avgRating: 4.4,
          parentId: "2456",
          avgRatingString: "4.4",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 25,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-02-04 01:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-63f33cf4-e88f-47a0-9446-03909fd2e50c",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/dominos-pizza-priyadarsani-parisar-west-nehru-nagar-bhilai-95857",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "126739",
          name: "KFC",
          cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
          locality: "Nehru Nagar",
          areaName: "Durg Bhilai",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          avgRating: 4.3,
          parentId: "547",
          avgRatingString: "4.3",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-02-04 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-63f33cf4-e88f-47a0-9446-03909fd2e50c",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/kfc-nehru-nagar-durg-bhilai-bhilai-126739",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "508855",
          name: "Gianis - Ice Cream, Shakes & Sundaes",
          cloudinaryImageId: "2365e2117e199c2b9a2cfa643c31b05c",
          locality: "Civic Center Area",
          areaName: "Nehru Nagar",
          costForTwo: "₹250 for two",
          cuisines: ["Ice Cream", "Bakery", "Beverages"],
          avgRating: 4.4,
          veg: true,
          parentId: "427371",
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-02-03 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-63f33cf4-e88f-47a0-9446-03909fd2e50c",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/gianis-ice-cream-shakes-and-sundaes-civic-center-area-nehru-nagar-bhilai-508855",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "450247",
          name: "Sweet Truth",
          cloudinaryImageId: "81cf6bfe2760a45a0caf2e28716ca4d7",
          locality: "Surya Vihar Colony",
          areaName: "Durg Bhilai",
          costForTwo: "₹450 for two",
          cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
          avgRating: 4.6,
          parentId: "4444",
          avgRatingString: "4.6",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-02-03 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹110",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-63f33cf4-e88f-47a0-9446-03909fd2e50c",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/sweet-truth-surya-vihar-colony-durg-bhilai-bhilai-450247",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      <Grid container spacing={1} justifyContent="center">
        {restaurantList?.restaurants.map((res) => (
          <Grid key={res?.info?.id} item xs={12} sm={6} md={4} lg={2}>
            <ActionAreaCard resData={res} />
          </Grid>
        ))}
        {/* <Grid item xs={12} sm={6} md={4} lg={2}>
          <ActionAreaCard resData={restaurantList?.restaurants[1]?.info} />
        </Grid>
        */}
      </Grid>
    </Box>
  );
}
