import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
