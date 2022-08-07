import React from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const ImageDataCard = ({ content }) => {
  return (
    <Stack className="data-card" mt="100px" width="70%">
      <Stack direction="row" height="140px" width="100%">
        <Box
          borderRadius="10px 0px 0px 10px"
          bgcolor='#BFE7BB'
          width={{ xs: "10%", md: "5%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {content === "Not found" ? (
            <CancelOutlinedIcon
              color="success"
              sx={{ fontSize: { xs: 25, sm: 40 } }}
            />
          ) : (
            <CheckCircleOutlinedIcon
              color="success"
              sx={{ fontSize: { xs: 25, sm: 40 } }}
            />
          )}
        </Box>
        <Stack width={{ xs: "30%", md: "20%" }}>
          < Typography
            pb="8px"
            textTransform="capitalize"
            mt="2px"
            pl="19px"
            fontWeight={600}
            fontSize={20}
          >
            Image
          </Typography>
          <ul className="data-list">
            <li>
              {content === "Not found" ? (
                <span style={{ color: "red" }}>Not Found</span>
              ) : (
                <span style={{ color: "green" }}>Found</span>
              )}
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href={content}>
                View Image
              </a>
            </li>
          </ul>
        </Stack>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={1}
          pb={1}
          width={{ xs: "50%", md: "40%" }}
        >
          <img className="dataCard-image" src={content} alt="404" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ImageDataCard;
