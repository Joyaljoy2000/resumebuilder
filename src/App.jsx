import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ResumeGeneratorPage from './pages/ResumeGeneratorPage'
import FormPage from './pages/FormPage'
import PNF from './pages/PNF'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
   <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/resumeGenerator' element={<ResumeGeneratorPage/>}/>
      <Route path='/form' element={<FormPage/>}/>
      <Route path='*' element={<PNF/>}/>
    </Routes>
    <Footer/>

    

    </>
  )
}

export default App
