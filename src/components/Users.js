import React, { useState } from "react";
import styles from "./Users.module.css";
import { motion } from "framer-motion"

function Users(props) {
  const [col, changeCol] = useState(0);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={`${styles.path} ${props.color===0?"":styles.path2}`}></div>
        <div className={styles.userImg}></div>
        <div className={styles.userImg} ></div>
        <div className={styles.userImg}></div>
        <div className={styles.userImg}></div>
        <div className={styles.userImg} ></div>
        {/* <div className={styles.userImg}></div> INVALID*/}
      </div>
    </React.Fragment>
  );
}

export default Users;
