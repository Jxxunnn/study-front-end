import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function Info() {
  const router = useRouter();
  const [clicked, setIsClicked] = useState(false);
  const { status = "initial" } = router.query;
  return (
    <div className="title">
      My Info<h1>{Clicked}</h1>
      My Info<h1>{status}</h1>
    </div>
  );
}

Info.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
