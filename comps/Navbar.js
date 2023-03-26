import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/WINNER.png";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="" />
      </div>
      <div
        className={nav ? styles.navmenu + " " + styles.active : styles.navmenu}
      >
        <Link href="/" className={router.pathname == "/" ? styles.activee : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={router.pathname == "/about" ? styles.activee : ""}
        >
          About
        </Link>
        <Link
          href="/service"
          className={router.pathname == "/service" ? styles.activee : ""}
        >
          Services
        </Link>
        <Link
          href="/gallery"
          className={router.pathname == "/gallery" ? styles.activee : ""}
        >
          Projects
        </Link>
      </div>
      <div className={styles.ham} onClick={handleNav}>
        {nav ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
};

export default Navbar;
