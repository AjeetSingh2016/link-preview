import React from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const DataCard = ({ title, content }) => {
  const styles = {
    success: {
      color: "green",
    },
    error: {
      color: "red",
    },
  };
  return (
    <Stack className="data-card" mt="50px" width="70%">
      <Stack direction="row" height="max-content" width="100%">
        <Box
          borderRadius="10px 0px 0px 10px"
          bgcolor='#BFE7BB'
          width={{ xs: "10%", md: "5%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {content ==="Not found" ? (
            <CancelOutlinedIcon
              color="error"
              sx={{ fontSize: { xs: 25, sm: 40 } }}
            />
          ) : (
            <CheckCircleOutlinedIcon
              color="success"
              sx={{ fontSize: { xs: 25, sm: 40 } }}
            />
          )}
        </Box>

        <Stack width={{ xs: "80%", md: "90%" }}>
          <Typography
            textTransform="capitalize"
            mt="2px"
            pl="19px"
            fontWeight={600}
            fontSize={20}
          >
            {title}
          </Typography>
          <ul className="data-list">
            <li>
              {content === "Not found" ? (
                <span style={{ color: "red" }}>Not Found</span>
              ) : (
                <span style={{ color: "green" }}>Found</span>
              )}
            </li>

            {String(content).includes("http") ? (
              <li>
                <a href="{content}">{content}</a>
              </li>
            ) : (
              <li>{content}</li>
            )}
          </ul>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DataCard;
