import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { Home } from './components/Pages/Home'
import Shops from './components/Shops/Shops'
const App = () => {
  return (
    <>
        <BrowserRouter >
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shops' element={ <Shops />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>        
        
    </>
  )
}

export default App