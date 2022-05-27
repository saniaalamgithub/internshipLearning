import { useState } from "react";
import './css/New.css'
function LogInPage() {
  const [text, showText] = useState(); 
  const [password, showPass] = useState(); 
  const [result, setResult] = useState("Result will be visible here");
  const welcomeMessege=()=>
{
 let x=" hi " +  text   + " your password is " +  password
 setResult(x)
}
  return (
    <div className="center">
      <h1 >Login page</h1>
      <div>
        <label>
          username
          <input type="text" onChange={(e) => showText(e.target.value)}></input>
        </label>
      </div>
      <div>
        <label>
          password
          <input type="password" onChange={(e) => showPass(e.target.value)}></input>
        </label>
      </div>
      <button type="button" onClick={welcomeMessege}>login</button>
      <h2>{result}</h2>
    </div>
  );
}
export default LogInPage;
