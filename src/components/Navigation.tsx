import React from "react";
import { Send, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import CopyButton from "./CopyButton";

const Navigation = () => {
  return (
    <nav className="fixed w-full top-0  bg-[#D9D9D9] z-50 border-b ">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Dr. Ill Institute</div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://t.me/drilltoken"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Send className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://twitter.com/drilltoken"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <CopyButton
            textToCopy="Av8agXfDJZuc1234567890"
            displayText="Av8agXfDJZuc...."
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-button text-white px-6 py-2.5 text-base font-bold"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
