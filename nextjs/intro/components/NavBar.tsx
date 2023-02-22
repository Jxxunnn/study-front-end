import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Image alt="Vercel" src="/vercel.svg" width={100} height={100} />
      <div>
        <Link href="/">
          <span className={router.pathname === "/" ? "active link" : "link"}>
            {" "}
            Home
          </span>
        </Link>
        <Link href="/about">
          <span
            className={router.pathname === "/about" ? "active link" : "link"}
          >
            About
          </span>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav .link {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
