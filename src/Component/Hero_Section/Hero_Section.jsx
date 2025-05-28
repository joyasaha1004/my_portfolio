import React from 'react';
import gsap from 'gsap';
import "./Hero_Section.css";
import { useGSAP } from '@gsap/react';

const Hero_Section = () => {
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
      
           <div className='dark:bg-gray-800 overflow-x-hidden relative h-screen flex items-center z-10 px-3 lg:h-fit lg:pt-20 lg:pb-36 ' id='hero'>
     
 <div className='max-w-screen-xl mx-auto w-full lg:relative'>
        <div className="inset-0 z-0 pointer-events-none">
  {[..."{}[]()<>=!"].map((char, i) => {
    const colors = [
      "text-yellow-300",
      "text-red-300",
      "text-green-300",
      "text-blue-300",
      "text-purple-300",
    ]

    
     const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
      <span
        key={i}
        className={`absolute bg-symbol ${randomColor} opacity-50 text-5xl`}
         style={{

          top: `${Math.random() * 90}%`,

           left: `${Math.random()*90 }%`,
        animationDelay: `${Math.random() }s`,
         }}
      >
        {char}
      </span>
    );
  })}
  </div>

<div className=' lg:pl-7 overflow-y-hidden lg:flex lg:justify-between'>

<div className=' pb-7  self-end'>
  <div className=' text-gray-800 dark:text-gray-200 mb-5 sm:mb-8'>
    <h1 className='text-4xl sm:text-5xl leading-tight  font-bold mb-2 font-sans sm:mb-5 md:text-6xl '>I'm Joya Saha</h1>
    <span className='italic  font-semibold text-base sm:text-xl tracking-wide'>Creative Front End Architect</span>
    
    </div>
     <a  href="/joya_resume.pdf"  download="Joya_Saha_Resume" className='px-3 py-2 border-none bg-gradient-to-r from-amber-400 to-amber-300 text-white'>Download Resume</a> 
  
        </div>

       <div className=''>
        <ul className='contact-icon hidden lg:block text-gray-500 text-3xl space-y-6'>
          <li><a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer"><i className="ri-telegram-2-fill"></i></a></li>
         <li><a href="https://www.facebook.com/profile.php?id=61565204070045" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-circle-fill"></i></a></li>
        <li><a href="https://www.linkedin.com/in/joyasaha20" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill"></i></a></li>
       <li><a href="https://github.com/joyasaha1004" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill"></i></a></li>
        </ul>
       </div>

 </div>
  <div className='absolute bottom-2 right-6 text-xs text-slate-400 z-50 lg:-bottom-32 '>
    <span>🍪 Cookie-free zone — focus on frontend, not food.</span>
  </div>

       
       </div> </div>
    );
};

export default Hero_Section;