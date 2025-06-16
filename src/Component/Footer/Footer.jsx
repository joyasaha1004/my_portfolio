import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
  
         <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20  overflow-x-hidden">
            
            <div className='flex justify-center mb-6'>
             <h1 className='text-xl text-yellow-300 border w-12 h-10 rounded-lg flex items-center justify-center font-mono font-bold shadow-lg border-yellow-500 md:text-2xl md:w-16 md:h-12 '>{"{JS}"}</h1>
             </div>
             <div className='flex flex-wrap justify-center contact-link  gap-10 text-center mb-6 lg:gap-12'>
                <a href="https://x.com/JoyaSaha104" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a href="https://www.linkedin.com/in/joyasaha20" target="_blank" rel="noopener noreferrer">Linkdin</a>
                <a href="https://github.com/joyasaha1004" target="_blank" rel="noopener noreferrer">Github</a>
                </div>

               <div className="text-sm flex justify-center text-center md:text-right">
          &copy; {new Date().getFullYear()} Joya Saha. All rights reserved.
        </div>   
     
    </footer>
  
  );
};
     
        

export default Footer;