import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.style.background = toggle
      ? "rgb(14, 13, 13)"
      : "rgb(245, 245, 245)";

    return () => {
      document.body.style.background = "";
    };
  }, [toggle]);

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className={`
        flex
        items-center
        justify-center
        px-4
        py-1
        rounded-2xl
        border
        border-white
        text-xs
        mt-1
        transition-all
        duration-300
        ${
          toggle
            ? "bg-[rgb(14,13,13)] text-white"
            : "bg-white text-black"
        }
      `}
    >
      {toggle ? <FaMoon size={12} /> : <FaSun size={14} />}
    </button>
  );
}