import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function ResponsiveFooter() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            {/* <Typography variant="h6" component="div" style={{ color: "#EE302A", fontWeight: "bold" }}>
              Made with
            </Typography> */}
            <Avatar
              variant="square"
              alt="logo"
              src={"/static/images/crunch-logo.jpg"}
              sx={{ width: 80, height: 80, mr: 2 }}
            />
            {/* <Typography variant="h6" component="div" style={{ color: "#EE302A", fontWeight: "bold" }}>
              By Ankush
            </Typography> */}
          </Box>
        </Toolbar>
        <BottomNavigation>
          <BottomNavigationAction>
            <Avatar
              variant="square"
              alt="logo"
              src={"/static/images/crunch-logo.jpg"}
              sx={{ width: 80, height: 80, mr: 2 }}
            />
          </BottomNavigationAction>
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
