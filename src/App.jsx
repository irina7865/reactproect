import logo from './logo.svg';
import './App.css';
import Componentnew from './Component/Componentnew';
import NewTodolist from './Todolist/NewTodolist';
// import {New} from './New/New'

function App() {
 const list = [
 {id: 1 , name: "Zadacha1" , YorN: true},
{id: 2 , name: "Zadacha2" , YorN: false}] 
return (
  <div> 
  <Componentnew/>
  <NewTodolist list = {list} />
  {/* <New/> */}
  </div>
 
)
}
export default App;
