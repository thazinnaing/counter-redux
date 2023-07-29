import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterInput from "./components/CounterInput";

const App=()=>{
  return(
    <>
    <div>
      <CounterOutput></CounterOutput>
      <br/>
      <CounterInput></CounterInput>

    </div>
    </>
  )
}
export default App;