export default function Home({search,setSearch,handleSearch}){
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!search.trim()) return;
        handleSearch(search);
     }

    return(
        <div className="min-h-screen flex-col justify-center items-center text-center">
        <h1 className="mt-24 text-4xl text-white font-semibold ">How are you feeling right now</h1>
        <p className="text-gray-400 mt-2 text-lg font-normal">Describe your mood and we'll find the perfect soundtrack</p>
        <form onSubmit={handleSubmit} className="mx-8 flex gap-2 justify-center items-center mt-8 ">
        <input onChange={(e)=>setSearch(e.target.value)}
        value={search}
        type="text" placeholder="e.g. feeling nostalgic and calm..."
        className="text-white px-4 py-8 w-full md:w-[700px]  bg-gray-500/20 placeholder-gray-500 rounded-lg border-gray-500 focus:outline-none border focus:border-purple-400" />
          
        <button type="submit"  className="w-36 bg-[#1a1a1a] md:w-[100px] h-10 text-white border border-gray-500 rounded-lg">find my vibe</button>
        </form>
        <form className="flex justify-center items-center gap-4 my-8">
            <button type="button" onClick={()=>handleSearch("happy")} className="rounded-2xl bg-yellow-300/10 border border-yellow-400/70 text-yellow-300 px-5 py-1">happy</button>
            <button type="button" onClick={()=>handleSearch("sad")} className="rounded-2xl bg-blue-300/10 border border-blue-300 text-blue-300 px-5 py-1">sad</button>
            <button type="button" onClick={()=>handleSearch("calm")} className="rounded-2xl bg-emerald-300/10 border border-emerald-300 text-emerald-300 px-5 py-1">calm</button>
            <button type="button" onClick={()=>handleSearch("angry")} className="rounded-2xl bg-red-400/10 border border-red-400 text-red-400 px-5 py-1">angry</button>
            <button type="button" onClick={()=>handleSearch("romantic")} className="rounded-2xl bg-pink-400/10 border border-pink-400 text-pink-400 px-5 py-1 ">romantic</button>
            <button type="button" onClick={()=>handleSearch("motivated")} className="rounded-2xl border border-lime-400 text-lime-400 px-5 py-1 ">motivated</button>
        </form>
        </div>
    )
}