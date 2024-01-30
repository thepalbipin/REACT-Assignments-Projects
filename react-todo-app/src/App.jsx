import { useState } from "react";
import "./App.css";
 

function App() {
  const [task, setTask] = useState([]);
  const [formState, setFormState]= useState({
    title: "",
    completed: false,
    assigned: "",
  });
  
  function handleChange(e){
    // console.log(event.target);
    console.log(e.target.value);
    console.log(e.target.checked);
    console.log(e.target.name);

    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

   const newformState = {
    ...formState,[e.target.name]: value,
    //  [event.target.name]: event.target.value,

   };
   setFormState(newformState);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("form is submitted", formState);
    const newTask = {
      ... formState,
      id: Date.now() + Math.random(),
    };

    const updatedTaskArray=[
      ... task, newTask];
      setTask(updatedTaskArray);
    

    setFormState({
      title: "",
      completed: false,
      assignedTo: "",
    });
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Add new task"  onChange={handleChange} value={formState.title} />
        {/* <br /> */}
        <select name="assignedTo" onChange={handleChange} value={formState.assignedTo} >
          <option value="">Select Assignee</option>
          <option value="Bruce">Bruce</option>
          <option value="Barry">Barry</option>
          <option value="Clark">Clark</option>
          <option value="Oliver">Oliver</option>
          <option value="Jina">Jina</option>
        </select>
        {/* <br /> */}
        <label htmlFor="Completed">
          Competion Status 
          <input name="completed" type="checkbox" id="completed" checked={formState.completed} onChange={handleChange} />
          </label>
          {/* <br /> */}
          <button type="submit">Submit</button>
      </form>
      {
        task.map((task, index) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>Assigned to: {task.assignedto}</p>
            <p>Completed: {task.completed}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;