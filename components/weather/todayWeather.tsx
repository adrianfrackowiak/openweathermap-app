import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { formatDate } from "../../functions/functions";

interface Props {
  city: string;
  data: any;
}

export const TodayWeather: React.FC<Props> = ({ city, data }) => {
  return (
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
  );
};
