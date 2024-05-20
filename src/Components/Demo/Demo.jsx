import React from 'react'
import styles from "./Demo.module.css";


const Demo = () => {
  return (
    <div className={styles.parent}>
        <ul className={styles.content}>
            <li>About</li>
            <li>Experience</li>
            <li>Hello</li>
            <li>Trek</li>

        </ul>
        <div class={styles.floatedleft}>Floated Left</div>
        <div class={styles.floatedright}>Floated Right</div>
        <div class={styles.clearfix}>Content with Clearfix</div>

    </div>
  )
}

export default Demo