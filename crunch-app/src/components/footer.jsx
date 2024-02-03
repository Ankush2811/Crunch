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

//TODO
// export default function ResponsiveFooter() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: "white" }}>
//         <Toolbar sx={{ justifyContent: "center" }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             ></IconButton>
//             {/* <Typography variant="h6" component="div" style={{ color: "#EE302A", fontWeight: "bold" }}>
//               Made with
//             </Typography> */}
//             <Avatar
//               variant="square"
//               alt="logo"
//               src={"/static/images/crunch-logo.jpg"}
//               sx={{ width: 80, height: 80, mr: 2 }}
//             />
//             {/* <Typography variant="h6" component="div" style={{ color: "#EE302A", fontWeight: "bold" }}>
//               By Ankush
//             </Typography> */}
//           </Box>
//         </Toolbar>
//         <BottomNavigation>
//           <BottomNavigationAction>
//             <Avatar
//               variant="square"
//               alt="logo"
//               src={"/static/images/crunch-logo.jpg"}
//               sx={{ width: 80, height: 80, mr: 2 }}
//             />
//           </BottomNavigationAction>
//         </BottomNavigation>
//       </AppBar>
//     </Box>
//   );
// }
// import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link style={{ color: "white" }} href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ResponsiveFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: "#02060C",
          }}
        >
          <Container maxWidth="sx" sx={{ textAlign: "center" }}>
            <Avatar
              variant="square"
              alt="logo"
              src={"/static/images/crunch-logo.jpg"}
              sx={{ width: 80, height: 80, margin: "auto" }}
            />
            <Typography variant="body1" style={{ color: "white" }}>
              About * Help * Links
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
