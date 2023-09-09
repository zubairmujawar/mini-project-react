import React from "react";
import styles from "./Herosection.module.css";

export default function Herosection() {
  return (
    <div className={`${styles.Herosection}`}>
      <h1 className="heading">CONTACT US</h1>
      <p className="para">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      {/* <button className="btn">VIA SUPPORT CHAT</button> */}
    </div>
  );
}
