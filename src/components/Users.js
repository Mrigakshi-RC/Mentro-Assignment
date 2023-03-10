import React, { useState } from "react";
import styles from "./Users.module.css";

function Users(props) {
  const [col, changeCol] = useState(0);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <hr className={`${styles.path} ${props.color===0?"":styles.path2}`}></hr>
        <div className={styles.userImg}></div>
        <div className={styles.userImg}></div>
        <div className={styles.userImg}></div>
        <div className={styles.userImg}></div>
        <div className={styles.userImg}></div>
        <div className={styles.userImg}></div>
      </div>
    </React.Fragment>
  );
}

export default Users;
