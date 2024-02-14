import React from "react";
import { Skeleton } from "@mui/material";

export const ShimmerEffect = ({
  type = "rectangular",
  width = "100%",
  height = 200,
}) => {
  return (
    <>
      <Skeleton variant={type} width={width} height={height} />
    </>
  );
};
