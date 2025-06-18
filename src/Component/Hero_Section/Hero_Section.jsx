import React from 'react';
import gsap from 'gsap';
import "./Hero_Section.css";
import { useGSAP } from '@gsap/react';
import Resume from "../PDF/joya_resume.pdf";

const Hero_Section = () => {
  const symbols = [..."{}[]()<>=!"];

  const colors = [
    "text-yellow-300",
    "text-red-300",
    "text-green-300",
    "text-blue-300",
    "text-purple-300",
  ];

  const positions = [
    { top: "10%", left: "10%" },
    { top: "15%", left: "80%" },
    { top: "25%", left: "50%" },
    { top: "35%", left: "20%" },
    { top: "45%", left: "70%" },
    { top: "55%", left: "30%" },
    { top: "25%", left: "60%" },
    { top: "75%", left: "40%" },
    { top: "20%", left: "30%" },
    { top: "45%", left: "85%" },
    { top: "90%", left: "60%" },
    { top: "80%", left: "15%" },
  ];

  useGSAP(() => {
    gsap.to(".bg-symbol", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className='relative dark:bg-gray-800 overflow-x-hidden  pt-40 pb-48 z-10 px-3 h-fit' id='hero'>
     
      <div className='w-full overflow-y-hidden'>
        
        {/* Background Icons */}
        <div className="inset-0 z-0 pointer-events-none ">
          {symbols.map((char, i) => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const pos = positions[i % positions.length];

            return (
              <span
                key={i}
                className={`absolute bg-symbol ${color} opacity-50 text-5xl`}
                style={{
                  ...pos,
                  animationDelay: `${Math.random()}s`,
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {/* Hero Content */}
        <div className='max-w-screen-xl mx-auto relative lg:pl-7 overflow-y-hidden lg:flex lg:justify-between z-10'>
         
          <div className='pb-7 self-end'>
            <div className='text-gray-800 dark:text-gray-200 mb-5 sm:mb-8'>
              <h1 className='text-4xl sm:text-5xl leading-tight font-bold mb-2 font-sans sm:mb-5 md:text-6xl'>
                I'm Joya Saha
              </h1>
              <span className='italic font-semibold text-base sm:text-xl tracking-wide'>
                Creative Front End Architect 
              </span>
            </div>
            <a
              href={Resume}
              download="Resume"
              className='px-3 py-2 border-none bg-gradient-to-r from-amber-400 to-amber-300 text-white'
            >
              Download Resume
            </a>
          </div>

          <div>
            <ul className='contact-icon hidden lg:block text-gray-500 text-3xl space-y-6'>
              <li><a href="https://t.me/joyasaha440" target="_blank" rel="noopener noreferrer"><i className="ri-telegram-2-fill"></i></a></li>
              <li><a href="https://x.com/JoyaSaha104" target="_blank" rel="noopener noreferrer"><i class="ri-twitter-fill"></i></a></li>
              <li><a href="https://www.linkedin.com/in/joyasaha20/" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill"></i></a></li>
              <li><a href="https://github.com/joyasaha1004" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill"></i></a></li>
            </ul>
          </div>
      </div>

        <div className='absolute bottom-3 right-6 text-xs text-slate-400 z-50 lg:bottom-4'>
          <span className=''>🍪 Cookie-free zone — focus on frontend, not food.</span>
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
