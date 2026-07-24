
import { Music, Heart } from "lucide-react";
import {FaGithub,FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="flex justify-center items-center w-full py-6 px-4 mt-12 border-t border-white/20 text-center text-md text-gray-300 gap-4 flex-wrap sm:text-sm">
      <p className="flex items-center gap-1">
        Made with <Heart size={16} className="text-pink-400" /> by Muskan
      
      </p>
    
       
     <a className="text-white text-sm flex justify-center itmes-center gap-2" href="https://github.com/muskanm07" target="_blank"><FaGithub size={18}/>GitHub</a>
   <a className="text-white text-sm flex justify-center itmes-center gap-2" href="https://www.linkedin.com/in/muskan-maurya-1344202b2/" target="_blank"><FaLinkedin size={18}/> LinkedIn</a>
    <p className="mt-1 text-sm text-gray-300">
        Built with React · Tailwind CSS · Gemini API · iTunes API
      </p>
    </footer>
  );
}

export default Footer;