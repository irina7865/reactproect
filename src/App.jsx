import logo from './logo.svg';
import './App.css';
import Componentnew from './Component/Componentnew';
import NewTodolist from './Todolist/NewTodolist';
import { useState } from 'react';
// import {New} from './New/New'

function App() {
  const [list , setList] = useState( [
    {id: 1 , name: "Zadacha1" , YorN: true},
   {id: 2 , name: "Zadacha2" , YorN: false}] )
  function move(){
    console.log(123)
   setList((prev)=> [...prev ,  {id: 3 , name: "Zadacha3" , YorN: true}])
  }
 
return (
  <div> 
  <Componentnew func = {move}/>
  <NewTodolist list = {list} />
  {/* <New/> */}
  </div>
 
)
}
export default App;
