import React, { useRef,useEffect,useState } from 'react';
import "./Navbar.css";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Navbar = () => {

  const menuRef = useRef();
  const crossRef = useRef();

  const layer1 = useRef();
  const layer2 = useRef();
  const layer3 = useRef();
   const navContent = useRef();
   const navIcon = useRef();
   const tlRef = useRef();

 
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(layer1.current, {
      width: "100%",
      duration: 0.3,
      ease: "power3.inOut",
    })
       .to(layer2.current, {
        width: "100%",
        duration: 0.3,
        ease: "power3.inOut",
      }, "-=0.2")
    .to(layer3.current, {
        width: "100%",
        duration: 0.3,
        ease: "power3.inOut",
       backgroundImage: 'linear-gradient(to right, #0f172a, #334155)',
      },"-=0.2" )
     .to(navContent.current, { display: "block" })
    .to(navIcon.current, { display: "block" });

  tl.pause();

  tlRef.current = tl; // Save timeline to ref

  menuRef.current.addEventListener("click", () => tl.play());
  crossRef.current.addEventListener("click", () => tl.reverse());

  return () => {
    menuRef.current?.removeEventListener("click", () => tl.play());
    crossRef.current?.removeEventListener("click", () => tl.reverse());
  };
}, []);


    const [theme, setTheme] = useState(null);

    useEffect(()=>{
        if(window.matchMedia('(prefer-color-scheme! dark)').matches){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    },[]);
    useEffect(()=>{
      if(theme === "dark"){
          document.documentElement.classList.add("dark");
      }else{
          document.documentElement.classList.remove("dark");
      }
    },[theme]);

    const handleThemeSwitch = ()=>{
        setTheme(theme === "dark" ? "light":"dark");
    }


  return (
    <div className='overflow-x-hidden  z-80 relative dark:bg-gray-800'>
      <header className='px-3 py-3 flex max-w-screen-xl mx-auto justify-between lg:px-4 border-none'>

        <h1 className='text-xl text-yellow-300 border w-12 h-10 rounded-lg flex items-center justify-center font-mono font-bold shadow-lg border-yellow-500 md:text-2xl md:w-16 md:h-12 '>{"{JS}"}</h1>

        {/* Layers */}
        <div ref={layer1} className="fixed top-0 left-0 h-full w-0 bg-yellow-500 z-40"></div>
        <div ref={layer2} className="fixed top-0 left-0 h-full w-0 bg-yellow-200 z-50"></div>

        {/* Layer 3 - Nav */}
        <div ref={layer3} className="fixed top-0 left-0 h-full w-0 pt-8 text-white text-center z-50 lg:hidden">

           <i ref={crossRef} className="ri-close-line cross text-3xl absolute right-6 top-0 cursor-pointer "></i>
          <ul ref={navContent} className='nav-list space-y-6 hidden pb-6'>
         
           
            <li className='group'><a href='#about' className="underline-hover"  onClick={() => tlRef.current?.reverse()} >About</a></li>
            <li className='group'><a href='#skills' className="underline-hover"  onClick={() => tlRef.current?.reverse()}>Skills</a></li>
            <li className='group'><a href='#projects' className="underline-hover" onClick={() => tlRef.current?.reverse()} >Projects</a></li>
            <li className='group'><a href='#contact' className="underline-hover"  onClick={() => tlRef.current?.reverse()}>Contact</a></li>
          </ul>

           <div className='hidden ' ref={navIcon}>
        <ul className='contact-icon justify-center flex text-gray-500  text-3xl space-x-4'>
          <li><a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer"><i className="ri-telegram-2-fill"></i></a></li>
         <li><a href="https://www.facebook.com/profile.php?id=61565204070045" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-circle-fill"></i></a></li>
        <li><a href="https://www.linkedin.com/in/joyasaha20" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill"></i></a></li>
       <li><a href="https://github.com/joyasaha1004" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill"></i></a></li>
        </ul>
        </div>
          
        </div>

        <div className=" space-x-6 lg:justify-items-end lg:self-center hidden lg:block text-gray-600 dark:text-gray-400 z-60">
          <ul className='nav-list  nav-items flex lg:space-x-9 '>
            <li className='group'>
              <a href='#about' className="underline-hover" >About</a>
            
            </li>
            <li className='group'>
              <a href='#skills'  className="underline-hover" >Skills</a>
              
              </li>
            <li className='group'>
              <a href='#projects'  className="underline-hover" >Projects</a>
              
              </li>
            <li className='group'>
              <a href='#contact' className="underline-hover" >Contact</a>
              
              </li>
          </ul>
         
          </div>
 <i className="ri-contrast-fill hidden lg:block lg:text-2xl lg:self-center text-gray-600 cursor-pointer underline-hover" onClick={handleThemeSwitch}></i> 

      
        {/* Menu Icon */}
        <i ref={menuRef} className="ri-menu-3-line menu self-center font-semibold text-lg sm:text-xl lg:hidden cursor-pointer dark:text-white"></i>
       

              </header>
    </div>
  );
};

export default Navbar;

