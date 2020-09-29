import React, { useState } from "react";
// import CusDialogpage from "./page/cus-dialog/CusDialogPage";
// import { Button } from "antd";
// import HomePage from "./page/home/HomePage";
// import HocPage from "./page/hoc/HocPage";
// import FormPage from "./page/form/FormPage";

// import CusFormPage from "./page/cus-form/CusForm";
// import ContextPage from "./page/context/ContextPage";
// import ReduxPage from "./page/redux-case/ReduxPage";
// import Calculate from "./page/redux-case/calculate/calculate";
import ReactReduxPage from "./page/react-redux/ReactReduxPage";

function App() {
  const [msg, setMsg] = useState("aaa");
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      {/* <Button type="primary">submit</Button> */}
      {/* <HocPage></HocPage> */}
      {/* <FormPage></FormPage> */}
      {/* <CusFormPage></CusFormPage> */}
      {/* <CusDialogpage></CusDialogpage> */}
      {/* <ContextPage></ContextPage> */}
      {/* <ReduxPage></ReduxPage> */}
      {/* <Calculate></Calculate> */}
      <ReactReduxPage msg={msg}></ReactReduxPage>
      <button onClick={() => setMsg("hello world")}>change msg</button>
    </div>
  );
}

export default App;
