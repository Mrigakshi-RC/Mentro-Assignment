import React, { useState } from "react"
import Ellipse from "./components/Ellipse";
import Users from "./components/Users";


function App() {
  return (
    <React.Fragment>
      <Ellipse/>
      <Users/>
      {/* <UserInfo/>
      <Main_User/>
      <DownButton1/>
      <DownButton2/> */}
    </React.Fragment>
  );
}

export default App;
