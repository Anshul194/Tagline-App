import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

import About from './pages/About'
import Header from './components/Header'
import Footercom from './components/Footercom'; // Ensure correct import

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/sign-up' element={<SignUp/>}/>

        <Route path='/sign-in' element={<SignIn/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>

        <Route path='/projects' element={<Projects/>}/>
        <Route path='*' element={<div>Page Not Found</div>} />

        </Routes>
<Footercom></Footercom>
        </BrowserRouter>
  )
}