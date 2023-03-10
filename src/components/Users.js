import React, { useState } from "react";
import styles from "./Users.module.css";
import { motion } from "framer-motion";

const two=[{x:-460, y:-150},{x:-900, y:0},{x:-1200, y:400},{x:280, y:400},{x:0, y:0}]
const three=[{x:-300, y:-400},{x:-750, y:-550},{x:-1200, y:-400},{x:-1500, y:0},{x:0, y:0}]
const four=[{x:1500, y:0},{x:1200, y:-400},{x:750, y:-550},{x:200, y:-400},{x:0, y:0}]
const five=[{x:-250, y:400},{x:1250, y:400},{x:970, y:0},{x:500, y:-150},{x:0, y:0}]
const six=[{x:-450, y:150},{x:-750, y:550},{x:750, y:550},{x:500, y:200},{x:0, y:0}]

const twoRight=[{x:300, y:400},{x:-1200, y:400},{x:-970, y:0},{x:-450, y:-150},{x:0, y:0}]
// const threeRight=[{x:-300, y:-400},{x:-750, y:-550},{x:-1200, y:-400},{x:-1500, y:0},{x:0, y:0}]
// const fourRight=[{x:1500, y:0},{x:1200, y:-400},{x:750, y:-550},{x:200, y:-400},{x:0, y:0}]
// const fiveRight=[{x:-250, y:400},{x:1250, y:400},{x:970, y:0},{x:500, y:-150},{x:0, y:0}]
// const sixRight=[{x:-450, y:150},{x:-750, y:550},{x:750, y:550},{x:500, y:200},{x:0, y:0}]

let current2=0;
let current3=0;
let current4=0;
let current5=0;
let current6=0;
function Users(props) {
  if (current2===5){
    current2=0;
    current3=0;
    current4=0;
    current5=0;
    current6=0;
  }
  //DECREMENT CURRENT RIGHT IF MOVED LEFT
  
  // if (props.Rotate===1){
  //   for (let [key, value] of Object.entries(left_assigned)){
  //     left_assigned[key]=value-1;
  //     if (left_assigned[key]<0)
  //     left_assigned[key]=4;
  //   }
  //   for (let [key, value] of Object.entries(right_assigned)){
  //     right_assigned[key]=value-1;
  //     if (right_assigned[key]<0)
  //     right_assigned[key]=4;
  //   }
  // }

  // else if (props.Rotate===2){
  //   for (let [key, value] of Object.entries(left_assigned)){
  //     left_assigned[key]=value+1;
  //     if (left_assigned[key]>4)
  //     left_assigned[key]=0;
  //   }
  //   for (let [key, value] of Object.entries(right_assigned)){
  //     right_assigned[key]=value+1;
  //     if (right_assigned[key]>4)
  //     right_assigned[key]=0;
  //   }
  // }
  // console.log(two[current],three[current])
  

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={`${styles.path} ${props.color===0?"":styles.path2}`}></div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? two[current2++]: props.Rotate===2 ?twoRight[current2++]:""}></motion.div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? three[current3++]:""}></motion.div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? four[current4++]:""}></motion.div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? five[current5++]:""}></motion.div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? six[current6++]:""}></motion.div>
        {/* <motion.div className={styles.userImg} animate={props.Rotate===1 ? animation_Leftangles[left_assigned["three"]] : props.Rotate===2 ?animation_Rightangles[right_assigned["three"]]:""}></motion.div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? animation_Leftangles[left_assigned["four"]] : props.Rotate===2 ?animation_Rightangles[right_assigned["four"]]:""}></motion.div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? animation_Leftangles[left_assigned["five"]] : props.Rotate===2 ?animation_Rightangles[right_assigned["five"]]:""}></motion.div>
        <motion.div className={styles.userImg} animate={props.Rotate===1 ? animation_Leftangles[left_assigned["six"]] : props.Rotate===2 ?animation_Rightangles[right_assigned["six"]]:""}></motion.div> */}
        {/* <div className={styles.userImg}></div> INVALID*/}
      </div>
    </React.Fragment>
  );
}

export default Users;
