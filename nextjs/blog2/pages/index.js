import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Date from "../components/Date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

/* export async function getServerSideProps() {
  const { allPostsData } = await (
    await fetch("http://localhost:3000/api/posts")
  ).json();
  return {
    props: {
      allPostsData,
    },
  };
}
 */
export default function Home({ allPostsData }) {
  console.log(allPostsData);
  /*  const [allPostsData, setAllPostsData] = useState([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setAllPostsData(data.allPostsData));
  }, []); */

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello World!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
