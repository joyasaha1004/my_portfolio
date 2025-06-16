import React from 'react';
import gsap from 'gsap';



const Skills_Section = () => {

   


    return (
        <div>
           <section id="skills" className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 overflow-x-hidden">
  <div className="max-w-screen-xl mx-auto text-gray-800 dark:text-gray-200 text-center lg:justify-self-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Skills</h2>

    <div className="flex flex-wrap gap-4 justify-center md:gap-7 ">
      {[
        { name: "React", icon: "ri-reactjs-line", color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: "ri-tailwind-css-line", color:"text-sky-400" },
        { name:"Bootstrap", icon:"ri-bootstrap-fill",color:"text-purple-700"},
        { name: "JavaScript", icon: "ri-javascript-line", color:"text-yellow-400" },
        { name: "GSAP", icon: "ri-flashlight-line", color: "text-green-400" },
        { name: "HTML5", icon: "ri-html5-line",color:"text-orange-500" },
        { name: "CSS3", icon: "ri-css3-line", color:"text-blue-500" },
        {name: "Github", icon:"ri-github-fill", color:"text-white"},
        { name: "Figma to HTML", icon: "ri-layout-line", color: "text-pink-400" },
  { name: "VS Code", icon: "ri-code-box-line", color: "text-indigo-400" },
          
      ].map((skill, i) => (
        
        <div
          key={i}
          className="flex flex-col items-center justify-center space-x-2 w-48 h-52 md:w-40 md:h-40 bg-gray-800 dark:bg-gray-800 text-white dark:text-gray-200 rounded-lg transition shadow-xl lg:w-52 lg:h-56"
        >
          <i className={`${skill.icon} ${skill.color} text-8xl self-center mb-2`}></i>
          <span className="font-medium text-xl">{skill.name}</span>
        </div>
        
      ))}
    </div>
  </div>
</section>
 
        </div>
    );
};

export default Skills_Section;