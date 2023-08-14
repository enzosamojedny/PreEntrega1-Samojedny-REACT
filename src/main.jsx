import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from './routes/Cart.jsx'
import CartWidget from './components/nav-bar/CartWidget.jsx'
import Item from './routes/Item.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />} />
        <Route exact path='/carrito' element={<Cart />} />
        <Route exact path='/carrito' element={<Item />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
