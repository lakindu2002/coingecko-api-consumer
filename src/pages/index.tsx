import { Paper, Tab, Tabs } from "@mui/material";
import { CoinManagement } from "coingecko/components/coins/coin-management";
import { Layout } from "coingecko/components/common/layout";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const HomePage: NextPage = () => {
  const [tab, setTab] = useState<number>(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <Head>
        <title>Coins | Coingecko Client</title>
      </Head>

      <Layout>
        <Paper sx={{ width: "100%", my: 2 }}>
          <Tabs value={tab} onChange={handleTabChange}>
            <Tab label="Currencies" />
            <Tab label="Trending against Volume" />
          </Tabs>
        </Paper>
        <CoinManagement mode={tab === 0 ? "currencies" : "volume"} />
      </Layout>
    </>
  );
};

export default HomePage;
