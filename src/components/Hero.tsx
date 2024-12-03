import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto px-4 py-6 md:flex xs:flex-col  xs:justify-center justify-between">
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
          <motion.button
            whileHover="hover"
            className="gradient-button text-white px-8 py-4 text-xl sm:text-2xl  flex  items-center gap-6 group"
            style={{ maxWidth: 'fit-content' }} // Ensures the button only takes up necessary space
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
        </div>
        <div className="relative ">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-[3/2.5] bg-gray-200 rounded-3xl overflow-hidden"
          > */}
          <img
            src="/dr-header.png"
            alt="Dr. Ill"
            // style={{ height: 480 }}
            // className="w-full h-80 object-cover"
          />
          {/* </motion.div> */}
          {/* <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-lg">
            <span className="text-sm">416 587</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
