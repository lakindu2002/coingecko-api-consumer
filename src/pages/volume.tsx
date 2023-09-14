import { CoinManagement } from "coingecko/components/coins/coin-management";
import { Layout } from "coingecko/components/common/layout";
import { NextPage } from "next";
import Head from "next/head";

const CoinsByVolumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coins By Volume | Coingecko Client</title>
      </Head>

      <Layout>
        <CoinManagement mode={"volume"} />
      </Layout>
    </>
  );
};

export default CoinsByVolumePage;
