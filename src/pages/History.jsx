export default function History({ history, handleSearch }) {
    return (
        <div className="min-h-screen px-5 py-8 md:px-10 lg:px-16">

            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-300/70 mb-2">
                    your vibe archive
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold text-white">
                    Recent moods
                </h1>

                <p className="text-gray-300/60 mt-2 text-sm md:text-base">
                    A little collection of the moods you've been feeling lately.
                </p>
            </div>

            {/* History */}
            <div className="max-w-4xl mx-auto space-y-4">

                {history.map((mood, idx) => (
                    <div
                        key={idx}
                        className="
                            group relative overflow-hidden
                            flex justify-between items-center
                            p-5 md:p-6
                            rounded-2xl
                            bg-white/[0.06]
                            border border-white/10
                            backdrop-blur-xl
                            transition-all duration-300
                            hover:bg-white/[0.10]
                            hover:border-yellow-300/30
                            hover:-translate-y-1
                            hover:shadow-lg hover:shadow-purple-500/10
                        "
                    >

                        {/* Soft background glow */}
                        <div className="
                            absolute -left-10 -top-10
                            w-28 h-28
                            bg-purple-500/10
                            rounded-full blur-3xl
                            group-hover:bg-purple-500/20
                            transition-all duration-300
                        " />

                        {/* Mood information */}
                        <div className="relative flex items-center gap-4">

                            <div className="
                                w-11 h-11
                                rounded-xl
                                flex items-center justify-center
                                bg-gradient-to-br
                                from-purple-400/20
                                to-yellow-300/10
                                border border-white/10
                                text-lg
                            ">
                                ♪
                            </div>

                            <div>
                                <p className="text-white font-medium">
                                    {mood.genre}
                                </p>

                                <p className="text-xs text-gray-400 mt-1">
                                    mood #{idx + 1}
                                </p>
                            </div>

                        </div>

                        {/* Mood button */}
                        <button
                            onClick={() => handleSearch(mood.mood)}
                            className="
                                relative
                                text-sm font-medium
                                rounded-full
                                px-4 py-2
                                text-yellow-200
                                bg-yellow-300/10
                                border border-yellow-300/30
                                hover:bg-yellow-300/20
                                hover:border-yellow-300/60
                                hover:shadow-md hover:shadow-yellow-300/10
                                transition-all duration-300
                            "
                        >
                            {mood.mood}
                        </button>

                    </div>
                ))}

            </div>
        </div>
    );
}