import { Layout } from "coingecko/components/common/layout";
import { GlobalManagement } from "coingecko/components/global/global-management";
import { NextPage } from "next";
import Head from "next/head";

const GlobalMarketInformationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Global Market Information | Coingecko Client</title>
      </Head>

      <Layout>
        <GlobalManagement />
      </Layout>
    </>
  );
};

export default GlobalMarketInformationPage;
