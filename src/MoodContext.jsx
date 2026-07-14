import { useEffect, useState } from "react"
import Home from "./pages/Home";

export default function MoodDetect(){
    
    const [moods,setMoods] = useState(null);
    const [playlist,setPlaylist] = useState([]);
    const [history,setHistory] = useState([]);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        const handleSearch=async()=>{
        try{
            const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`)
            const data= await response.json();
            if(data.cod!=200){
                console.log("error")
            }else{
                console.log(data);
            }
        }catch(e){
          console.log("error",e);
        }
        }
    })

    return(

     <div>
  <Home search={search} setSearch={setSearch} handleSearch={handleSearch}/>
     </div>
    )
}