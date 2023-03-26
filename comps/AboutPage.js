import styles from "../styles/about.module.css";
import Image from "next/image";
import abimg from "../public/bgcity.png";
import aboutus from "../public/abcons.png";

const aboutPage = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.allcontainer}>
        <div className={styles.abimg}>
          <Image src={abimg} alt="" />
        </div>
        <div className={styles.topcontent}>
          <h1>Who We Are ?</h1>
        </div>
        <div className={styles.bottomcon}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consectetur ratione eum dolore, nisi quas numquam facere? Sapiente,
            sed eaque? Consectetur libero delectus dignissimos deleniti dolorum
            est fugiat quis! Asperiores? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat ipsam laboriosam illo tempore dolor,
            ducimus, necessitatibus praesentium odit nesciunt blanditiis iure
            inventore? Beatae ratione temporibus qui perferendis quasi sed
            voluptatum.
          </p>
          <div className={styles.uss}>
            <Image src={aboutus} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
