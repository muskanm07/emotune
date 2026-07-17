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
        <div className="min-h-screen flex-col justify-center items-center text-center">
        <h1 className="mt-24 text-4xl text-white font-semibold ">How are you feeling right now</h1>
        <p className="text-gray-400 mt-2 text-lg font-normal">Describe your mood and we'll find the perfect soundtrack</p>
        <div>
           
       {loading? <form onSubmit={handleSubmit} className="mx-8 flex gap-2 justify-center items-center mt-8 ">
        <input onChange={(e)=>setSearch(e.target.value)}
        value={search}
        type="text" placeholder="e.g. feeling nostalgic and calm..."
        className="text-white px-4 py-8 w-full md:w-[700px]  bg-gray-500/20 placeholder-gray-500 rounded-lg border-gray-500 focus:outline-none border focus:border-purple-400" />
          
        <button type="submit"  className="w-36 bg-[#1a1a1a] md:w-[100px] h-10 text-white border border-gray-500 rounded-lg">find my vibe</button>
        
        </form>:<Loading/>}
        {error && <Error error={error}/>}
        </div>
        <form className="flex flex flex-wrap justify-center items-center gap-4 m-12 px-8">
            <button type="button" onClick={()=>handleSearch("happy")} className="rounded-2xl bg-yellow-100/80 border border-yellow-400 text-yellow-800 px-8 py-1">happy</button>
            <button type="button" onClick={()=>handleSearch("sad")} className="rounded-2xl bg-blue-100/80 border border-blue-300 text-blue-700 px-10 py-1">sad</button>
            <button type="button" onClick={()=>handleSearch("calm")} className="rounded-2xl bg-emerald-100/80 border border-emerald-300 text-emerald-800 px-9 py-1">calm</button>
            <button type="button" onClick={()=>handleSearch("angry")} className="rounded-2xl bg-red-100/80 border border-red-400 text-red-800 px-8 py-1">angry</button>
            <button type="button" onClick={()=>handleSearch("romantic")} className="rounded-2xl bg-pink-100/80 border border-pink-400 text-pink-800 px-6 py-1 ">romantic</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="rounded-2xl bg-lime-100/80  border border-lime-400 text-lime-800 px-5 py-1 ">motivated</button>
        </form>
        </div>
    )
}