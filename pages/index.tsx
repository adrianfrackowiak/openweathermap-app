import Head from "next/head";
import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Search } from "../components/search/search";
import { Weather } from "../components/weather/weather";
import { useState } from "react";

const Home: NextPage = () => {
  const [apiKey, setApiKey] = useState<string>(
    "fcb45636806adab2dfbc1dc76c85fd64"
  );
  const [city, setCity] = useState<string>("london");

  return (
    <>
      <Head>
        <title>Tivix - OpenWeatherMap 🌞</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <Typography variant="h5" component="h1" my={10}>
          TIVIX - OpenWeatherMap 🌞
        </Typography>
        <Search city={city} setCity={setCity} />
        <Weather apiKey={apiKey} city={city} />
      </Container>
    </>
  );
};

export default Home;
