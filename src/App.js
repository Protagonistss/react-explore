import React from "react";
import { Button } from "antd";
import HomePage from "./page/home/HomePage";
import HocPage from "./page/hoc/HocPage";

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      {/* <Button type="primary">submit</Button> */}
      <HocPage></HocPage>
    </div>
  );
}

export default App;
