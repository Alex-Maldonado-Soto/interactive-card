import React from "react";
import img from "../assets/images/img";
import {
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const BackgroundDecoration = () => {
  return (
    <CardMedia
      component="header"
      sx={{
        margin: "0",
        width: "100vw",
      }}
    >
      <Box
        component="figure"
        sx={{
          position: "relative",
        }}
      >
        <Img src={img.bgMainMobile} alt="" />
      </Box>
      <Box
        component="figure"
        sx={{
          width: "80%",
          zIndex: "10",
          top: "40px",
          right: "0",
          left: "10%",
          margin: "auto",
        }}
        position={"absolute"}
      >
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          fontSize="1rem"
          sx={{
            top: "42%",
            right: "15%",
            zIndex: 100,
          }}
        >
          123
        </Typography>
        <Img src={img.bgCardBack} alt="" />
      </Box>
      <Box
        component="figure"
        sx={{
          width: "80%",
          zIndex: "100",
          top: "1px",
          marginTop: "10px",
          right: "0",
          left: "-10%",
          margin: "38% auto",
        }}
        position={"absolute"}
      >
        <Box
          sx={{
            width: "8vw",
            height: "8vw",
            position: "absolute",
            top: "15px",
            left: "10%",
            background: "var(--contrastText)",
            borderRadius: "100%",
          }}
        ></Box>
        <Box
          sx={{
            width: "3vw",
            height: "3vw",
            position: "absolute",
            top: "25px",
            left: "25%",
            borderRadius: "100%",
            border: "solid",
            borderWidth: "1px",
            borderColor: "var(--contrastText)",
          }}
        ></Box>
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          fontSize="1.1rem"
          sx={{
            top: "75%",
            right: "10%",
            zIndex: 100,
          }}
        >
          00/00
        </Typography>
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          fontSize="1.2rem"
          sx={{
            top: "50%",
            left: "12%",
            zIndex: 100,
          }}
        >
          0000 0000 0000 0000
        </Typography>
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          fontSize="1.1rem"
          sx={{
            top: "75%",
            left: "10%",
            zIndex: 100,
          }}
        >
          Jane Appleseed
        </Typography>
        <Img src={img.bgCardFront} alt="" />
      </Box>
    </CardMedia>
  );
};