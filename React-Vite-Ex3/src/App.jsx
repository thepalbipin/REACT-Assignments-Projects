import { useEffect, useState } from 'react'
import './App.css'

 //Code 1

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //setCount(count + 1);  
    setCount(prevCount=>{
      return prevCount + 1;
    });
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

  //Code 2
/*
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
		// console.log(count);
  };

  useEffect(()=>{
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
*/
export default App


//for Reasoning check READ.md