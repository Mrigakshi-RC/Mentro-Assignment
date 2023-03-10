import React, { useState } from "react";
import styles from "./MainUser.module.css";

function MainUser(props) {
  return (
    <React.Fragment>
      <div className={styles.mainUser}></div>
      <div className={styles.userName}>{props.name}</div>
    </React.Fragment>
  );
}

export default MainUser;
