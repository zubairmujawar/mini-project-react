import { useState } from "react";
import "./App.css";

function App() {
  const [result, setresult] = useState("")

  const handelSubmit = (e)=>{
    setresult(result.concat(e.target.value))
  }

  const calculate = () =>{
    setresult(eval(result).toString())
  } 

  const clearScreen = ()=>{
    setresult("")
  }
  
  return (
    <div className="main-container">
      <h1>Calculator</h1>
      <div>
        <input type="text"  className="input" placeholder="0" value={result} onChange={(e)=>calculate(e.target.value)}/>
        <div className="btn-div" >
          <input type="button" value="C" onClick={clearScreen} className="btn" />
          <input type="button" value="/" onClick={handelSubmit} className="btn" />
          <input type="button" value="+" onClick={handelSubmit} className="btn" />
          <input type="button" value="-" onClick={handelSubmit} className="btn" />
        </div>
        <div className="btn-div" >
          <input type="button" value="7" onClick={handelSubmit} className="btn" />
          <input type="button" value="8" onClick={handelSubmit} className="btn" />
          <input type="button" value="9" onClick={handelSubmit} className="btn" />
          <input type="button" value="0" onClick={handelSubmit} className="btn" />
        </div>
        <div className="btn-div" >
          <input type="button" value="4" onClick={handelSubmit} className="btn" />
          <input type="button" value="5" onClick={handelSubmit} className="btn" />
          <input type="button" value="6" onClick={handelSubmit} className="btn" />
          <input type="button" value="+" onClick={handelSubmit} className="btn" />
        </div>
        <div className="btn-div" >
          <input type="button" value="1" onClick={handelSubmit} className="btn" />
          <input type="button" value="2" onClick={handelSubmit} className="btn" />
          <input type="button" value="3" onClick={handelSubmit} className="btn" />
          <input type="button" value="=" onClick={calculate} className="btn" />
        </div>
      </div>
    </div>
  );
}

export default App;
