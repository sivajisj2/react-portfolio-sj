import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import About from './components/About'
import { Navbar } from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Workk from './components/Workk'
import Contact from './components/contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (

   <>
  
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/skills" element={<Skills />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/work" element={<Workk />} />
   </Routes>
   </BrowserRouter>
  
   
   </>
  )
}

export default App

