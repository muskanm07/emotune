import { FaArrowAltCircleRight, FaHeart, FaLeaf, FaMoon, FaStar, FaFrown, FaBolt, FaMeh } from "react-icons/fa";
import Error from "../components/Error";
import Loading from "../components/Loading";
import girlImg from "../assets/girl.jpg";

export default function Home({
  search,
  setSearch,
  handleSearch,
  loading,
  error,
  setError,
}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setError("Too Tired To Type Something Hmphh :) Then Use Mood Chips");
      return;
    }

    handleSearch(search);
  };

  return (
    <main className="relative overflow-hidden bg-[#02040F] text-[#F5F5F7]">

      {/* Background glows */}
      <div className="
        pointer-events-none
        absolute
        -top-40
        -left-40
        h-[350px]
        w-[350px]
        rounded-full
        bg-[#7C3AED]/20
        blur-[110px]
        sm:h-[450px]
        sm:w-[450px]
        sm:blur-[140px]
        lg:h-[550px]
        lg:w-[550px]
      " />

      <div className="
        pointer-events-none
        absolute
        top-[35%]
        -right-40
        h-[350px]
        w-[350px]
        rounded-full
        bg-[#EC4899]/15
        blur-[120px]
        sm:h-[450px]
        sm:w-[450px]
        sm:blur-[150px]
        lg:h-[550px]
        lg:w-[550px]
      " />

      {/* Hero */}
      <section className="
        relative
        mx-auto
        w-full
        max-w-6xl
        px-5
        py-12
        sm:px-6
        sm:py-16
        md:px-10
        md:py-20
        lg:px-14
        lg:py-24
      ">

        <div className="
          relative
          grid
          grid-cols-1
          items-center
          gap-12
          md:grid-cols-[1.1fr_0.9fr]
          md:gap-8
          lg:gap-14
        ">

          {/* Content */}
          <div className="relative z-10 text-center md:text-left">

            {/* Heading */}
            <h1 className="
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              sm:text-5xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
            ">
              <span className="text-[#F5F5F7]">
                Not just music.
              </span>

              <br />

              <span className="
                bg-gradient-to-r
                from-[#FF4FA3]
                via-[#C084FC]
                to-[#A855F7]
                bg-clip-text
                text-transparent
              ">
                Your mood.
              </span>

              <br />

              <span className="text-[#F5F5F7]">
                Your soundtrack.
              </span>
            </h1>


            {/* Description */}
            <p className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-relaxed
              text-[#A7A7B8]
              sm:mt-6
              sm:text-base
              md:mx-0
              md:text-lg
            ">
              Tell Emotune how you're feeling and discover music
              that feels like it was made for that moment.
            </p>


            {/* Search */}
            <div className="mt-7 sm:mt-8">

              {loading ? (
                <Loading />
              ) : (
                <>
                  <form onSubmit={handleSubmit}>

                    <div className="
                      mx-auto
                      flex
                      w-full
                      max-w-xl
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-[#24243D]
                      bg-[#0A0B19]/90
                      p-2
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      focus-within:border-[#A855F7]/50
                      focus-within:shadow-[0_0_35px_rgba(168,85,247,0.18)]
                      md:mx-0
                    ">

                      <input
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        type="text"
                        placeholder="e.g. feeling nostalgic and calm..."
                        className="
                          min-w-0
                          flex-1
                          bg-transparent
                          px-2
                          py-2.5
                          text-sm
                          text-[#F5F5F7]
                          outline-none
                          placeholder:text-[#6F7085]
                          sm:px-3
                          sm:text-base
                        "
                      />

                      <button
                        type="submit"
                        aria-label="Search mood"
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-r
                          from-[#FF4FA3]
                          to-[#A855F7]
                          text-[#02040F]
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:shadow-lg
                          hover:shadow-pink-500/20
                          active:scale-95
                          sm:h-11
                          sm:w-11
                        "
                      >
                        <FaArrowAltCircleRight size={16} />
                      </button>

                    </div>

                  </form>


                  {error && (
                    <div className="mx-auto max-w-xl md:mx-0">
                      <Error error={error} />
                    </div>
                  )}


                  {/* Mood chips */}
                  <div className="mt-5">

                    <p className="
                      mb-3
                      text-center
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                      md:text-left
                      sm:text-xs
                    ">
                      or pick your vibe
                    </p>


                    <div className="
                      flex
                      flex-wrap
                      justify-center
                      gap-2
                      md:justify-start
                    ">

                      {/* Happy */}
                      <button
                        type="button"
                        onClick={() => handleSearch("happy")}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#24243D]
                          bg-[#0A0B19]/80
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#A7A7B8]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-yellow-400/30
                          hover:text-white
                          active:scale-95
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        <FaStar className="text-yellow-400" size={11} />
                        happy
                      </button>


                      {/* Sad */}
                      <button
                        type="button"
                        onClick={() => handleSearch("sad")}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#24243D]
                          bg-[#0A0B19]/80
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#A7A7B8]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-blue-400/30
                          hover:text-white
                          active:scale-95
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        <FaMoon className="text-blue-400" size={11} />
                        sad
                      </button>


                      {/* Calm */}
                      <button
                        type="button"
                        onClick={() => handleSearch("calm")}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#24243D]
                          bg-[#0A0B19]/80
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#A7A7B8]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-green-400/30
                          hover:text-white
                          active:scale-95
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        <FaLeaf className="text-green-400" size={11} />
                        calm
                      </button>


                      {/* Angry */}
                      <button
                        type="button"
                        onClick={() => handleSearch("angry")}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#24243D]
                          bg-[#0A0B19]/80
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#A7A7B8]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-red-400/30
                          hover:text-white
                          active:scale-95
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        <FaFrown className="text-red-400" size={12} />
                        angry
                      </button>


                      {/* Romantic */}
                      <button
                        type="button"
                        onClick={() => handleSearch("romantic")}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#24243D]
                          bg-[#0A0B19]/80
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#A7A7B8]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-pink-400/30
                          hover:text-white
                          active:scale-95
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        <FaHeart className="text-pink-400" size={12} />
                        romantic
                      </button>


                      {/* Motivated */}
                      <button
                        type="button"
                        onClick={() => handleSearch("motivated")}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#24243D]
                          bg-[#0A0B19]/80
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#A7A7B8]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-sky-400/30
                          hover:text-white
                          active:scale-95
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        <FaBolt className="text-sky-400" size={12} />
                        motivated
                      </button>


                      {/* Tired */}
                      <button
                        type="button"
                        onClick={() => handleSearch("tired")}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#24243D]
                          bg-[#0A0B19]/80
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#A7A7B8]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-gray-400/30
                          hover:text-white
                          active:scale-95
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        <FaMeh className="text-gray-400" size={12} />
                        tired
                      </button>

                    </div>
                  </div>
                </>
              )}

            </div>
          </div>


          {/* Image */}
          <div className="
            relative
            mx-auto
            flex
            w-full
            max-w-[320px]
            items-center
            justify-center
            md:max-w-[380px]
            lg:max-w-[430px]
          ">

            {/* Glow */}
            <div className="
              absolute
              h-[260px]
              w-[260px]
              rounded-full
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-blue-500
              opacity-20
              blur-[70px]
              sm:h-[330px]
              sm:w-[330px]
              lg:h-[420px]
              lg:w-[420px]
            " />

            {/* Image */}
            <div className="
              relative
              aspect-square
              w-full
              max-w-[300px]
              overflow-hidden
              rounded-full
              border
              border-white/10
              bg-gradient-to-br
              from-[#FF4FA3]/20
              via-[#A855F7]/20
              to-[#3B82F6]/20
              shadow-2xl
              shadow-purple-500/20
              sm:max-w-[350px]
              lg:max-w-[400px]
            ">
              <img
                src={girlImg}
                alt="Emotune mood"
                className="h-full w-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}