import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-orange-600">
      <div className="w-full py-[5vw] bg-white rounded-tl-3xl rounded-tr-3xl text-black px-20">
        <h1 className="font-neue text-[3vw] leading-[3vw] tracking-tight mr-[35vw]">
          Trippy takes the hassle out of travel planning.&nbsp;
          <span className="underline">
          Using AI, it quickly sorts out your itinerary
          </span>
          —so you can just pack, go, and have fun. We got you covered with {" "}
          <span className="italic">
            personalized plans &nbsp;
          </span>
          to make every journey
           unforgettable
          
          <br />
          <div className="mt-[1vw]">No Fikar, Trippy is Here!</div>
        </h1>

        {/* Animated Link 
        <div className="relative inline-block mt-[1vw]">
          <Link
            to="/create-trip"
            className="font-neue text-[3vw] leading-[3vw] tracking-tight mr-[35vw]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {"Get Started"}
          </Link> 
    
          <motion.div
            className="absolute h-[.5vh] bg-black left-0 bottom-0"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "30%" : "0%" }} // Control the width
            transition={{ duration: 0.3 }}
          />
        </div>*/}
      </div>

      {/* Footer Section */}
      <div className="bg-white">
        <div className="flex justify-between py-[2vh] pb-[4vh] px-[2vw] bg-zinc-900 text-white font-neue tracking-wide text-sm uppercase">
          <p>© 2024 Trippy. All rights reserved.</p>
          <p className="text-xs pt-2">Made with love, code, and tail wags 🐾</p>
        </div>
      </div>
    </div>
  );
}

export default About;
