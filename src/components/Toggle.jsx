import {FaMoon, FaSun} from 'react-icons/fa'

import { useState } from "react"

export default function Toggle(){
 const [toggle,setToggle]=useState(false)
 if(!toggle){
    document.body.style.background="rgb(14, 13, 13)";   
 }else{
    document.body.style.background="rgb(75, 75, 129)";

     
 }



    return(
    <button onClick={()=>setToggle(!toggle)} style={toggle?{backgroundColor:"rgb(14, 13, 13)"}:{backgroundColor:"rgb(75, 75, 129)"}} className="px-4 py-1 rounded-2xl border border-white text-xs mt-1">{toggle?<FaMoon size={12}/>:<FaSun size={14}/>}</button>
    )
}