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
   const[ovalue, setValue] = useState('')
  const InputChange = (event) => {setValue(event.target.value)}
  function move(){
   setList((prev)=> [...prev ,  {id: ovalue , name: ovalue , YorN: false}])
   setValue('')
  }
  function moveD(e){
   setList(list.filter(list => list.id !== e) )
  }
return (
  <div> 
  <Componentnew func={move} ovalue = {ovalue} val={InputChange}/>
  <NewTodolist list = {list} delet={moveD} />
  {/* <New/> */}
  </div>
 
)
}
export default App;
