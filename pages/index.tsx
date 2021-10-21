import Head from "next/head";
import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Search } from "../components/search/search";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tivix - OpenWeatherMap 🌞</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <Search />
      </Container>
    </>
  );
};

export default Home;
