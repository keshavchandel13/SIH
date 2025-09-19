import React from 'react'
import './App.css'
import AppRoutes from './routes/Approutes'
import { AuthProvider } from './Context/authContext'

function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}


export default App
