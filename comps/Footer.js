import React from "react";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <h2>Contact</h2>
        <p>09-36-23-06-60</p>
        <p>09-11-28-64-34</p>
        <p>ashenafidegello@gmail.com</p>
      </div>
      <div className={styles.middle}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          voluptatibus quas beatae quos illum odio facilis fugit omnis
          voluptates maiores? Sed omnis ut, molestias vitae cumque facilis iusto
          id animi?
        </p>
      </div>
      <div className={styles.right}>
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8941800084035!2d38.49487785538795!3d7.0217235041296355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14fe3628cfc5f%3A0xc03b1e24e12e8f5!2sAbay%20Specialized%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1679623358335!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
