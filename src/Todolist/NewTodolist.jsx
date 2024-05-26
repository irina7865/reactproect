

function NewTodolist ({list}){
  
  return(list.map((el) => <li> {el.name} </li>))
  
}

export default NewTodolist