import React, { useState } from "react";
import styles from "./Users.module.css";

function Users() {
  const [col, changeCol] = useState(0);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <hr className={styles.path}></hr>
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
