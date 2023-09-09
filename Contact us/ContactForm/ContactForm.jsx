import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function ContactForm() {
  const [name, setname] = useState('zzz')
  const [email, setemail] = useState('example@gamil.com')
  const [text, settext] = useState('About your comapny')

  //for testing :
  // let name = 'Zub'
  // let email = 'Zub'
  // let text = 'Zub'


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("name:",e.target[0].value);
    console.log("email:",e.target[1].value);
    console.log("text:",e.target[2].value);
    // name = e.target[0].value;
    // email = e.target[1].value;
    // text = e.target[2].value;
    setname(e.target[0].value)
    setemail(e.target[1].value)
    settext(e.target[2].value)
  };
  return (
    <section className={styles.container}>
      <div className={styles.ContactImage}></div>
      <div className={styles.ContactForm}>
        <div className={styles.top_btn}>
          <Button
            text=" VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            text=" VIA CALL"
            icon={<BsTelephone fontSize="24px" /*onClick={onViaCallSubmit}*/ />}
          />
        </div>
        <Button
          text=" VIA EMAIL FORM"
          isOutline={true}
          icon={<MdEmail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_contolar}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_contolar}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_contolar}>
            <label htmlFor="name">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text=" Submit" icon={null} />
          </div>
        </form>
        <div>{name + " " + email + "   " + text + " "}</div>
      </div>
      <div>
        <img src="./images/Service.svg" alt="" />
      </div>
    </section>
  );
}
