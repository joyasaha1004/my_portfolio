import React, { useRef } from 'react';
import { gsap } from "gsap";




const Create_Cursor = () => {
    const root = document.querySelector("#root")

   const cursor = useRef()

   root.addEventListener("mousemove",function(dets){
    gsap.to(cursor.current,{
        x:dets.x,
        y:dets.y,
    })
   })
    return (
        <div>
         <div ref={cursor} className="w-6 h-6 rounded-full bg-yellow-300 dark:bg-white fixed top-0 left-0 pointer-events-none z-[9999]  blur-xl"></div>   
        </div>
    );
};

export default Create_Cursor;