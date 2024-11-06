import { useState } from 'react';
import './App.css'

function App() {
     //let [Task,setTask]=useState(0)
        let [Task,setTask]=useState(true)
function increment() {
  //setTask(Task+=1)
  setTask(!Task)
}
console.log(Task);



  return (
    <>
     <button onClick={increment}style={Task?{backgroundColor:"blue", color:"white"}:{backgroundColor:"red", color:"white"}} >Count {Task}</button>
    </>
  )
}

export default App