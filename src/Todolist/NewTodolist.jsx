

function NewTodolist ({list, delet}){
  
  return(list.map((el) => <li> {el.name} <button onClick={() => delet(el.id) }>delete</button> </li>))
  
}

export default NewTodolist