import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { formatDate } from "../../functions/functions";
import { Stats } from "../../interfaces/interfaces";
import {
  StyledFlexColCenter,
  StyledStats,
  StyledStatsBox,
  StyledTodayWeather,
  StyledFlexJstColCenter,
} from "../../styles/styles";

interface Props {
  city: string;
  data: any;
  stats?: Stats;
}

export const TodayWeather: React.FC<Props> = ({ city, data, stats }) => {
  return (
    <Box sx={StyledFlexJstColCenter}>
      <Box mb={10} sx={StyledTodayWeather}>
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
        <Box mb={10} sx={StyledFlexColCenter}>
          <Typography variant="h4">Stats</Typography>
          <Box sx={StyledStatsBox}>
            <Typography m={1} sx={StyledStats}>
              Minimum: {stats.minimumValue}&#176;C
            </Typography>
            <Typography m={1} sx={StyledStats}>
              Maximum: {stats.maximumValue}&#176;C
            </Typography>
            <Typography m={1} sx={StyledStats}>
              Mean: {stats.meanValue}&#176;C
            </Typography>
            <Typography m={1} sx={StyledStats}>
              Mode: {stats.modeValue}&#176;C
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
