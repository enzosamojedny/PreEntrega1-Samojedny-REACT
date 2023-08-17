
import './App.css'
import Header from './components/nav-bar'
import ItemListContainer from './components/body-items/ItemListContainer'
import Item from './components/body-items/Item'
import BasicTabs from './components/nav-bar/tabs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './routes/Cart'
import ItemList from './components/body-items/ItemList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Item />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/products/:id' element={<Item />} />
          <Route exact path="/item-list" element={<ItemList items={Item} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
