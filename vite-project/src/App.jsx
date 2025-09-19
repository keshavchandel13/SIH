import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import Dietian from './Pages/Dietitian'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}

    <Signup/>

    {/* <Signup/> */}
    <Dietian/>
    </>

  )
}

export default App
