import Error from "../components/Error";
import Loading from "../components/Loading";
import {FaArrowAltCircleRight, FaRegArrowAltCircleRight} from 'react-icons/fa'


export default function Home({search,setSearch,handleSearch,loading,error,setError}){
    
    const handleSubmit=(e)=>{
        if(!search.trim()){
            e.preventDefault();
            setError("Too Tired To Type Something Hmphh :) Then Use Mood Chips")
          console.log("enter something")
           }else{
           handleSearch(search);
           }
     
     }

    return(
            <div className="relative min-h-screen overflow-hidden bg-[#02040F] text-[#F5F5F7] px-6 md:px-10 lg:px-14">

  {/* Dreamy background glows */}
  <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/20 blur-[140px]" />

  <div className="pointer-events-none absolute top-[25%] -right-40 h-[500px] w-[500px] rounded-full bg-[#EC4899]/15 blur-[150px]" />

  <div className="pointer-events-none absolute -bottom-52 left-[35%] h-[450px] w-[450px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

  {/* Your Home content */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        <span className="text-[#F5F5F7]">Not just music.</span>
       <br />
      <span className="bg-gradient-to-r from-[#FF4FA3] to-[#A855F7] bg-clip-text text-transparent">
        Your mood. Your soundtrack.
      </span>
       </h1>
       <p className="mt-5 max-w-lg text-lg text-[#A7A7B8] leading-relaxed">
  Emotune turns how you feel into the perfect playlist.
</p>
        <div> 
  <div className="relative z-10">
    
    {/* navbar / heading / input / mood chips etc. */}
    {loading?<Loading/>: <div><form onSubmit={handleSubmit} className="mx-8 flex gap-2 justify-center items-center mt-8 ">
        <input onChange={(e)=>setSearch(e.target.value)}
        value={search}
        type="text" placeholder="e.g. feeling nostalgic and calm..."
        className="flex-1 text-[#F5F5F7] px-4 py-2 w-96 md:w-[700px]  bg-[#0A0B19] placeholder-gray-500 rounded-2xl border-[#24243D] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20 focus:shadow-[0_0_25px_rgba(168,85,247,0.20)] hover:shadow-2xl hover:shadow-gray-400/10 hover:-translate-y-2 transition-all duration-500" />
          
        <button type="submit"  className="font-semibold bg-gradient-to-r from-[#FF4FA3] to-[#A855F7] md:font-semibold md: w-[35px] text-pink-600 rounded-lg px-2 py-2 text-md hover:shadow-2xl hover:shadow-gray-400/1 hover:-translate-y-1 transition-all duration-400 hover:bg-white hover:text-black"><FaArrowAltCircleRight size={16}/></button>
        
       </form>
       {error && <Error error={error}/>}

            <form className="flex justify-center items-center flex-wrap gap-4 m-12">
            <button type="button" onClick={()=>handleSearch("happy")} className="rounded-2xl bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] font-semibold text-#A7A7B8 px-4 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">happy</button>
            <button type="button" onClick={()=>handleSearch("sad")} className="rounded-2xl bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] font-semibold text-#A7A7B8 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">sad</button>
            <button type="button" onClick={()=>handleSearch("calm")} className="rounded-2xl bg-[#0A0B19] font-semibold border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] text-#A7A7B8 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">calm</button>
            <button type="button" onClick={()=>handleSearch("angry")} className="rounded-2xl bg-[#0A0B19] font-semibold border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] text-#A7A7B8 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">angry</button>
            <button type="button" onClick={()=>handleSearch("romantic")} className="rounded-2xl font-semibold bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] text-#A7A7B8 px-5 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">romantic</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="rounded-2xl font-semibold bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] text-#A7A7B8 px-4 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">motivated</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="rounded-2xl font-semibold bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] text-#A7A7B8 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400k">tired</button>


        </form>
       
         </div> 
        
        
        }
        
        
        </div>
  
       

  </div>

</div>
          
            
       
    
        
    )
}