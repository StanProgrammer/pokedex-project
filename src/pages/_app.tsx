import { type AppType } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { api } from "~/utils/api";
import theme from "~/styles/theme";
import "~/styles/globals.css";
import Layout from "~/components/layouts/main";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
