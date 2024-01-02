import { useState } from 'react'
import Navbar from "./components/Navbar"
import Content from './components/content'
import Cart from "./components/Cart"
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
