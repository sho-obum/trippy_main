import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-10 bg-orange-600 rounded-tl-3xl rounded-tr-3xl ">
      <div className="text border-b-2 border-t-2 border-zinc-00 flex whitespace-nowrap text-white overflow-hidden pr-10">
        <motion.h1
          animate={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className="text-[24vw] font-founders leading-none -mb-[2vw] -mt-[5vw]"
        >
          NO FIKAR TRIPPY IS HERE &nbsp;
        </motion.h1>
        <motion.h1
          animate={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className="text-[24vw] font-founders leading-none -mb-[2vw] -mt-[5vw]"
        >
          NO FIKAR TRIPPY IS HERE &nbsp;
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
