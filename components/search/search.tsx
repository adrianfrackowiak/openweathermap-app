import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

interface Props {
  city: string;
  setCity: Function;
}

export const Search: React.FC<Props> = ({ city, setCity }) => {
  const [searchCity, setSearchCity] = useState<string>();

  const onSearchCity = () => {
    setCity(searchCity);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        id="outlined-basic"
        label="Search city"
        variant="outlined"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ marginLeft: "1rem" }}
        onClick={onSearchCity}
      >
        Search
      </Button>
    </Box>
  );
};
