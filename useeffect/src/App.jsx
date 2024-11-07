import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
useEffect(()=>{
  getDate()
},[])
const getDate=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  //console.log(res);
  const data=await res.json()
  //console.log(data);
  setCount(data)
}
console.log(count);

  return (
    <>
    <div>
     <ul>
      {
        count.length!==0?count.map((el)=><li>{el.title}</li>):<li>Loading</li>
      }
      </ul>
      </div>
    </>
  )
}

export default App
