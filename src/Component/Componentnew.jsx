import './Newcomp.css'

function Componentnew ({func}){
    
    return (
    <div>
        <input type='text' id='inputAdd'  />
        <button onClick={func}>Add</button>
    </div>
)
}

export default Componentnew