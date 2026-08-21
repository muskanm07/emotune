
import { Music, Heart } from "lucide-react";
import {FaGithub,FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="w-full mt-12 border-t border-[#24243D] bg-[#0A0B19] px-6 py-10">
     {/* <footer className="w-full mt-12 border-t border-[#24243D] bg-[#0A0B19] px-6 py-10"> */}
  <div className="max-w-6xl mx-auto flex justify-between items-center gap-5">

    <div className="flex flex-col justify-around items-center gap-2">
     <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF4FA3] to-[#A855F7] bg-clip-text text-transparent">
  ♪ Emotune
</h2>                       
     <p className="text-[#A7A7B8] text-sm">Feel it. Play it.</p>                
   <p className="text-[#6F7085] text-sm">Your mood, your music</p>
   <p className=" bg-[#101124]
        rounded-xl
        px-2
        border border-[#24243D]
        text-xs
        text-[#A7A7B8]
        hover:border-[#FF4FA3]
        hover:bg-[#FF4FA3]/10">Made for every mood.   </p>
    </div>

    <div className="text-[#A7A7B8]">
     <p className="text-[#A7A7B8] text-sm ">explore</p> 
      <p className="text-[#A7A7B8] text-sm">Home</p> 
       <p className="text-[#A7A7B8] text-sm">Discover</p> 
        <p className="text-[#A7A7B8] text-sm">Mood Analyzer</p> 
        </div>
        <div className="flex flex-col items-center gap-2">
        <p className="text-[#A7A7B8] text-sm">Connect</p>

     <a
        href="https://github.com/muskanm07"
        target="_blank"
        rel="noreferrer"
        className="flex items-center 
        gap-2 text-[#A7A7B8] 
        hover:text-white
        text-xs 
        transition-colors
        bg-[#101124]
        rounded-xl
        px-2
        border border-[#24243D]
        hover:border-[#FF4FA3]
        hover:bg-[#FF4FA3]/10"
      >
        <FaGithub size={14} className="hover:text-[#FF4FA3]" />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/muskan-maurya-1344202b2/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center
         gap-2 text-[#A7A7B8] 
         hover:text-white 
         text-xs
         transition-colors
         bg-[#101124]
        rounded-xl
        px-2
        border border-[#24243D]
        hover:border-[#FF4FA3]
        hover:bg-[#FF4FA3]/10">
        <FaLinkedin size={14} className="hover:text-[#FF4FA3]"/>
        LinkedIn
      </a>
   

   </div>

  </div>
  
  <div className="flex justify-around items-center my-2">
    <p className="text-sm text-[#6F7085]">
      © 2026 Emotune · Your mood. Your soundtrack.
    </p>
    <p className="text-sm text-[#6f7085]"> Made with ♡ for music lovers</p>
  </div>

     
    </footer>
  );
}

export default Footer;