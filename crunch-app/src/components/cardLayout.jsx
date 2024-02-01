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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CardLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={6} md={2}>
          <Card sx={{ maxWidth: 300, margin: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="198"
                image="/static/images/crunch.jpg"
                alt="crunch"
                sx={{
                  borderRadius: 8,
                  objectFit: "cover",
                  filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px)",
                }}
              >
                {/* <Typography gutterBottom variant="h5" component="div">
            30 % OFF UPTO 120
          </Typography> */}
              </CardMedia>

              <CardContent sx={{ borderRadius: 8, textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div">
                  KFC
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <StarsRoundedIcon /> 4.5{" "}
                  <FiberManualRecordSharpIcon fontSize="small" />
                  30-35 mins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Burgers, Biryani, American Snacks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Palam Vihar
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={2}>
          <Card sx={{ maxWidth: 300, margin: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="198"
                image="/static/images/crunch.jpg"
                alt="crunch"
                sx={{
                  borderRadius: 8,
                  objectFit: "cover",
                  filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px)",
                }}
              >
                {/* <Typography gutterBottom variant="h5" component="div">
            30 % OFF UPTO 120
          </Typography> */}
              </CardMedia>

              <CardContent sx={{ borderRadius: 8, textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div">
                  KFC
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <StarsRoundedIcon /> 4.5{" "}
                  <FiberManualRecordSharpIcon fontSize="small" />
                  30-35 mins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Burgers, Biryani, American Snacks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Palam Vihar
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={2}>
          <Card sx={{ maxWidth: 300, margin: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="198"
                image="/static/images/crunch.jpg"
                alt="crunch"
                sx={{
                  borderRadius: 8,
                  objectFit: "cover",
                  filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px)",
                }}
              >
                {/* <Typography gutterBottom variant="h5" component="div">
            30 % OFF UPTO 120
          </Typography> */}
              </CardMedia>

              <CardContent sx={{ borderRadius: 8, textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div">
                  KFC
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <StarsRoundedIcon /> 4.5{" "}
                  <FiberManualRecordSharpIcon fontSize="small" />
                  30-35 mins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Burgers, Biryani, American Snacks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Palam Vihar
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={2}>
          <Card sx={{ maxWidth: 300, margin: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="198"
                image="/static/images/crunch.jpg"
                alt="crunch"
                sx={{
                  borderRadius: 8,
                  objectFit: "cover",
                  filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px)",
                }}
              >
                {/* <Typography gutterBottom variant="h5" component="div">
            30 % OFF UPTO 120
          </Typography> */}
              </CardMedia>

              <CardContent sx={{ borderRadius: 8, textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div">
                  KFC
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <StarsRoundedIcon /> 4.5{" "}
                  <FiberManualRecordSharpIcon fontSize="small" />
                  30-35 mins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Burgers, Biryani, American Snacks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Palam Vihar
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
