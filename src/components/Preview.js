import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./preview.css";

const Preview = ({image, title, description, link}) => {

  const getHostname = (url) => {
    // use URL constructor and return hostname
    return new URL(url).hostname;
  }

  
  return (
    <Box
      pt="5px"
      display="flex"
      justifyContent="center"
      height="60vh"
      width="100%"
    >
      <Box
        className="prev-card"
        mt="5px"
        pt={{xs:"8px", md:"15px"}}
        bgcolor="white"
        justifyContent="center"
        alignItems="center"
        width={{ xs: "90%", sm: "70%", md:"50%", lg: "30%" }}

        display="flex"
        flexDirection="column"
      >
        <Stack  display="flex" justifyContent="center" width="90%" height="85%" bgcolor="">
          
          <img
            className="prev-img"
            src={image}
            alt=""
          />

          <Stack p="5px" className="prev-item">
            <Typography className="name">
              {title}
            </Typography>
            <Typography className="description" variant="h7">
             {description}{"...."}
            </Typography>
            <Typography textTransform="capit" className="website" variant="h">
              {getHostname(link)}
            </Typography>
          </Stack>
        </Stack>
        <Typography
          className="link"
          variant="h7"
          fontSize={{ xs: "16px", md: "20px" }}
          width="90%"
          overflow="hidden"
          mt="15px"
          pb="2px"
        >
          <a href="">
            {link}
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Preview;
