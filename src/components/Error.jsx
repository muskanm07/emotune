import {FaExclamationCircle} from 'react-icons/fa'


export default function Error({error}){

    return(
       
            // <p className="p-4 text-center text-purple-300 text-lg font-semibold ">{error}</p>
         <p className="my-6 w-full md:w-100 flex items-center gap-2 rounded-xl border border-[#FF4FA3]/60 bg-[#FF4FA3]/10 px-3 py-2 text-sm text-[#FFB8D9]"><FaExclamationCircle size={14}/>{error}</p>
    )
}