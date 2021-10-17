import Head from "next/head";
import React from "react";
import MainApp from "../components/App/MainApp";
import Modal from "../components/App/Modal/Modal";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>instagram beta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout applyGrid>
        <MainApp />
      </Layout>
      <Modal />
    </React.Fragment>
  );
}
