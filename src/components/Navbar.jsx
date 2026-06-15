import { Link } from "react-router-dom"

export default function Navbar(){

    return(
      <nav className="flex items-center justify-between bg-black border-b border-gray-500 px-6 py-4">
        <div className="text-2xl">
       <span className="text-white">emo</span>
       <span className="text-purple-500">tune</span>
      </div>
      <div className="flex text-white gap-8 text-sm text-gray-500 px-8">
       
            <Link to ='/'>home</Link>
       
            <Link to='/'>history</Link>
     
            <Link to='/'>about</Link>
      </div>
      </nav>
    )
}