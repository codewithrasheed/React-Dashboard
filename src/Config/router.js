import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Screen/Home';
import Dashboard from '../Screen/dashboard'
const router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard/*' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default router
