import React, { useState } from "react";
import styles from "./DownButton2.module.css";


function DownButton2(props) {
  return (
    <React.Fragment><button className={styles.downButton2} onClick={props.moveRight}>↓</button></React.Fragment>
  )
}

export default DownButton2;