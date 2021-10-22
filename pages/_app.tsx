import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      background: {
        default: "#634CFF",
      },
      text: {
        primary: "#ffffff",
      },
      primary: {
        main: "#6B56FD",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
