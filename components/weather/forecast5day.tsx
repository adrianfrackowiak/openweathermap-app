import { Grid, Typography } from "@mui/material";

interface Props {
  data: any;
}

export const Forecast5Day: React.FC<Props> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.list.map((weather: any, index: any) => {
        if (index % 8 === 0) {
          return (
            <Grid item key={index}>
              <p>{weather.dt_txt}</p>
              <Typography>{weather.main.temp}</Typography>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};
