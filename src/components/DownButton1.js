import React, { useState } from "react";
import styles from "./DownButton1.module.css";
// import { motion } from "framer-motion";


function DownButton1(props) {
  return (
    <React.Fragment><button className={`${styles.downButton1} ${props.color===0?"":styles.button2}`} onClick={props.moveLeft}>↓</button></React.Fragment>
  )
}

export default DownButton1;