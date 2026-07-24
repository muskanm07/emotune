import { useEffect, useState } from "react";

async function searchTracks(query){
  const res=await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=10`);
  if(!res.ok) throw new setError("itunes search failed")
    const data=await res.json();
  console.log(data)
  return data.results;
}

export default function Result({moods,setError,error}){
  const [tracks,setTracks]=useState([]);
   if(!moods) return <h1 className="text-2xl text-purple-300 text-center font-semibold py-12">your stupid heart need to search the mood first</h1>
   
   useEffect(()=>{
      if(!moods?.genre) return 
   searchTracks(moods.genre)
   .then(setTracks)
   .catch(()=>setError("could not fetch track try again."))
   
},[moods])


    return(
       <div className="min-h-screen flex-col justify-center items-center my-8 gap-4 ">

        <div className=" py-4 px-4 bg-purple-200 border border-purple-400/30 rounded-xl mx-8 ">
        <h1 className="font-bold text-purple-900/90 text-lg ">mood detected : {moods.mood}</h1>
        <p className="font-semibold text-sm text-purple-900/90">{moods.genre}</p>
        </div>
        <p className="text-gray-300/80 py-8 px-8 font-medium">recommended songs</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-4 gap-6 mx-6">
           {tracks.map((track)=>(
            
            <div key={track.trackId} className="w-full bg-gray-100/12 h-auto border border-gray-500 rounded-lg hover:shadow-lg hover:shadow-gray-300/15 hover:-translate-y-2 hover:transtion-all duration-500">
              <img src={track.artworkUrl100} alt={track.trackName} className="w-full px-4 py-2 my-2 rounded-4xl"/>
              <p className="text-purple-300 font-semibold text-sm text-center px-6">{track.trackName} </p>
              <p className="text-white text-center text-sm px-6 py-2">{track.artistName}</p>
              {track.previewUrl && (
                <audio src={track.previewUrl} controls className="w-full h-10 px-2 my-2 "></audio>
              )}
              </div>
           ))}
           </div>        
       </div>
    )
}