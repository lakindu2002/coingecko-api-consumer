import { CoinManagement } from "coingecko/components/coins/coin-management";
import { Layout } from "coingecko/components/common/layout";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coins | Coingecko Client</title>
      </Head>

      <Layout>
        <CoinManagement mode={"currencies"} />
      </Layout>
    </>
  );
};

export default HomePage;
