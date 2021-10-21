import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((r) => r.json());

interface Props {
  apiKey: string;
  city: string;
}

export const Weather: React.FC<Props> = ({ apiKey, city }) => {
  const { data, error } = useSWR(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
    fetcher
  );
  if (error) return <div>Failed to load posts</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <Box my={10}>
      <Typography>{data.city.name}</Typography>
      {data.list.map((weather: any, index: any) => {
        if (index % 8 === 0) {
          return (
            <Box key={index}>
              <p>{weather.dt_txt}</p>
              <Typography>{weather.main.temp}</Typography>
            </Box>
          );
        }
      })}
    </Box>
  );
};
