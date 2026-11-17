// import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <main>
      <h1>Rick and Morty</h1>
      <Outlet />
    </main>
  )
}

export default App
