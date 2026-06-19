export default function Result(){

    return(
       <div className="min-h-screen flex-col justify-center items-center my-8 gap-4 ">
        <div className=" py-4 px-4 bg-purple-200 border border-purple-400/30 rounded-xl mx-8 ">
        <h1 className="font-bold text-purple-900/90 text-lg ">mood detected : calm & nostalgic</h1>
        <p className="font-semibold text-sm text-purple-900/90">AI analysis— lo-fi, soft-indie, ambient</p>
        </div>
        <p className="text-gray-300/80 py-8 px-8 font-medium">recommended songs</p>
        <div className="flex justify-center items-center gap-4 lg:gap-6 mx-6">
            <div className="w-full bg-gray-100/12 h-45 border border-gray-500 rounded-lg"></div>
            <div className="w-full bg-gray-100/12 h-45 border border-gray-500 rounded-lg"></div>
            <div className="w-full bg-gray-100/12 h-45 border border-gray-500 rounded-lg"></div>
        </div>
        <p className="text-gray-300/60 py-8 px-8 font-medium">spotify playlist</p>
         <div className=" py-4 px-4 bg-gray-100/12 border border-gray-400/40 rounded-xl mx-8 ">
        <p className="text-gray-300 font-medium">calm & nostalgic vibes</p>
        <p className="text-gray-400 text-sm">spotify embed playlist . 40 songs</p>
        </div>
       </div>
    )
}