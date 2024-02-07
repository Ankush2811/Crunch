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

//TODO :: Make a Design for footer component
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
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="white">
//       {"Copyright © "}
//       <Link style={{ color: "white" }} href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Footer() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "100vh",
//         }}
//       >
//         <CssBaseline />

//         <Box
//           component="footer"
//           sx={{
//             py: 3,
//             px: 2,
//             mt: "auto",
//             backgroundColor: "#02060C",
//           }}
//         >
//           <Container maxWidth="sx" sx={{ textAlign: "center" }}>
//             <Avatar
//               variant="square"
//               alt="logo"
//               src={"/static/images/crunch-logo.jpg"}
//               sx={{ width: 80, height: 80, margin: "auto" }}
//             />
//             <Typography variant="body1" style={{ color: "white" }}>
//               About * Help * Links
//             </Typography>
//             <Copyright />
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Avatar from "@mui/material/Avatar";

const FooterContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const FooterContent = styled(Box)({
  py: 3,
  px: 2,
  mt: "auto",
  backgroundColor: "#02060C",
});

const FooterLogo = styled(Avatar)({
  width: 80,
  height: 80,
  margin: "auto",
});

const FooterLinks = styled(Typography)({
  variant: "body1",
  color: "white",
  "& a": {
    color: "white",
    textDecoration: "none",
    marginRight: 10,
  },
});

const CopyrightText = styled(Typography)({
  variant: "body2",
  color: "white",
});

const defaultTheme = createTheme();

export default function Footer() {
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Leftmost - Avatar and Copyright */}
          <Box
            sx={{
              flexBasis: "25%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Avatar
              variant="square"
              alt="logo"
              src={"/static/images/crunch-logo-none.png"}
              sx={{ width: 160, height: 160 }}
            />
            <Typography
              variant="body1"
              style={{ color: "white", marginTop: 2 }}
            >
              Copyright © {new Date().getFullYear()}
            </Typography>
          </Box>

          {/* Company-related links */}
          <Box sx={{ flexBasis: "25%", marginLeft: 4 }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Company
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              About
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Careers
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Team
            </Typography>
            {/* Add other Company-related links as needed */}
          </Box>

          {/* Contact and Legal links */}
          <Box sx={{ flexBasis: "25%", textAlign: "left", marginLeft: 4 }}>
            <Typography variant="body1" style={{ color: "white" }}>
              Contact us
            </Typography>
            {/* Add other Contact-related links as needed */}
            <Typography variant="body1" style={{ color: "white", mt: 2 }}>
              Legal
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Terms & Conditions
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Cookie Policy
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Privacy Policy
            </Typography>
          </Box>

          {/* Rightmost - We deliver to */}
          <Box sx={{ flexBasis: "25%", textAlign: "right", marginLeft: 4 }}>
            <Typography variant="body1" style={{ color: "white" }}>
              We deliver to:
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Bangalore
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Gurgaon
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              Hyderabad
            </Typography>
            {/* Add other delivery locations as needed */}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
