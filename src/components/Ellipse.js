import React, { useState } from "react";
import styles from "./Ellipse.module.css";


function Ellipse() {
  const [col,changeCol]=useState(0);
  return (
    <div className={styles.ellipse}></div>
  )
}

export default Ellipse;