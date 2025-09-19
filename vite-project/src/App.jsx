import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>
    {/* <Signup/> */}
  
    </>
  )
}

export default App
