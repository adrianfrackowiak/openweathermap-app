import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { formatDate } from "../../functions/functions";
import { Stats } from "../../interfaces/interfaces";

interface Props {
  city: string;
  data: any;
  stats?: Stats;
}

export const TodayWeather: React.FC<Props> = ({ city, data, stats }) => {
  return (
    <Box>
      <Box mb={10} sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4">{city}</Typography>
          <Typography>
            {formatDate(data.list[0].dt).getDate()}.
            {formatDate(data.list[0].dt).getMonth() + 1}.
            {formatDate(data.list[0].dt).getFullYear()},{" "}
            {formatDate(data.list[0].dt).getUTCHours()}:00
          </Typography>
        </Box>
        <Box ml={6}>
          <Typography variant="h3">
            {Math.round(data.list[0].main.temp)}&#176;C
          </Typography>
        </Box>
      </Box>
      {stats && (
        <Box
          mb={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Stats</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Typography
              m={1}
              sx={{
                fontWeight: "500",
                background: "#f5f5f5",
                borderRadius: "10px",
                padding: "0.5rem 1rem",
              }}
            >
              Minimum: {stats.minimumValue}&#176;C
            </Typography>
            <Typography
              m={1}
              sx={{
                fontWeight: "500",
                background: "#f5f5f5",
                borderRadius: "10px",
                padding: "0.5rem 1rem",
              }}
            >
              Maximum: {stats.maximumValue}&#176;C
            </Typography>
            <Typography
              m={1}
              sx={{
                fontWeight: "500",
                background: "#f5f5f5",
                borderRadius: "10px",
                padding: "0.5rem 1rem",
              }}
            >
              Mean: {stats.meanValue}&#176;C
            </Typography>
            <Typography
              m={1}
              sx={{
                fontWeight: "500",
                background: "#f5f5f5",
                borderRadius: "10px",
                padding: "0.5rem 1rem",
              }}
            >
              Mode: {stats.modeValue}&#176;C
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
