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
                        <h3>Full Stack Developer</h3>
                        <p>
                        Seamlessly integrated frontend and backend technologies for cohesive user experiences. Designed and managed SQL and NoSQL databases for efficient data handling. Implemented secure authentication (JWT/OAuth) to protect user data. Developed responsive applications optimized for various devices.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                        Created user-friendly interfaces with HTML, CSS, JavaScript, React, and Next.js. Utilized Redux and Context API for effective application state management. Improved load times through lazy loading and code splitting. Leveraged Tailwind CSS and Bootstrap for consistent UI design.
                            </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                    Designed and implemented RESTful APIs for efficient client-server communication. Built microservices for modular and scalable application architecture. Ensured API security with robust error handling and input validation. Conducted unit tests and documented APIs using Postman and Swagger. 

                        </p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
  )
}

export default About

{/* 
Full-Stack Development
Seamlessly integrated frontend and backend technologies for cohesive user experiences. Designed and managed SQL and NoSQL databases for efficient data handling. Implemented secure authentication (JWT/OAuth) to protect user data. Developed responsive applications optimized for various devices. Deployed applications on AWS/GCP using CI/CD pipelines for continuous integration.
Frontend Development
Created user-friendly interfaces with HTML, CSS, JavaScript, React, and Next.js. Utilized Redux and Context API for effective application state management. Developed applications adhering to WCAG guidelines for inclusivity. Improved load times through lazy loading and code splitting. Leveraged Tailwind CSS and Bootstrap for consistent UI design.
Backend API Development
Designed and implemented RESTful APIs for efficient client-server communication. Managed large datasets and implemented business logic for data integrity. Built microservices for modular and scalable application architecture. Ensured API security with robust error handling and input validation. Conducted unit tests and documented APIs using Postman and Swagger. */}
