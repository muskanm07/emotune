import { Route, Routes ,Navigate, useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Result from './pages/Result'
import History from './pages/History'
import Loading from './components/Loading'
import Footer from './components/Footer'



function App() {
      const navigate=useNavigate();
     const [playlist,setPlaylist] = useState([]);
     const [history,setHistory] = useState(()=>{
       const searchSaved=localStorage.getItem('parsed')
       return searchSaved?JSON.parse(searchSaved):[]
     })
     const [search,setSearch]=useState("");
     const [loading,setLoading]=useState(false)
     const [error,setError]=useState("")
     const [moods,setMoods] = useState(()=>{
    const saved=localStorage.getItem('recentmoods')
    return saved?JSON.parse(saved):[]
     })
     useEffect(()=>{
            localStorage.setItem('parsed',JSON.stringify(history))
           },[history])
           useEffect(()=>{
           localStorage.setItem('recentmoods',JSON.stringify(moods))

           },[moods])
         const handleSearch=async(moodInput)=>{
          
         try{
            setLoading(true)
            setError("")
            const response = await fetch(`/.netlify/functions/gemini`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
          prompt: `You are a mood analyzer for a music app.Your goal is to sooth user and give them best genre music according to their mood and give best genre to feel them relaxed and sooth and give best song suggestions according to their mood. Based on this mood: "${moodInput}", respond ONLY with JSON in this exact format: {"mood": "one word", "genre": "short genre suggestion"}`
  })
})
             
          //  console.log(data.candidates[0].content.parts[0].text);
             
               const data=await response.json();   
                         if(!response.ok){
                          setError("something went wrong")
                      // console.log("API Error",data)
                     return
}else{   
             const raw=data.candidates[0].content.parts[0].text;
             console.log(data.candidates[0].content.parts[0].text);
             const parsed=JSON.parse(raw);
             
             console.log(parsed)
             setHistory(prev=>[parsed,...prev].slice(0,10))
             localStorage.setItem('parsed',JSON.stringify([parsed,...history].slice(0,10)))
              setMoods(parsed);
              navigate('/result')
            }            

           }catch(e){
            setError("Server Error")
           console.log("error",e);
         }finally{
          setLoading(false)
         }
         }
    
      
 

  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/'
      element={<Navigate to='home'/>}/>
``
      <Route path='/home' 
      element={<Home search={search} setSearch={setSearch} handleSearch={handleSearch} loading={loading} setError={setError} error={error}/>}/>
     <Route path='/result' 
      element={<Result moods={moods} setError={setError} error={error} />}/>
  
     <Route path='/history' 
      element={<History history={history}/>}/>
     </Routes>
    
     <Footer/>
    </div>
    
  )
}

export default App
