import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {
  StyledFlexJstCenter,
  StyledSearchTextField,
  StyledSearchButton,
} from "../../styles/styles";

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
    <Box sx={StyledFlexJstCenter}>
      <TextField
        id="outlined-basic"
        label="Search city"
        variant="outlined"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        sx={StyledSearchTextField}
        InputLabelProps={{
          style: { color: "#ffffff" },
        }}
      />
      <Button
        variant="contained"
        sx={StyledSearchButton}
        onClick={onSearchCity}
      >
        Search
      </Button>
    </Box>
  );
};
