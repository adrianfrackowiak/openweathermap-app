import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  city: string;
}

export const TodayWeather: React.FC<Props> = ({ city }) => {
  return (
    <Box>
      <Typography>{city}</Typography>
    </Box>
  );
};
