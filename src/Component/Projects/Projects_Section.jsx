import React from 'react';

const Projects_Section = () => {

    const projects = [
  {
    title: "Car Showcase",
    description: "A responsive car-themed website. Designed with HTML5, CSS3, and JavaScript to demonstrate animation control and layout precision across devices.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://joyasaha1004.github.io/car-website2/",
  },
  {
    title: "Archistructure",
    description: "A modern, architecture-inspired website built with React and styled using Tailwind CSS. Routing with React Router DOM. Focused on clean design, visual storytelling, and smooth UX.",
    tech: ["React", "TailwindCSS", "React Router", "Heroicons"],
    link: "https://joyasaha1004.github.io/Archistructure/",
  },
 {
     title: "Furniture Website",
    description: "A modern furniture showcase built with React and Tailwind CSS. Uses React Router DOM for navigation, GSAP for scroll animations, and an image slider for featured products.",
    tech: ["React", "Tailwind CSS", "GSAP", "React Router DOM", "Image Slider"],
    link: "https://joyasaha1004.github.io/furniture-website/",
 },
  {
     title: "FoodieLand",
    description: "A visually appealing food website developed with React and Vite, styled using Tailwind CSS. Includes page routing, GSAP animations, and a product carousel using React Slick.",
    tech: ["React","Vite", "Tailwind CSS", "GSAP", "React Router DOM", "React Slick"],
    link: "https://joyasaha1004.github.io/foodieland/",
 },
 {
     title: "Personal Blog",
    description: "A responsive and animated personal blog website built with React and Vite. Styled using Tailwind CSS, enhanced with AOS for scroll animations and React Slick for image sliders. Focused on smooth UX and clean layout.",
    tech: ["React", "Vite", "Tailwind CSS", "AOS", "React Slick"],
    link: "https://joyasaha1004.github.io/personal-blog/",
 }
];

    return (
        <div>
          <section id="projects" className="bg-gray-100 text-black dark:bg-gray-800 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">My Projects</h2>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
         className="relative bg-gray-900 bg-opacity-60 border border-gray-700 backdrop-blur-md rounded-xl p-6 shadow-md transition-transform hover:-translate-y-2 hover:shadow-amber-400/20"
        >
          {/* Animated symbol background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {[..."<>[]{}="].map((char, i) => (
              <span
                key={i}
                className="absolute text-6xl text-amber-400/30 animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-600">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-amber-300 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-amber-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  
        </div>
    );
};

export default Projects_Section;