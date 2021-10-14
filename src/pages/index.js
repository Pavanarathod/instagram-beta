import Head from "next/head";
import React from "react";
import MainApp from "../components/App/MainApp";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>instagram beta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainApp />
      </Layout>
    </React.Fragment>
  );
}
