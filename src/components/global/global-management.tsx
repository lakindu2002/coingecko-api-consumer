import { Box, Grid } from "@mui/material";
import { useGlobal } from "coingecko/hooks/use-global";
import { FC, useEffect } from "react";
import { ErrorView } from "../common/error-view";
import { GlobalCard } from "./global-card";

interface GlobalManagementProps {}

export const GlobalManagement: FC<GlobalManagementProps> = () => {
  const { errorInformation, getGlobalMarketInformation, information, loading } =
    useGlobal();

  const formatter = new Intl.NumberFormat();

  useEffect(() => {
    getGlobalMarketInformation();
  }, []);

  return (
    <Box sx={{ my: 2 }}>
      {errorInformation && (
        <Box sx={{ my: 2 }}>
          <ErrorView message={errorInformation.message} />
        </Box>
      )}

      {!loading && information && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <GlobalCard
              title={"active_cryptocurrencies"}
              value={formatter.format(information.active_cryptocurrencies)}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <GlobalCard
              title={"ended_icos"}
              value={formatter.format(information.ended_icos)}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <GlobalCard
              title={"market_cap_change_percentage_24h_usd"}
              value={`${information.market_cap_change_percentage_24h_usd.toFixed(
                2
              )}%`}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <GlobalCard
              title={"ongoing_icos"}
              value={formatter.format(information.ongoing_icos)}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <GlobalCard
              title={"upcoming_icos"}
              value={formatter.format(information.upcoming_icos)}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
