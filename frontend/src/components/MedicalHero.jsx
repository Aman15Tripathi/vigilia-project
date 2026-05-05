// import React, { useEffect, useRef, useState } from "react";

// export default function ECGHeroPro() {
//   const canvasRef = useRef();
//   const [mouseOver, setMouseOver] = useState(false);
//   const [pulse, setPulse] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     let t = 0;

//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // 🎨 BACKGROUND
//       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//       gradient.addColorStop(0, "#0b2a3c");
//       gradient.addColorStop(0.5, "#0f3b57");
//       gradient.addColorStop(1, "#134e6f");

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       const leftLimit = canvas.width * 0.5;
//       const centerY = canvas.height / 2 - 20; // 🔥 thoda upar

//       // ✅ LINE MOVE ONLY WHEN NOT HOVER
//       if (!mouseOver) {
//         const scrollFactor = window.scrollY * 0.01;
//         t += 0.8 + scrollFactor; // smooth motion
//       }

//       // ECG LINE
//       ctx.beginPath();
//       ctx.lineWidth = 3;
//       ctx.strokeStyle = "#38bdf8";
//       ctx.shadowBlur = 15;
//       ctx.shadowColor = "#38bdf8";

//       let x = 0;
//       ctx.moveTo(x, centerY);

//       while (x < leftLimit) {
//         let baseWave = Math.sin((x + t) * 0.015) * 10;

//         let spike = 0;
//         if ((x + t) % 240 > 220) {
//           spike = -65 * Math.sin(((x + t) % 20) * 0.25);
//         }

//         ctx.lineTo(x, centerY + baseWave + spike);
//         x += 4;
//       }

//       ctx.stroke();

//       requestAnimationFrame(draw);
//     }

//     draw();

//     return () => window.removeEventListener("resize", resize);
//   }, [mouseOver]);

//   // ❤️ HEART BEAT ONLY ON HOVER (continuous)
//   useEffect(() => {
//     let interval;

//     if (mouseOver) {
//       interval = setInterval(() => {
//         setPulse(prev => !prev);
//       }, 700); // slow heartbeat
//     } else {
//       setPulse(false);
//     }

//     return () => clearInterval(interval);
//   }, [mouseOver]);

//   return (
//     <div className="w-full h-screen relative overflow-hidden">

//       {/* CANVAS */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//       />

//       {/* CONTENT */}
//       <div className="relative z-10 flex h-full">

//         {/* LEFT SECTION */}
//         <div
//           className="w-1/2 h-full relative"
//           onMouseEnter={() => setMouseOver(true)}
//           onMouseLeave={() => setMouseOver(false)}
//         >

//           {/* ❤️ HEART */}
//           <div
//             className="absolute right-10"
//             style={{
//               top: "45%", // 🔥 center adjust
//               transform: pulse ? "scale(1.8)" : "scale(1.3)",
//               transition: "transform 0.5s ease-in-out",
//               filter: "drop-shadow(0 0 25px #ef4444)",
//             }}
//           >
//             <div className="text-red-500 text-8xl">❤️</div>
//           </div>

//         </div>

//         {/* RIGHT SECTION */}
//         <div className="w-1/2 flex items-center justify-center px-16">

//           <div className="max-w-xl text-white">

//             <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
//               Real-Time Heart Monitoring
//             </h1>

//             <p className="mt-6 text-cyan-100 text-lg">
//               Experience precision healthcare with dynamic ECG visualization,
//               delivering real-time heartbeat insights.
//             </p>

//             <button className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg shadow-lg shadow-cyan-500/30 text-white">
//               Get Started
//             </button>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";

export default function ECGHeroPro() {
  const canvasRef = useRef();
  const [mouseOver, setMouseOver] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0b2a3c");
      gradient.addColorStop(0.5, "#0f3b57");
      gradient.addColorStop(1, "#134e6f");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const leftLimit = canvas.width * (window.innerWidth < 768 ? 1 : 0.5);
      const centerY = canvas.height / 2 - 20;

      if (!mouseOver) {
        const scrollFactor = window.scrollY * 0.01;
        t += 0.8 + scrollFactor;
      }

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#38bdf8";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#38bdf8";

      let x = 0;
      ctx.moveTo(x, centerY);

      while (x < leftLimit) {
        let baseWave = Math.sin((x + t) * 0.015) * 10;

        let spike = 0;
        if ((x + t) % 240 > 220) {
          spike = -65 * Math.sin(((x + t) % 20) * 0.25);
        }

        ctx.lineTo(x, centerY + baseWave + spike);
        x += 4;
      }

      ctx.stroke();

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resize);
  }, [mouseOver]);

  useEffect(() => {
    let interval;

    if (mouseOver) {
      interval = setInterval(() => {
        setPulse(prev => !prev);
      }, 700);
    } else {
      setPulse(false);
    }

    return () => clearInterval(interval);
  }, [mouseOver]);

  return (
    <div className="w-full h-screen relative overflow-hidden">

      {/* CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">

        {/* LEFT */}
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full relative"
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        >
          {/* ❤️ HEART */}
          <div
            className="absolute right-6 md:right-10"
            style={{
              top: "45%",
              transform: pulse ? "scale(1.8)" : "scale(1.3)",
              transition: "transform 0.5s ease-in-out",
              filter: "drop-shadow(0 0 25px #ef4444)",
            }}
          >
            <div className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              ❤️
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-6 sm:px-10 md:px-16 text-center md:text-left">

          <div className="max-w-xl text-white">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Real-Time Heart Monitoring
            </h1>

            <p className="mt-4 sm:mt-5 md:mt-6 text-cyan-100 text-sm sm:text-base md:text-lg">
              Experience precision healthcare with dynamic ECG visualization,
              delivering real-time heartbeat insights.
            </p>

            <button className="mt-6 md:mt-8 px-5 py-2.5 sm:px-6 sm:py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg shadow-lg shadow-cyan-500/30 text-white text-sm sm:text-base">
              Get Started
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}