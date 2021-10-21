import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const Search: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField id="outlined-basic" label="Search city" variant="outlined" />
      <Button variant="contained" sx={{ marginLeft: "1rem" }}>
        Search
      </Button>
    </Box>
  );
};
