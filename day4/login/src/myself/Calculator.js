// import "./Calculator.css";
import { useState } from "react";
function Calculator() {
  const [num1, setNum1] = useState(); //5
  const [num2, setNum2] = useState(); //6
  const [result, setResult] = useState("Result will be visible here"); //11
  const Add = () => {
    let res = Number(num1) + Number(num2);
    setResult(res);
  };
  const Sub = () => {
    let res = Number(num1) - Number(num2);
    setResult(res);
  };
  const Mul = () => {
    let res = Number(num1) * Number(num2);
    setResult(res);
  };
  const Div = () => {
    let res = Number(num1) / Number(num2);
    setResult(res);
  };
  const mod = () => {
    let res = Number(num1) % Number(num2);
    setResult(res);
  };
  const pow = () => {
    let res = Math.pow(Number(num1), Number(num2));
    setResult(res);
  };
  const sq=()=>{
    let res=Math.pow(Number(num1),2)+Math.pow(Number(num2),2)+(2*(Number(num1))*(Number(num2)))
    setResult(res)
  }
  return (
    <div className="center">
      <h3 className="text-center">Calculator</h3>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        ></input>
      </div>
      <div className="mt-10">
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        ></input>
      </div>
      <div className="mt-10">
        <button className="btn" type="button" onClick={Add}>
          +
        </button>
        <button className="btn" type="button" onClick={Sub}>
          -
        </button>
        <button className="btn" type="button" onClick={Mul}>
          *
        </button>
        <button className="btn" type="button" onClick={Div}>
          /
        </button>
        <button className="btn" type="button" onClick={mod}>
          %
        </button>
        <button className="btn" type="button" onClick={pow}>
          pow
        </button>
        <button className="btn" type="button" onClick={sq}>sq</button>
      </div>
      <h4 className="text-center">{result}</h4>
    </div>
  );
}

export default Calculator;
