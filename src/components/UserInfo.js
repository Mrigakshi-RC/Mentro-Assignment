import React, { useState } from "react";
import styles from "./UserInfo.module.css";

function UserInfo(props) {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className={styles.rating}>{props.data.rating}</h1>
        <div className={`${styles.starcontainer} ${Number(props.data.rating)<5?styles.fourHalf:""}`}><div className={styles.fiveStar}></div></div>
        <h2 className={styles.userName}>{props.data.name}</h2>
        <h4 className={styles.job}>{props.data.job}</h4>
        <p className={styles.description}>{props.data.description}</p>
      </div>
      <button className={styles.bookButton}>Book a session</button>
    </React.Fragment>
  );
}

export default UserInfo;
