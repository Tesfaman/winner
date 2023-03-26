import styles from "../styles/gallery.module.css";
import Image from "next/image";
import gal1 from "../public/wi-1.jpg";
import gal2 from "../public/wi-2.jpg";
import gal3 from "../public/wi-3.jpg";
import gal4 from "../public/wi-4.jpg";
import gal5 from "../public/wi-5.jpg";
import gal6 from "../public/wi-6.jpg";
import gal7 from "../public/wi-7.jpg";
import gal8 from "../public/wi-8.jpg";

const Gallery = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.gcontainer}>
        <div className={styles.gitem}>
          <Image src={gal1} alt="" />
        </div>
        <div className={styles.gitem}>
          <Image src={gal2} alt="" />
        </div>
        <div className={styles.gitem}>
          <Image src={gal3} alt="" />
        </div>
        <div className={styles.gitem}>
          <Image src={gal4} alt="" />
        </div>
        <div className={styles.gitem}>
          <Image src={gal5} alt="" />
        </div>
        <div className={styles.gitem}>
          <Image src={gal6} alt="" />
        </div>
        <div className={styles.gitem}>
          <Image src={gal7} alt="" />
        </div>
        <div className={styles.gitem}>
          <Image src={gal8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
