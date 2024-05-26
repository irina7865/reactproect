import './Newcomp.css'

function Componentnew ({list}){
    var arr1 = {}
    function move(e){{
        e = arr1
        e = document.querySelector('#inputAdd').value
        arr1.push(e);
        };
    }
    return (
    <div>
        <input type='text' id='inputAdd'  />
        <button onClick={move}>Add</button>
    </div>
)
}

export default Componentnew