import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import {useState} from "react";

import { decrement, increment ,reset,incrementByAmount} from "./features/counter/counterSlice";
export default function App(){
  const [amount,setAmount] =useState(0)
  const count =useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  function IncrementClick(){
    dispatch(increment());
  }
  function DecrementClick(){
   dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset())
  }
  function handleIncAmount(){
    dispatch(incrementByAmount(amount))
  }
  
  return(
    <div className="container">
    <button onClick={IncrementClick}>Increment</button>
    <p>Count:{count}</p>
    <button onClick={DecrementClick}>Decrement</button>
    <br/>
    <br/>
    <button onClick={handleReset}>reset</button>
     <input type="number" value={amount} placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)}/>
     <button onClick={handleIncAmount}>IncrementByAmount</button>
    </div>
  )
}
