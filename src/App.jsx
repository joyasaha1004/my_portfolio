
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Hero from "./Component/Hero_Section/Hero_Section"
import About_Section from './Component/About_Section/About_Section';
import Skills_Section from './Component/Skills_Section/Skills_Section';
import Create_Cursor from './Component/Create_Cursor/Create_Cursor';
import Projects_Section from './Component/Projects/Projects_Section';
import Contact_Section from './Component/Contact_Section/Contact_Section';
import Footer from "./Component/Footer/Footer"

function App() {
 

  return (
    <>
    <Create_Cursor/>
    <Navbar/>
   <Hero/>
   <About_Section/>
   <Skills_Section/>
   <Projects_Section/>
   <Contact_Section/>
  <Footer/>

  {/* <Routes>
    
    <Route path='/about' element={<About/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/Projects' element={<Projects/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
   </Routes> */}
   
  </>
  )
}

export default App
    