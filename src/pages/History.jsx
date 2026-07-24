export default function History({history,handleSearch}){
    
    return(
        <div className="min-h-screen flex-col justify-center items-center">
            
            <p className="text-gray-300/80 text-xl py-8 px-8 font-medium">your recent moods</p>
            
        
            {history.map((mood,idx)=>(
            
            <div  key={idx} className="flex justify-between items-center my-4 py-4 px-4 bg-gray-100/12 border border-gray-400/40 rounded-xl mx-8 hover:shadow-md hover:shadow-white/20 hover:-translate-y-2 trasition-all duration-400">
                 <div className=" flex-cols">
                <p className="text-white font-medium">{mood.genre}</p>
                </div>
                <button className="text-sm rounded-2xl bg-yellow-300/10 border border-yellow-300 text-yellow-300 px-3 py-1" onClick={()=>handleSearch(mood.mood)}>{mood.mood}</button>
                </div>
            ))}
            </div>
                

          
        
    )
}