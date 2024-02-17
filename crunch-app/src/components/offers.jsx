import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Header from "./header";
import Box from "@mui/material/Box";

export default function OffersPage() {
  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      <Header />
      <Card
        sx={{
          maxWidth: 450,
          margin: 1,
          textDecoration: "none",
          height: "95%",
          borderRadius: 4,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          OFFERS PAGE
        </Typography>
      </Card>
    </Box>
  );
}
