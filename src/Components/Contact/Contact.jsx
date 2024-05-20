import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";



const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
                <a href='mailto:aprusty@buffalo.edu'>aprusty@buffalo.edu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"></img>
                <a href='https://www.linkedin.com/in/anuradha-prusty-28603a119/'>linkedin.com/anu-prusty</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"></img>
                <a href='https://github.com/aprusty28'>github.com/anuprusty</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
