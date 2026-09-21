import { Link, useLocation } from "react-router-dom";
import Toggle from "./Toggle";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="
      w-full
      flex
      flex-col
      sm:flex-row
      justify-between
      items-center
      gap-4
      bg-[#0A0B19]
      border-b
      border-[#24243D]
      py-4
      px-5
      sm:px-8
      md:px-12
    ">

      {/* Logo */}
      <Link
        to="/home"
        className="
          font-semibold
          text-2xl
          sm:text-3xl
          bg-gradient-to-r
          from-[#FF4FA3]
          to-[#A855F7]
          bg-clip-text
          text-transparent
        "
      >
        emotune
      </Link>


      {/* Navigation */}
      <div className="
        flex
        items-center
        gap-4
        sm:gap-6
        md:gap-8
      ">

      


        <Link
          to="/home"
          className={`
            relative
            text-sm
            font-medium
            transition-colors
            ${
              location.pathname === "/home"
                ? "text-white"
                : "text-[#A7A7B8] hover:text-white"
            }
          `}
        >
          home

          {location.pathname === "/home" && (
            <span className="
              absolute
              -bottom-1
              left-1/2
              h-[2px]
              w-8
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-[#FF4FA3]
              to-[#A855F7]
            " />
          )}
        </Link>


        <Link
          to="/result"
          className={`
            relative
            text-sm
            font-medium
            transition-colors
            ${
              location.pathname === "/result"
                ? "text-white"
                : "text-[#A7A7B8] hover:text-white"
            }
          `}
        >
          result

          {location.pathname === "/result" && (
            <span className="
              absolute
              -bottom-1
              left-1/2
              h-[2px]
              w-8
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-[#FF4FA3]
              to-[#A855F7]
            " />
          )}
        </Link>


        <Link
          to="/history"
          className={`
            relative
            text-sm
            font-medium
            transition-colors
            ${
              location.pathname === "/history"
                ? "text-white"
                : "text-[#A7A7B8] hover:text-white"
            }
          `}
        >
          history

          {location.pathname === "/history" && (
            <span className="
              absolute
              -bottom-1
              left-1/2
              h-[2px]
              w-8
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-[#FF4FA3]
              to-[#A855F7]
            " />
          )}
        </Link>

      </div>

    </nav>
  );
}