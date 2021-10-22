import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import useSWR from "swr";
import { Forecast5Day } from "./forecast5day";
import { TodayWeather } from "./todayWeather";

const fetcher = (url: any) => fetch(url).then((r) => r.json());

interface Props {
  apiKey: string;
  city: string;
}

export const Weather: React.FC<Props> = ({ apiKey, city }) => {
  const { data, error } = useSWR(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`,
    fetcher
  );
  if (error) return <div>Failed to load weather</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Box width={1} my={10}>
      <TodayWeather city={data.city.name} data={data} />
      <Forecast5Day data={data} />
    </Box>
  );
};
