import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./About.module.css";



const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/profile.jpg")} alt="My profile pic"></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a passionate Frontend developer with experience in building intuitive user interfaces</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in developing high-performance and developer friendly APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p>With expertise in both frontend and backend development, I build comprehensive solutions that integrate user-friendly interfaces with robust server-side logic</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About