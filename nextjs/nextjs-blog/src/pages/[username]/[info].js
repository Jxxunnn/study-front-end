import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export default function UsernameInfo() {
  const router = useRouter();
  const { username, info, uid } = router.query;
  const [name, setName] = useState("?");

  /*   useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  }, []); */

  useEffect(() => {
    if (uid != null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
        });
    }
  }, []);

  return (
    <div className="title">
      <h1>
        {username}'s {info}
      </h1>
      <h1>Name: {name}</h1>
    </div>
  );
}

/* UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
}; */
