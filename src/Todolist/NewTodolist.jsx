

function NewTodolist ({list, delet, chec}){
  
  return(list.map((el) => <li> <input type="checkbox" id="inputCheckbox" onChange={()=> delet(el.id)}/> {el.name} <button onClick={() => delet(el.id) }>delete</button> </li>))
  
}

export default NewTodolist