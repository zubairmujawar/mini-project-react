import { useState } from "react";
import "./App.css";

function App() {
  const [input, setinput] = useState("");
  const [items, setitems] = useState([]);

  const addItems = (e) => {
    e.preventDefault();
    input === "" ? alert("ok") : setitems([...items, input]);
    console.log(input);
    setinput("");

  };
  const deletedata = (id) => {
    const updateItems = items.filter((element, index) => {
      return index !== id
    })
    setitems(updateItems);
  }
  const deleteAll = () => {
    setitems([]);
    
  }
  return (
    <div className="flex main-div">
      <h1 className="text-3xl font-bold ">Todo App</h1>
      <form>
        <input
          type="text"
          placeholder="write your todo.."
          className="input"
          autoFocus
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button className="btn" onClick={addItems}>
          Add
        </button>
        {
        items.map((element, index) => {
          return (
            <ul className="ul" key={index}>
              <li className="li">
                {element}
                <span onClick={()=>deletedata(index)} >Delete</span>
              </li>
            </ul>
          );
        })
        }
        <div className="clearbtndiv" >
        <button className="btnclear" onClick={deleteAll}  >clear all</button>
        </div>
      </form>
    </div>
  );
}

export default App;
