import logo from './logo.svg';
import './App.css';
import Componentnew from './Component/Componentnew';
import NewTodolist from './Todolist/NewTodolist';

function App() {
 const list = [
 {id: 1 , name: "Zadacha1" , YorN: true},
{id: 2 , name: "Zadacha2" , YorN: false}] 
return (
  <NewTodolist list = {list} />
)
}
export default App;
