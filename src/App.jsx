import { Route, Routes ,Navigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Result from './pages/Result'
import History from './pages/History'



function App() {
  const [moods,setMoods] = useState(null);
     const [playlist,setPlaylist] = useState([]);
     const [history,setHistory] = useState([]);
     const [search,setSearch]=useState("");
     const [loading,setLoading]=useState(false)
 
     
         const handleSearch=async(moodInput)=>{
         try{
            setLoading(true)
             const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent`,{
              method:"POST",
              headers:{"Content-Type":"application/json",
                 "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY
              },
              body:JSON.stringify({
                contents:[{parts:[{text:`You are a mood analyzer for a music app.Your goal is to sooth user and give them best genre music according to their mood and give best genre to feel them relaxed and sooth. Based on this mood: "${moodInput}", respond ONLY with JSON in this exact format: {"mood": "two word", "genre": "short genre suggestion"}`}]}]
              })
            })
             const data= await response.json();
             console.log(data)
          //  console.log(data.candidates[0].content.parts[0].text);
             

                         if(!response.ok){
              console.log("API Error",data)
              return;
            }
            //  const parsed=JSON.parse(data.candidates[0].content.parts[0].text);
            //  console.log(data.candidates[0].content.parts[0].text);
            //  setMoods(parsed);
           }catch(e){
           console.log("error",e);
         }finally{
          setLoading(false)
         }
         }
      
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/'
      element={<Navigate to='home'/>}/>

      <Route path='/home' 
      element={<Home search={search} setSearch={setSearch} handleSearch={handleSearch}/>}/>
     <Route path='/result' 
      element={<Result search={search} moods={moods}/>}/>
  
     <Route path='/history' 
      element={<History/>}/>
     </Routes>
    
     
    </>
    
  )
}

export default App
