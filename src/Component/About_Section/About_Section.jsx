import React from 'react';

const About_Section = () => {
    return (
        <div>
        <section
  id="about"
  className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-16 overflow-x-hidden"
>
  <div className="max-w-screen-lg mx-auto text-black dark:text-gray-200 text-center lg:pt-10 lg:pb-12">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
      About Me
    </h2>
    <p className="text-lg leading-relaxed mb-8">
      I'm <span className="text-amber-500 font-semibold">Joya Saha</span>, a passionate front-end architect dedicated to crafting elegant, responsive, and accessible user experiences. My focus is always on writing clean code, creating smooth animations, and solving real user problems through design.
    </p>

    <div className="grid gap-4 md:grid-cols-2 text-left">
      <div className="flex items-start space-x-3">
        <i className="ri-flashlight-line text-amber-400 text-2xl"></i>
        <span>Expertise in React, Tailwind CSS & GSAP</span>
      </div>
      <div className="flex items-start space-x-3">
        <i className="ri-paint-brush-line text-amber-400 text-2xl"></i>
        <span>Pixel-perfect UI design implementation</span>
      </div>
      <div className="flex items-start space-x-3">
        <i className="ri-code-s-slash-line text-amber-400 text-2xl"></i>
        <span>Reusable and scalable component architecture</span>
      </div>
      <div className="flex items-start space-x-3">
        <i className="ri-magic-line text-amber-400 text-2xl"></i>
        <span>Strong sense for smooth UX and micro-interactions</span>
      </div>
      <div className="flex items-start space-x-3">
        <i className="ri-layout-line text-amber-400 text-2xl"></i>
        <span>Figma to HTML conversion with clean, responsive code</span>
      </div>
    </div>

    <a
      href="#projects"
      className="inline-block mt-8 px-5 py-2 bg-gradient-to-r from-amber-400 to-amber-300 text-white rounded hover:opacity-90 transition lg:mt-10"
    >
      See My Work
    </a>
  </div>
</section>


 
        </div>
    );
};

export default About_Section;