import { useState } from "react";
import { motion } from "framer-motion";
import { words } from "../utils/data";

export default function InfiniteSlider() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="overflow-hidden max-w-xs mx-auto mt-8 font-manrope font-semibold">
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
              duration: 20,
              ease: "linear",
            },
          }}
          onAnimationComplete={() => setIsAnimating(true)}
        >
          <div className="flex gap-8">
            {words.welcomeTranslations.map((item, index) => (
              <motion.p
                key={`slide-${index}`}
                className="whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}
