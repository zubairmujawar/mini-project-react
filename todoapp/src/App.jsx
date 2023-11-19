import { useState } from "react";
import "./App.css";

function App() {
  const [input, setinput] = useState("")
  const [todos, settodos] = useState([])

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    setinput('')
  } 
  const addItems =() => {
    
  }
  
  return (
    <div className="flex main-div">
      <h1 className="text-3xl font-bold ">Todo App</h1>
      <form>
        <input type="text" placeholder="write your todo" className=" border-e-red-300  border-black bg-slate-300 input" autoFocus value={input} onChange={handelSubmit}/>
        <button onChange={(e)=>setinput(e.target.value)} className="btn" onClick={addItems}>Go</button>
        <ul className="ul">
          <li className="li" >This is a todo <span>Delete</span></li>
        </ul>
      </form>
    </div>
  );
}

export default App;
