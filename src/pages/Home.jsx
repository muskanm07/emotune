import Error from "../components/Error";
import Loading from "../components/Loading";
import girlImg from "../assets/girl.jpg";
import {FaAnchor, FaAngrycreative, FaArrowAltCircleRight, FaHeart, FaLeaf, FaMoon, FaStar, FaStarAndCrescent,FaAngry,FaBolt, FaTired, FaFrown,FaMeh} from 'react-icons/fa'


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
            <div className="relative min-h-screen bg-[#02040F] text-[#F5F5F7] px-6 md:px-10 lg:px-14">

  {/* Dreamy background glows */}
  <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/20 blur-[140px]" />

  <div className="pointer-events-none absolute top-[25%] -right-40 h-[500px] w-[500px] rounded-full bg-[#EC4899]/15 blur-[150px]" />

  <div className="pointer-events-none absolute -bottom-52 left-[35%] h-[450px] w-[450px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

    {/* Hero */}
<div className="relative ">

   <div className="absolute right-[-10px] top-[40px] w-100 h-100 blur-[80px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-40 pointer-events-none">
    {/* <div class="w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-80 animate-pulse"> */}
  </div>
   <div className="absolute right-[-10px] top-[40px] w-96 h-96 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pointer-events-none">
  <img
    src={girlImg}
    alt=""
    className="
      pointer-events-none
      absolute
      inset-0
      w-full
      h-full
      object-contain
      rounded-full
      hidden
      md:block
    "
  />
    </div>


{/* </div> */}
  {/* Hero content */}
  <div className="relative z-10 max-w-[720px]">

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight pt-8">
      <span className="text-[#F5F5F7]">
        Not just music.
      </span>

      <br />

      <span className="bg-gradient-to-r from-[#FF4FA3] to-[#A855F7] bg-clip-text text-transparent">
        Your mood. Your soundtrack.
      </span>
    </h1>

    <p className="mt-6 max-w-lg text-lg text-[#A7A7B8] leading-relaxed">
      Emotune turns how you feel into the perfect playlist.
    </p>

    {/* YOUR INPUT WILL GO HERE */}

    
    {/* navbar / heading / input / mood chips etc. */}
    {loading?<Loading/>: <div ><form onSubmit={handleSubmit} className="flex gap-2 justify-between items-center mt-8  ">
        <div className="px-2 flex justify-between items-center py-1 w-full md:w-[500px] lg:w-[400px] relative bg-[#0A0B19] border border-[#24243D] rounded-xl transition-all duration-300 hover:border-[#A855F7]/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.20)] ">
          <input onChange={(e)=>setSearch(e.target.value)}
        value={search}
        type="text" placeholder="e.g. feeling nostalgic and calm..."
        className="flex-1 overflow-hidden text-[#F5F5F7] bg-[#0A0B19] outline-none placeholder-[#6F7085] " />
        <button type="submit"  className="h-[35px] font-semibold bg-gradient-to-r from-[#FF4FA3] to-[#A855F7] md:font-semibold md: w-[35px] text-pink-600 rounded-lg px-2 py-2 text-md hover:shadow-2xl hover:shadow-gray-400/1 hover:-translate-y-1 transition-all duration-400 hover:bg-white hover:text-black"><FaArrowAltCircleRight size={14}/></button>
        </div>
       </form>
       {error && <Error error={error}/>}

            <form className="flex flex-wrap gap-2 my-4 ">
            <button type="button" onClick={()=>handleSearch("happy")} className="flex justify-center items-center gap-2 rounded-2xl bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:border-[#A855F7]/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] duration-300 font-semibold text-[#A7A7B8] px-3 py-1 active:ring-1 active:ring-pink-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300"><FaStar size={12} className="text-yellow-400"/>happy</button>
            <button type="button" onClick={()=>handleSearch("sad")} className="flex justify-center items-center gap-2 rounded-2xl bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:border-[#A855F7]/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] font-semibold text-[#A7A7B8] px-4 py-1 active:ring-1 active:ring-pink-500 hover:scale-105 hover:-translate-y-1 transition-all duration-400"><FaMoon size={12} className="text-blue-400"/>sad</button>
            <button type="button" onClick={()=>handleSearch("calm")} className="flex justify-center items-center gap-2 rounded-2xl bg-[#0A0B19] font-semibold border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] hover:border-[#A855F7]/20 text-[#A7A7B8] px-4 py-1 active:ring-1 active:ring-pink-500 hover:scale-105 hover:-translate-y-1 transition-all duration-400"><FaLeaf size={12} className="text-green-400"/> calm</button>
            <button type="button" onClick={()=>handleSearch("angry")} className="flex justify-center items-center gap-1.5 rounded-2xl bg-[#0A0B19] font-semibold border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] hover:border-[#A855F7]/20 text-[#A7A7B8] px-4 py-1 active:ring-1 active:ring-pink-500 hover:scale-105 hover:-translate-y-1 transition-all duration-400"><FaFrown size={13} className="text-red-400"/>angry</button>
            <button type="button" onClick={()=>handleSearch("romantic")} className="flex justify-center items-center gap-2 rounded-2xl font-semibold bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] hover:border-[#A855F7]/20 text-[#A7A7B8] px-4 py-1 active:ring-1 active:ring-pink-500 hover:scale-105 hover:-translate-y-1 transition-all duration-400"><FaHeart size={13} className="text-pink-400"/>romantic</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="flex justify-center items-center gap-1.5 rounded-2xl font-semibold bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] hover:border-[#A855F7]/20 text-[#A7A7B8] px-3 py-1 active:ring-1 active:ring-pink-500 hover:scale-105 hover:-translate-y-1 transition-all duration-400"><FaBolt size={13} className="text-sky-400"/>motivated</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="flex justify-center items-center gap-1.5 rounded-2xl font-semibold bg-[#0A0B19] border-1 border-[#24243D] shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] hover:border-[#A855F7]/20 text-[#A7A7B8] px-3 py-1 active:ring-1 active:ring-pink-500 hover:scale-105 hover:-translate-y-1 transition-all duration-400k"><FaMeh size={13} className="text-gray-400"/>tired</button>


        </form>
       
         </div> 
        
        
        }
        
        
       
  </div>

</div>
  
       

  
  
       </div>
      

          
            
       
    
        
    )
}