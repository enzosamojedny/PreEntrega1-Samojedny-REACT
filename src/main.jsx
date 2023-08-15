import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from './routes/Cart.jsx'
import Item from './routes/Item.jsx'
import ItemList from './components/body-items/ItemList.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/item' element={<Item />} />
        <Route exact path="/item-list" element={<ItemList items={Item} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
