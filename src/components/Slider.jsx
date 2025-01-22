import { useState } from "react";
import { motion } from "framer-motion";
import { words } from "../utils/data";

export default function InfiniteSlider() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="overflow-hidden max-w-sm mx-auto mt-8 font-manrope font-semibold">
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: isAnimating ? "-100%" : "0%",
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
          onAnimationComplete={() => setIsAnimating(true)}
        >
          {words.welcomeTranslations.map((item, index) => (
            <motion.p className="whitespace-nowrap" key={index}>
              {item}
            </motion.p>
          ))}
          {words.welcomeTranslations.map((item, index) => (
            <motion.p key={`repeat-${index}`}>{item}</motion.p>
          ))}
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}
