import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function OffersPage() {
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
      <Typography variant="body2" color="text.secondary">
        OFFERS PAGE
      </Typography>
    </Card>
  );
}
