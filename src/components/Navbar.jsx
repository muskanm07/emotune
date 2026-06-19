import { Link } from "react-router-dom"

export default function Navbar(){

    return(
      <nav className="flex items-center justify-between bg-black border-b border-gray-600 px-6 py-4">
        <div className="text-2xl">
       <span className="text-white">emo</span>
       <span className="text-purple-500">tune</span>
      </div>
      <div className="flex text-white gap-8 text-sm text-gray-500 px-8">
       
            <Link to ='/home' className="text-gray-400 hover:text-white">home</Link>
       
            <Link to='/result' className="text-gray-400 hover:text-white">result</Link>
     
            <Link to='/history' className="text-gray-400 hover:text-white">about</Link>
      </div>
      </nav>
    )
}