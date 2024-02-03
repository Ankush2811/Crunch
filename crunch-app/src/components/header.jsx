import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Header() {
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
              src={"/static/images/crunch-logo.jpg"}
              sx={{ width: 100, height: 100, mr: 2 }}
            />
          </Box>
          <Box style={{ marginRight: "80px" }}>
            <Button
              style={{
                color: "#EE302A",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: 6,
              }}
            >
              Search
            </Button>
            <Button
              style={{
                color: "#EE302A",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: 6,
              }}
            >
              Offers
            </Button>
            <Button
              style={{
                color: "#EE302A",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: 16,
              }}
              endIcon={<AddShoppingCartIcon />}
            >
              Cart
            </Button>
            {/* <IconButton style={{ color: "#EE302A" }} aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton> */}
            <Button
              variant="outlined"
              style={{ color: "#EE302A",fontSize:"18px", fontWeight: "bold" }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
