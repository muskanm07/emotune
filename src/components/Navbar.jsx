import { Link } from "react-router-dom"
import Toggle from "./Toggle"

export default function Navbar(){

    return(
     
      <nav className="w-full flex flex-cols justify-between items-center flex-wrap bg-[#0A0B19] border-b border-[#24243D] py-5  ">
        <div className="py-1 font-semibold text-2xl px-12 bg-gradient-to-r from-[#FF4FA3] to-[#A855F7] bg-clip-text text-transparent sm:text-3xl">
       <span className="">emo</span>
       <span className="">tune</span>
      </div>
      <div className="flex justify-center items-center text-white gap-4 text-sm text-gray-500 px-8 md:text-base gap-8 lg:gap-10">
            <Toggle/>
            <Link to ='/home' className={`relative text-sm font-medium active:text-[#FF4FA3] transition-colors
             ${
      location.pathname === "/home"
        ? "text-white after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[#FF4FA3] after:to-[#A855F7]"
        : "text-[#A7A7B8] hover:text-white"
    }`}>home</Link>
       
            <Link to='/result' className={`relative text-sm font-medium active:text-[#FF4FA3] transition-colors
    ${
      location.pathname === "/result"
        ? "text-white after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[#FF4FA3] after:to-[#A855F7]"
        : "text-[#A7A7B8] hover:text-white"
    }`}>result</Link>
     
            <Link to='/history' className={`relative text-[#A7A7B8] font-medium text-sm active:text-[#FF4FA3]
    ${
      location.pathname === "/history"
        ? "text-white after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[#FF4FA3] after:to-[#A855F7]"
        : "text-[#A7A7B8] hover:text-white"
    }`}>history</Link>
      </div>
      </nav>
      
    )
}