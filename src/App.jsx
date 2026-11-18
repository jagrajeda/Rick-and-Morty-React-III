// import { useState } from 'react'
import { Outlet } from 'react-router';
import NavBar from './components/NavBar.jsx';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="container my-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;