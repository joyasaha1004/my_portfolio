
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Hero from "./Component/Hero_Section/Hero_Section"


function App() {
 

  return (
    <>
    <Navbar/>
   <Hero/>
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
    