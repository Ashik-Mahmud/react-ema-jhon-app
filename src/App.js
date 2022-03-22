import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Cart from './components/Cart/Cart'
import Error from './components/Error/Error'
import Header from './components/Header/Header'
import Order from './components/Order/Order'
import { Home } from './components/Pages/Home'
import Shops from './components/Shops/Shops'
const App = () => {
    const [cartCount, setCartCount] = useState(0)
  return (
    <>
        <BrowserRouter >
            <Header cartCount={cartCount} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shops' element={ <Shops setCartCount={setCartCount} cartCount={cartCount} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/order' element={<Order />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>        
        
    </>
  )
}

export default App