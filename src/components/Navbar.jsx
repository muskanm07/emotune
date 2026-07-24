import { Link } from "react-router-dom"
import Toggle from "./Toggle"

export default function Navbar(){

    return(
     
      <nav className="w-full flex flex-cols justify-between items-center flex-wrap bg-black border-b border-gray-600 py-5  ">
        <div className="py-1 text-xl px-4 sm:text-3xl">
       <span className="text-white">emo</span>
       <span className="text-purple-500">tune</span>
      </div>
      <div className="flex justify-center items-center text-white gap-4 text-sm text-gray-500 px-4 md:text-base gap-8 lg:gap-10">
            <Toggle/>
            <Link to ='/home' className="text-base text-gray-400 hover:text-white font-medium">home</Link>
       
            <Link to='/result' className="text-gray-400 hover:text-white font-medium text-base">result</Link>
     
            <Link to='/history' className="text-gray-400 hover:text-white font-medium text-base">history</Link>
      </div>
      </nav>
      
    )
}