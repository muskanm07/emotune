import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
<footer className="relative mt-0 overflow-hidden border-t border-[#24243D]/70 bg-[#050714] px-5 py-10 sm:px-6 sm:py-12">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-1/2
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-[#A855F7]/10
          blur-[100px]
          sm:h-72
          sm:w-72
          sm:left-1/3
          sm:translate-x-0
          sm:blur-[120px]
        "
      />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* Main Footer */}
        <div
          className="
            grid
            grid-cols-1
            gap-9
            sm:gap-10
            md:grid-cols-3
            md:gap-8
          "
        >

          {/* Brand */}
          <div className="text-center md:text-left">

            <h2
              className="
                text-2xl
                font-bold
                bg-gradient-to-r
                from-[#FF4FA3]
                to-[#A855F7]
                bg-clip-text
                text-transparent
              "
            >
              ♪ Emotune
            </h2>

            <p className="mt-1 text-sm text-[#A7A7B8]">
              Feel it. Play it.
            </p>

            <p
              className="
                mx-auto
                mt-4
                max-w-xs
                text-sm
                leading-relaxed
                text-[#6F7085]
                md:mx-0
              "
            >
              Your mood, your music. Discover sounds that match
              exactly how you're feeling.
            </p>

            <div
              className="
                mt-4
                inline-flex
                rounded-full
                border
                border-[#24243D]
                bg-[#101124]
                px-3
                py-1.5
                text-xs
                text-[#A7A7B8]
                transition-all
                duration-300
                hover:border-[#FF4FA3]/40
                hover:bg-[#FF4FA3]/5
              "
            >
              Made for every mood ♡
            </div>

          </div>


          {/* Mobile: Explore + Connect side by side */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:contents">

            {/* Explore */}
            <div className="text-center md:text-left">

              <p
                className="
                  mb-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F7085]
                "
              >
                Explore
              </p>

              <div className="space-y-3">

                <p
                  className="
                    cursor-pointer
                    text-sm
                    text-[#A7A7B8]
                    transition-colors
                    hover:text-white
                  "
                >
                  Home
                </p>

                <p
                  className="
                    cursor-pointer
                    text-sm
                    text-[#A7A7B8]
                    transition-colors
                    hover:text-white
                  "
                >
                  Discover
                </p>

                <p
                  className="
                    cursor-pointer
                    text-sm
                    text-[#A7A7B8]
                    transition-colors
                    hover:text-white
                  "
                >
                  Mood Analyzer
                </p>

              </div>

            </div>


            {/* Connect */}
            <div className="text-center md:text-left">

              <p
                className="
                  mb-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F7085]
                "
              >
                Connect
              </p>

              <div className="flex flex-col items-center gap-3 md:items-start">

                <a
                  href="https://github.com/muskanm07"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    w-full
                    max-w-[130px]
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    border
                    border-[#24243D]
                    bg-[#101124]
                    px-3
                    py-2.5
                    text-sm
                    text-[#A7A7B8]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#FF4FA3]/40
                    hover:bg-[#FF4FA3]/5
                    hover:text-white
                    active:scale-95
                  "
                >
                  <FaGithub
                    size={16}
                    className="transition-colors group-hover:text-[#FF4FA3]"
                  />

                  GitHub
                </a>


                <a
                  href="https://www.linkedin.com/in/muskan-maurya-1344202b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    w-full
                    max-w-[130px]
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    border
                    border-[#24243D]
                    bg-[#101124]
                    px-3
                    py-2.5
                    text-sm
                    text-[#A7A7B8]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#FF4FA3]/40
                    hover:bg-[#FF4FA3]/5
                    hover:text-white
                    active:scale-95
                  "
                >
                  <FaLinkedin
                    size={16}
                    className="transition-colors group-hover:text-[#FF4FA3]"
                  />

                  LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="my-8 h-px bg-[#24243D]/70 sm:my-10" />


        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-2
            text-center
            sm:gap-3
            md:flex-row
            md:justify-between
            md:text-left
          "
        >

          <p className="text-[11px] leading-relaxed text-[#6F7085] sm:text-xs">
            © 2026 Emotune · Your mood. Your soundtrack.
          </p>

          <p className="text-[11px] leading-relaxed text-[#6F7085] sm:text-xs">
            Made with <span className="text-[#FF4FA3]">♡</span> for music lovers
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;