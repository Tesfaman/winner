import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hbg from "../public/wcons.jpg";
import img1 from "../public/helmet.png";
import img2 from "../public/helmet.png";
import img3 from "../public/helmet.png";
import styles from "../styles/hero.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Apointment from "./Apointment";

const Hero = () => {
  const [show, setShow] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.contanier}>
      <div className={styles.overlay}></div>
      <div className={styles.hbg}>
        <Image src={hbg} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>WINNER</h1>
          <h2>
            ARCHITECTURE AND ENGINEERING <br />
            CONSULTING
          </h2>
          <p>
            Welcome to our Architecture and Engineering Consulting Company!{" "}
            <br />
            We are dedicated to providing high-quality Construction <br />
            service for all of our client. ContactProjects
          </p>
          <div className={styles.btn}>
            <button onClick={() => setShow(!show)}>Contact</button>
            <Apointment show={show} closeModal={() => setShow(false)} />
            <Link href="/service">
              <button>Our-Services</button>
            </Link>
          </div>
        </div>
        <div className={styles.img}>
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            <div className={styles.boxs}>
              <Image src={img1} alt="" />
            </div>
            <div className={styles.boxs}>
              <Image src={img2} alt="" />
            </div>
            <div className={styles.boxs}>
              <Image src={img3} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
