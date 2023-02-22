import { useRouter } from "next/router";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Seo from "components/Seo";

export default function Detail({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [title, id] = params;
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: {
      params,
    },
  };
}
