import React from "react";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import isURL from 'validator/lib/isURL';
import { useState } from "react";

const InputBox = () => {

const [search, setSearch] = useState("")

 const navigate = useNavigate();

  const [invalid, setInvalid] = useState(false)

  const handleButton = () => {
    if(isURL(search)===true){
        navigate({
        pathname: '/',
        
      });
      window.location.reload();
      }
      else{
        setInvalid(true)
      }
    
  };

  return (
    <Box  display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <div className="searchBox">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
          type="text"
          placeholder="Search More URL"
        />
        
          <IconButton onClick={() => handleButton()}  className="searchButton" aria-label="delete" size="large">
            <ReplayIcon className="research-icon" />
          </IconButton>

      </div>
      {invalid === true ? <h4 style={{color: "red", fontWeight:"500"}} >Invalid URL</h4>: <h1></h1>}
    </Box>
  );
};

export default InputBox;
