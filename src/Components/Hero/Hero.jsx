import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anuradha</h1>
        <p className={styles.description}>
        {/* Experienced Computer Science graduate with 5 years of experience in full stack and frontend development. Proficient in building responsive web applications, dynamic websites, and scalable platforms using modern technologies like React, JavaScript, TypeScript, Node.js, and AWS. Demonstrates expertise in creating seamless user experiences and optimizing performance, with hands-on experience in databases, APIs, and cloud-based solutions. Strong background in Agile methodologies and UI/UX design with a focus on delivering efficient, scalable, and maintainable code. Looking for roles in full-stack or frontend development.     */}
        {/* Computer Science graduate with 5 years of experience in full-stack and frontend development. Proficient in building responsive web applications and scalable platforms using React, JavaScript, TypeScript, Node.js, and AWS. Expertise in creating seamless user experiences, optimizing performance, and working with databases and APIs. Strong background in Agile methodologies and UI/UX design, focused on delivering efficient and maintainable code. Seeking roles in full-stack or frontend development. */}
        Full-stack and frontend developer with 5 years of experience. Proficient in React, JavaScript, TypeScript, Node.js, and AWS. Focused on building responsive applications and optimizing user experiences. Seeking opportunities in full-stack or frontend development.
        </p>
        
        <a className={styles.contactBtn} href='mailto:aprusty@buffalo.edu'>Contact Me</a>
    </div>
    <img className={styles.heroImg} src={getImageUrl("about/file.jpg")} alt="My profile pic"></img>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>

  </section>
  )
 
}

export default Hero