import React, { useEffect, useState } from "react";

function EyeCom() {
  const [rotate, setRotate] = useState(0);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Calculate the rotation angle
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Calculate the pupil's position
      const distanceLimit = 10; // Limit the distance in pixels
      const distanceX = Math.min(Math.max(deltaX * 0.1, -distanceLimit), distanceLimit);
      const distanceY = Math.min(Math.max(deltaY * 0.1, -distanceLimit), distanceLimit);
      setPupilPosition({ x: distanceX, y: distanceY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup to remove event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="rounded-tr-3xl rounded-tl-3xl">
      <div className="eyes w-full h-screen overflow-hidden">
        <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
            {/* Left Eye */}
            <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
              <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center relative">
                <div
                  style={{ 
                    transform: `translate(-50%, -50%) translate(${pupilPosition.x}px, ${pupilPosition.y}px) rotate(${rotate}deg)` 
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
                    transform: `translate(-50%, -50%) translate(${pupilPosition.x}px, ${pupilPosition.y}px) rotate(${rotate}deg)` 
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
    </div>
  );
}

export default EyeCom;
