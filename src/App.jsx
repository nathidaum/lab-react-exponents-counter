import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";


function App () {


  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} callBackToIncrement={increment} callBackToDecrement={decrement}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo counter={count}/>
        <ExponentThree counter={count}/>
        <ExponentFour counter={count}/>
        <ExponentFive counter={count}/>
        <ExponentSix counter={count}/>
      </div>
    </div>
  );
}

export default App;
