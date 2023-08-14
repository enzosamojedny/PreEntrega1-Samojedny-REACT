
import './App.css'
import Header from './components/nav-bar'
import ItemListContainer from './components/body-items/ItemListContainer'
import Item from './components/body-items/Item'
import { useState } from 'react'
function App() {

  return (
    <>
      <Header />
      <Item />
      <ItemListContainer />
    </>
  )
}

export default App
