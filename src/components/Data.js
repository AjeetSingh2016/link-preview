import React from "react";
import { Stack, Box, Button } from "@mui/material";
import "./Data.css";
import { useState, useEffect } from "react";
import DataCard from "./DataCard";
import ImageDataCard from "./ImageDataCard";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";
import Preview from "./Preview";
import InputBox from "./InputBox";

const Data = ({ setSearch, theme}) => {
  const getHostname = (url) => {
    // use URL constructor and return hostname
    return new URL(url).hostname;
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "734c98e533mshac21f9ea978fbbfp1b7b89jsnf6b8b2ba7dd1",
      "X-RapidAPI-Host": "link-preview4.p.rapidapi.com",
    },
  };

  const search = useLocation().search;
  const link = new URLSearchParams(search).get("link");

  const url = `https://link-preview4.p.rapidapi.com/?url=${link}&oembed=false`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const image = "og:image";
  const site = "og:site_name";
  const title = "og:title";
  const type = "og:type";

  const description = "description";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, options);
      const fetchedData = await response.json();
      console.log(link);
      setData({ ...fetchedData });
      setLoading(true);
    }
    fetchData();
  }, []);

  return (
    <Box
      className="main-box"
      width="100%"
      height="max-content"
      alignItems="center"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      bgcolor={theme ?  "#F8E4C2" : "#00112B"}
    >
      {loading ? (
        <Preview
          image={
            image in data.ogp
              ? data.ogp[image]
              : "https://s4.gifyu.com/images/istockphoto-924949200-170667a.th.jpg"
          }
          title={data.title ? data.title : "Not found"}
          description={String(data.seo[description]).slice(0, 80)}
          link={link}
        />
      ) : (
        <Loader />
      )}

      <InputBox setSearch={setSearch} searches={setSearch} />
      <Stack
        pb="20px"
        width="100%"
        spacing={{ xs: 7, md: 7 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {loading ? (
          <DataCard
            title="Site"
            content={getHostname(link) ? getHostname(link) : "Not found"}
          />
        ) : (
          <Loader />
        )}
        {loading ? (
          <DataCard
            title="type"
            content={type in data.ogp ? data.ogp[type] : "Not found"}
          />
        ) : (
          <Loader />
        )}
        {loading ? (
          <ImageDataCard
            title="image"
            content={image in data.ogp ? data.ogp[image] : "Not found"}
          />
        ) : (
          <Loader />
        )}
        {loading ? (
          <DataCard
            title="Title"
            content={data.title ? data.title : "Not found"}
          />
        ) : (
          <Loader />
        )}
        {loading ? (
          <DataCard
            title="Description"
            content={String(data.seo[description]).slice(0, 200)}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default Data;
