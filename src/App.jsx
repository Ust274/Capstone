import Footer from "./Components/Footer"
import Header from "./Components/Header"
// import Hero from "./Components/Hero"

import React from 'react'
import MainPage from './Pages/MainPage'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Reservation from './Pages/Reservation'
import OrderOnline from './Pages/OrderOnline'

import {Routes,BrowserRouter as Router,Route } from 'react-router-dom'
function App() {


  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/OrderOnline' element={<OrderOnline/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App
