import React from "react";

export default function Page({ data }: any) {
  return <div>Page</div>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://.../data");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
