import React from "react";
import { useState } from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import "./search.css";
import { useNavigate } from "react-router-dom";
import isURL from "validator/lib/isURL";
import IconButton from "@mui/material/IconButton";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { useEffect } from "react";

const Search = ({ setSearch, search, theme, setTheme}) => {

  

  const navigate = useNavigate();

  const [invalid, setInvalid] = useState(false);

  const handleButton = () => {
    if (isURL(search) === true) {
      navigate({
        pathname: "data",
        search: `link=${search}`,
      });
    } else {
      setInvalid(true);
    }
  };

  return (
    <Box className="search" bgcolor={theme ? "#00112B" : "#2554C3"}>

      <Stack width="100%" display="flex" alignItems="flex-end">
          <IconButton onClick={() => theme ? setTheme(false) : setTheme(true)}  aria-label="delete" size="large">
              <TipsAndUpdatesOutlinedIcon className="research-icon" />
            </IconButton>
      </Stack>

      <Stack
        sx={{ width: "100%", height: { xs: "93.5vh", sm: "94vh" } }}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Box mb="30px" className="logo" width="200px" height="200px"></Box>

        <Typography
          fontSize={{ xs: "40px", sm: "50px", md: "60px" }}
          mb="10px"
          textOverflow="true"
          color="white"
          textTransform="capitalize"
          textAlign="center"
          variant="h2"
        >
          the <span className="meta-text">Meta-Data</span> of
          <br /> Your link
        </Typography>

        <Typography
          mb="20px"
          fontSize={{ xs: "15px", sm: "18px", md: "22px" }}
          textOverflow="true"
          className="sub-heading"
          textTransform="capitalize"
          textAlign="center"
          variant="h7"
        >
          Get all the information related to the link here! <br />
          such as type, name, image, etc.
        </Typography>

        <Stack alignItems="center" spacing="10px">
          <input
            placeholder="Search URL"
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
            type="text"
          />

          {invalid === true ? (
            <h4 style={{ color: "red", fontWeight: "500" }}>Invalid URL</h4>
          ) : (
            <h1></h1>
          )}

          <Button
            className="button"
            color="error"
            onClick={() => handleButton()}
            variant="contained"
            size="large"
          >
            Preview
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Search;
