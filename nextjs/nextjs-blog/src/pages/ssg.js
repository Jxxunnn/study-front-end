import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return <div>{time}</div>;
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
