import { ThemeContext } from "../store/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { words, animationVariants } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  function getRandomWord() {
    return Math.floor(Math.random() * words.futureDesignQuotes.length);
  }

  const [word, setWord] = useState(words.futureDesignQuotes[getRandomWord()]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(words.futureDesignQuotes[getRandomWord()]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className={`font-manrope space-y-4 max-w-xs mx-auto py-20`}>
        <h1 className="text-5xl tracking-tight ">
          Transforming <span className="font-serif italic">spaces</span> with
          modern design.
        </h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={word}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-lg leading-tight block h-12"
          >
            {word}
          </motion.p>
        </AnimatePresence>
        <button
          className={`${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } tracking-tight px-4 py-2 rounded-lg text-sm`}
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}
