import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import slider1 from "../public/sli.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/slider.module.css";

const Slider = () => {
  const style = { color: "#000", fontSize: "1.5em", margin: "0px 100px" };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className={styles.sliders}>
      <div className={styles.texxt}>
        <h1>Why Choose Us ?</h1>
      </div>
      <div className={styles.boxx}>
        <Carousel responsive={responsive} swipeable={false}>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Experience</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Time</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Performance </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Experience</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Experience</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
