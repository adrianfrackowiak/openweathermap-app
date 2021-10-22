import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { formatDate } from "../../functions/functions";
import { Forecast } from "../../interfaces/interfaces";

interface Props {
  data: any;
}

export const Forecast5Day: React.FC<Props> = ({ data }) => {
  const [firstDay, setFirstDay] = useState<number>(
    formatDate(data.list[0].dt).getDate()
  );
  const [stateForecast, setStateForecast] = useState<Forecast[]>([]);

  useEffect(() => {
    let morningTemp: number = 0;
    let dayTemp: number = 0;
    let nightTemp: number = 0;
    let fullDayTemp: number[] = [];
    let forecast: Forecast[] = [];

    data.list.map((weather: any, index: any) => {
      const hour = formatDate(weather.dt).getUTCHours();
      const day = formatDate(weather.dt).getDate();
      const month = formatDate(weather.dt).getMonth() + 1;

      if (day >= firstDay && day <= firstDay + 4) {
        if (hour === 6) {
          morningTemp = Math.round(weather.main.temp);
        }
        if (hour === 12) dayTemp = Math.round(weather.main.temp);

        if (hour === 21) {
          nightTemp = Math.round(weather.main.temp);
          fullDayTemp = [morningTemp, dayTemp, nightTemp];
          forecast = [
            ...forecast,
            {
              morningTemp: fullDayTemp[0],
              dayTemp: fullDayTemp[1],
              nightTemp: fullDayTemp[2],
              humidity: weather.main.humidity,
              date: `${day}.${month}`,
            },
          ];
        }
      }
    });
    setStateForecast(forecast);
  }, []);

  if (!data) return <h1>Loading</h1>;

  return (
    <Box
      width={1}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {stateForecast.map((weather: Forecast, index: number) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#f0f0f0",
              borderRadius: "5px",
              padding: "1rem",
              marginBottom: { xs: "2rem" },
              width: { xs: "10rem", md: "8rem" },
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              {weather.date}
            </Typography>
            <Box sx={{ display: "flex" }}>
              {weather.morningTemp ? (
                <Typography m={0.5}>{weather.morningTemp}&#176;C</Typography>
              ) : (
                <Typography m={0.5}>
                  {Math.round(data.list[0].main.temp)}&#176;C
                </Typography>
              )}
              {weather.dayTemp ? (
                <Typography m={0.5}>{weather.dayTemp}&#176;C</Typography>
              ) : (
                <Typography m={0.5}>
                  {Math.round(data.list[0].main.temp)}&#176;C
                </Typography>
              )}
              {weather.nightTemp ? (
                <Typography m={0.5}>{weather.nightTemp}&#176;C</Typography>
              ) : (
                <></>
              )}
            </Box>
            <Typography>Humidity: {weather?.humidity}%</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
