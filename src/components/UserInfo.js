import React, { useState } from "react";
import styles from "./UserInfo.module.css";

function UserInfo(props) {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className={styles.rating}>{props.data.rating}</h1>
        {/* <div>{props.data.rateImg}</div> USE IF HERE FOR STYLING */}
        <h2 className={styles.userName}>{props.data.name}</h2>
        <h4 className={styles.job}>{props.data.job}</h4>
        <p className={styles.description}>{props.data.description}</p>
      </div>
      <button></button>
    </React.Fragment>
  );
}

export default UserInfo;
