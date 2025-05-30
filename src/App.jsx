
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Hero from "./Component/Hero_Section/Hero_Section"
import About_Section from './Component/About_Section/About_Section';
import Skills_Section from './Component/Skills_Section/Skills_Section';


function App() {
 

  return (
    <>
    <Navbar/>
   <Hero/>
   <About_Section/>
   <Skills_Section/>
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
    