import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function FirstItem() {
  console.log("client");

  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  return <div className="title">{time}</div>;
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
