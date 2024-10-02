import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "./Marquee";
import About from "./About";

function Hero() {
  const [rotate, setRotate] = useState(0);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);
  const [hovered, setHovered] = useState(false); // State for hover

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      const distanceLimit = 10;
      const distanceX = Math.min(
        Math.max(deltaX * 0.1, -distanceLimit),
        distanceLimit
      );
      const distanceY = Math.min(
        Math.max(deltaY * 0.1, -distanceLimit),
        distanceLimit
      );
      setPupilPosition({ x: distanceX, y: distanceY });
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 425);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-[3vw] px-[5vw] flex justify-between">
        <div className="text">
          {["AI-crafted itineraries", "for your", "next adventure"].map(
            (item, index) => {
              return (
                <div className="masker text-white" key={index}>
                  <div className="w-fit flex items-end overflow-hidden">
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "8vw" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                        className="mr-[0.5vw] w-[8vw] rounded-md h-[4.4vw] -top-[1.2vw] relative bg-orange-500"
                      ></motion.div>
                    )}

                    <h1 className="pt-[vw] -mb-[-1vw] uppercase text-[7vw] leading-[.75] font-founders">
                      {item}
                    </h1>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {!isSmallScreen && (
          <div className="eye">
            <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
              <div className="absolute top-1/2 -translate-x-[100%] -translate-y-[50%] flex gap-10">
                {/* Left Eye */}
                <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center relative">
                    <div
                      style={{
                        transform: `translate(-50%, -50%) translate(${pupilPosition.x}px, ${pupilPosition.y}px) rotate(${rotate}deg)`,
                      }}
                      className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                    >
                      <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                  </div>
                </div>
                {/* Right Eye */}
                <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center relative">
                    <div
                      style={{
                        transform: `translate(-50%, -50%) translate(${pupilPosition.x}px, ${pupilPosition.y}px) rotate(${rotate}deg)`,
                      }}
                      className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                    >
                      <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-3 px-[10vw] md:text-sm">
        {["from wanderlust to reality.", "from plans to adventures."].map(
          (item, index) => (
            <p
              key={index}
              className="text-md leading-none text-white "
            >
              {item}
            </p>
          )
        )}
        <Link to="/create-trip">
       <motion.div
      className={`px-4 py-2 text-zinc-900 uppercase text-md font-neue bg-white rounded-xl border md:text-sm `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      >
     
      Get Started
    </motion.div>
      </Link>
      </div>
    
      <div data-scroll data-scroll-speed=".1" data-scroll-section>
        <Marquee />
        <About />
      </div>
    </div>
  );
}

export default Hero;
