import Layout from "components/Layout";
import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
