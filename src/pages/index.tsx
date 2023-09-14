import { Box, Container } from "@mui/material";
import { CoinManagement } from "coingecko/components/coins/coin-management";
import { Layout } from "coingecko/components/common/layout";
import { Logo } from "coingecko/components/common/logo";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coins | Coingecko Client</title>
      </Head>

      <Layout>
        <CoinManagement />
      </Layout>
    </>
  );
};

export default HomePage;
