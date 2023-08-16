
import './App.css'
import Header from './components/nav-bar'
import ItemListContainer from './components/body-items/ItemListContainer'
import Item from './components/body-items/Item'
import { useState } from 'react'
import BasicTabs from './components/nav-bar/tabs'
import ProductItem from './components/nav-bar/ProductItem'
function App() {
  return (
    <>
      <Header />
      <BasicTabs />
      <Item />
      <ItemListContainer />
    </>
  )
}

export default App
