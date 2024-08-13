/*import { useState } from "react";

const Forme = () => {
    const [entered,setentered]=useState('')
    const [valid,setvalid]=useState(false)
    const inputhandler=(e)=>{
       
        if(entered.length>=0){
            setvalid(false)
        }
        setentered(e.target.value)
    }
    const submithandle=(e)=>{
        e.preventDefault()
        if(entered ===''){
            setvalid(true)
        }
    }
    return ( 
    <div className="pt-20" >
        <form>
            <label>name</label>
            <input 
            type="text"
            onChange={inputhandler}
            className={`${valid?'border-red-600 border-2':null}`}></input>
            {valid && <p className="text-red-600"> Enter a text!</p>}
            <div><button onClick={submithandle} disabled={`${valid}`}>submit</button></div>
        </form>
    </div>);
}
 
export default Forme;*/