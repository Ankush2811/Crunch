import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";

// TODO - 1.Move Search Functionality from layout to here
//        2.Make all buttons Functional

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "#EE302A",
  backgroundColor: "white",
  "&:hover": {
    color: "#EE302A",
  },
  marginLeft: 0,
  fontSize: "12px",
  fontWeight: "bold",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// TODO : Fix the fontWeight of Search.
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#EE302A",
  width: "100%",
  fontSize: "12px",
  fontWeight: "bold",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    fontWeight: "bold",
    outline: "none",
    [theme.breakpoints.up("sm")]: {
      width: "8ch",
      "&:focus": {
        width: "16ch",
      },
    },
  },
  "& .MuiInputBase-input::placeholder": {
    fontWeight: "bold",
    color: "#EE302A",
  },
}));

export default function Header({ filteredList, setListOfRestaurants }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Avatar
              variant="square"
              alt="logo"
              src={"/static/images/crunch-logo-none.png"}
              sx={{ width: 80, height: 80, mr: 2 }}
            />
          </Box>
          <Box style={{ marginRight: "80px" }}>
            <Button
              style={{
                color: "#EE302A",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  {/*TODO : Use this ,improve CSS here*/}
                  {/* <Icon
                    icon="iconamoon:search-light"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "#EE302A", marginRight: "5px" }}
                  /> */}
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="SEARCH..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
              </Search>
              <Button
                style={{ marginRight: "-15px", marginLeft: "-20px" }}
                onClick={() => {
                  const filterSearch = filteredList?.filter((res) =>
                    res?.info?.name.toLowerCase().includes(searchInput)
                  );
                  setListOfRestaurants(filterSearch);
                }}
                onBlur={() => {
                  setSearchInput("");
                  setListOfRestaurants(filteredList);
                }}
              >
                <Icon
                  icon="iconamoon:search-light"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "#EE302A" }}
                />
              </Button>
            </Button>
            <Button
              style={{
                color: "#EE302A",
                fontSize: "12px",
                fontWeight: "bold",
                marginRight: 6,
              }}
            >
              <svg
                viewBox="0 0 32 32"
                height="1.5em"
                width="1.5em"
                fill="#EE302A"
                style={{ marginRight: "5px" }}
              >
                <path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path>
              </svg>
              Offers
            </Button>

            <Button
              style={{
                color: "#EE302A",
                fontSize: "12px",
                fontWeight: "bold",
                marginRight: 8,
              }}
              startIcon={
                <AddShoppingCartIcon style={{ marginRight: "-4px" }} />
              }
            >
              {/*// TODO : Cart Icon*/}
              {/* <svg
                viewBox="-1 0 37 32"
                height="1.5em"
                width="1.5em"
                fill="#686b78"
                style={{ marginRight: "5px" }}
              >
                <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
              </svg>
              <span style={{position:"absolute"}}>0</span> */}
              Cart
            </Button>
            {/* <IconButton style={{ color: "#EE302A" }} aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton> */}
            <Button
              style={{ color: "#EE302A", fontSize: "12px", fontWeight: "bold" }}
            >
              <svg
                className="_1GTCc"
                viewBox="6 0 12 24"
                height="17"
                width="17"
                fill="#EE302A"
                style={{ marginRight: "5px" }}
              >
                <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path>
              </svg>
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
