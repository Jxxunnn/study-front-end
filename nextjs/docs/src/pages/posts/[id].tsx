import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Post() {
  const {
    query: { id },
  } = useRouter();

  return <h1>Post {id}</h1>;
}
