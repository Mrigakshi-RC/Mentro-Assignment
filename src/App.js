import React, { useState } from "react"
import Ellipse from "./components/Ellipse";
import Users from "./components/Users";
import UserInfo from "./components/UserInfo";


function App() {
  const userList=[{
    rating:"4.9",
    name:"Prankur Gupta",
    job:"SDE @Amazon",
    description:"I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role."
  },{
    rating:"5.0",
    name:"Saurav Pal",
    job:"SDE-2 @Amazon",
    description:"I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space."
  },{
    rating:"5.0",
    name:"Saumya Singh",
    job:"Software Engineer @Red Hat",
    description:"Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI"
  },{
    rating:"5.0",
    name:"Keshav Bathla",
    job:"SDE-1 @Groww",
    description:"I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role."
  },{
    rating:"4.9",
    name:"Prankur Gupta",
    job:"SDE @ Amazon",
    description:"A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor"
  }]
  return (
    <React.Fragment>
      <Ellipse/>
      <Users/>
      <UserInfo data={userList[0]}/>
      {/* <Main_User/>
      <DownButton1/>
      <DownButton2/> */}
    </React.Fragment>
  );
}

export default App;
