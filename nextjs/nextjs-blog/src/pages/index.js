import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>{" "}
      <div>
        <Link href="/">index 로</Link>
        <Link href="/csr">CSR 로</Link>
        <Link href="/ssg">SSG 로</Link>
        <Link href="/isr">ISR 로</Link>
      </div>
    </>
  );
}
