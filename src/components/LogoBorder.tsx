import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface LogoBorderProps {
  position: "top" | "bottom";
}

const LogoBorder: React.FC<LogoBorderProps> = ({ position }) => {
  const logos = Array(100).fill("$ILL");
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(
    scrollY,
    [0, 1000],
    position === "top" ? [-windowWidth / 2, 0] : [0, -windowWidth / 2]
  );

  return (
    <div
      className={`w-full ${
        position === "top" ? "mt-[88px]" : "mt-15"
      } py-2 overflow-hidden`}
    >
      <motion.div className="flex justify-center items-center" style={{ x }}>
        <div className="flex space-x-2 text-gray-500 text-lg ">
          {logos.map((logo, index) => (
            <span key={index} className="opacity-50">
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LogoBorder;
