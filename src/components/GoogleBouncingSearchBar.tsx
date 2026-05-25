"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = [
  { char: "G", color: "#ff8ba7" },
  { char: "O", color: "#5ec8e5" },
  { char: "O", color: "#ffd166" },
  { char: "G", color: "#ff8ba7" },
  { char: "L", color: "#a7f3d0" },
  { char: "Ệ", color: "#5ec8e5" },
];

export default function GoogleBouncingSearchBar() {
  const [wave, setWave] = useState(0);
  const [focus, setFocus] = useState(false);

  // 🌊 wave mỗi 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setWave((w) => w + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-6 py-20">
      {/* LOGO */}
      <div className="flex gap-2 select-none">
        {letters.map((l, i) => (
          <motion.span
            key={i} // ✅ FIX: key cố định
            animate={{
              y: focus
                ? [0, -14, 0]
                : wave % 2 === 0
                ? [0, -10, 0]
                : [0, -6, 0],
              scale: focus
                ? [1, 1.1, 1]
                : [1, 1.04, 1],
            }}
            transition={{
              duration: focus ? 0.9 : 1.6,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
            whileHover={{
              y: -24,
              scale: 1.25,
              transition: {
                type: "spring",
                stiffness: 420,
                damping: 10,
              },
            }}
            style={{
              color: l.color,
              textShadow: `0 0 14px ${l.color}55`,
            }}
            className="text-7xl md:text-8xl font-extrabold cursor-pointer"
          >
            {l.char}
          </motion.span>
        ))}
      </div>

      {/* SEARCH */}
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="My project"
        className="
          w-full max-w-2xl
          text-lg md:text-xl
          px-6 py-4
          rounded-full
          border border-[#ff8ba7]
          shadow-md
          outline-none
          bg-white
          focus:shadow-xl
        "
      />
    </div>
  );
}