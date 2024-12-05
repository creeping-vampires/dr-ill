import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-0 pb-0 px-2">
      <div className="max-w-7xl mx-auto px-2 py-6 md:flex xs:flex-col xs:justify-center justify-between items-center">
        <div className="flex flex-col justify-between h-full gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-9xl font-medium mb-4 leading-tight"
          >
            You 🫵
            <br />
            Need Help
          </motion.h1>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-6xl font-regular mb-4"
            >
              Meet Dr. ILL
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-2xl mb-8 max-w-xl"
            >
              He is the world's first AI therapist, dedicated to helping you
              recover from rugs, cope with FOMO, and finally stop panic-selling
              your life choices.
            </motion.p>
          </div>
          <motion.a
            href="https://t.me/Dr_Ill_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover="hover"
              className="gradient-button text-white px-8 py-4 text-xl sm:text-2xl flex items-center gap-6 group"
              style={{ maxWidth: "fit-content" }}
            >
              Start Your Recovery
              <motion.div
                variants={{
                  hover: {
                    x: 10,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.a>
        </div>
        <div className="relative flex justify-center">
          <video
            src="/drIllvideo2.mp4"
            autoPlay
            loop
            controls
            className="w-full h-[480px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
