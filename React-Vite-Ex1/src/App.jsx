import { useState } from 'react'
import './App.css'

// Make a network request from react component;
// Save this response from server in local store;

let API_URL =  `https://jsonplaceholder.typicode.com/todos`;
function App() {
  const [data,setData] = useState([]);

  async function fetchAndUpdateData(){
    // console.log("clicked button");
    try {
      let res = await fetch(API_URL);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data);
  return(
    <>
    <h1>Click on the button to make network request </h1>
    <button onClick={fetchAndUpdateData}>Get Posts</button>
    {data.map((todo) => (
        <div style={{backgroundColor: "green", color:"yellow", padding:"10px", margin:"10px", border:"solid yellow"}} key={todo.id}>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
    ))
    }
    </>
  );
}

export default App;