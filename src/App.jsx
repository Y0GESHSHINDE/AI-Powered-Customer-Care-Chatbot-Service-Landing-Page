import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Features from './Components/Features/Features'
import Mainfeatures from './Components/Mainfeatures/Mainfeatures'
import Footer from './Components/Footer/Footer'
import IndustryApplication from './Components/IndustryApplications/IndustryApplication'
import Subscription from './Components/Subscription/Subscription'
import Contact from './Components/ContactUS/Contact'


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/features" element={<Mainfeatures/>} />
        <Route path="/subscription" element={<Subscription/>} />
        <Route path="/applications" element={<IndustryApplication/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App