import { useState } from 'react'
import './Newcomp.css'

function Componentnew ({func ,ovalue, val}){
    return (
    <div>
        <input type='text' id='inputAdd' value ={ovalue} onChange={val} />
        <button onClick={func}>Add</button>
    </div>
)
}

export default Componentnew