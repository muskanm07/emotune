import Error from "../components/Error";
import Loading from "../components/Loading";

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
        <div className="min-h-screen flex-col justify-center items-center text-center px-8">
        <h1 className="mt-24 text-xl text-white font-semibold md:text-3xl lg:text-4xl ">How are you feeling right now</h1>
        <p className="text-gray-400 mt-2 text-lg font-semibold px-4">Describe your mood and we'll find the perfect soundtrack</p>
       
        <div> 
            
       {loading?<Loading/>: <div><form onSubmit={handleSubmit} className="mx-8 flex gap-2 justify-center items-center mt-8 ">
        <textarea onChange={(e)=>setSearch(e.target.value)}
        value={search}
        type="text" placeholder="e.g. feeling nostalgic and calm..."
        className="text-white px-4 py-8 w-96 md:w-[700px]  bg-gray-500/20 placeholder-gray-500 rounded-lg border-gray-500 overflow-hidden focus:outline-none border-2 focus:border-purple-400 hover:shadow-2xl hover:shadow-gray-400/10 hover:-translate-y-2 transition-all duration-500" />
          
        <button type="submit"  className="w-36 font-semibold text-xs md:font-semibold md: w-[100px] text-white border-3 border-white rounded-lg px-4 text-md hover:shadow-2xl hover:shadow-gray-400/1 hover:-translate-y-1 transition-all duration-400 hover:bg-white hover:text-black">find my vibe</button>
        
       </form>
       {error && <Error error={error}/>}

            <form className="flex justify-center items-center flex-wrap gap-4 m-12">
            <button type="button" onClick={()=>handleSearch("happy")} className="rounded-2xl bg-yellow-100 border-4 border-yellow-900 font-semibold text-yellow-700 px-4 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">happy</button>
            <button type="button" onClick={()=>handleSearch("sad")} className="rounded-2xl bg-blue-100/80 border-4 border-blue-900 font-semibold text-blue-800 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">sad</button>
            <button type="button" onClick={()=>handleSearch("calm")} className="rounded-2xl bg-emerald-100/80 font-semibold border-4 border-emerald-900 text-emerald-800 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">calm</button>
            <button type="button" onClick={()=>handleSearch("angry")} className="rounded-2xl bg-red-100/80 font-semibold border-4 border-red-900 text-red-800 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">angry</button>
            <button type="button" onClick={()=>handleSearch("romantic")} className="rounded-2xl font-semibold bg-pink-100/80 border-4 border-pink-900 text-pink-800 px-5 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">romantic</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="rounded-2xl font-semibold bg-lime-100/80  border-4 border-lime-900 text-lime-800 px-4 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400">motivated</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="rounded-2xl font-semibold bg-slate-100/80  border-4 border-slate-700 text-slate-800 px-6 py-1 hover:shadow-md hover:shadow-white/20 hover:-translate-y-1 transition-all duration-400k">tired</button>


        </form>
       
         </div> 
        
        
        }
        
        
        </div>
  
       
        </div>
    
        
    )
}