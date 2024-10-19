import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Features from './Components/Features/Features'
function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={ <Features/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App