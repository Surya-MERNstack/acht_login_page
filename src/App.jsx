import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Aside } from './components/Aside';
import { Main } from './components/Main';
import { Home } from './components/Home';
import CustomNavbar from './components/Navbar';
import './App.css'
import { Calender } from './pages/Calender';
import { Gallery } from './pages/Gallery';
import { Kanban } from './pages/Kanban';
import { Dashboard_1 } from './components/Dashboard_1';
import { Dashboard_2 } from './components/Dashboard_2';
import Login from './forms/Login';
import { ToastContainer } from 'react-toastify';
 const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element = {<Login/>}/>
        <Route path='/nav' element = {<CustomNavbar/>}/>
        <Route path='/aside' element = {<Aside/>}/>
        <Route path='/main' element = {<Main/>}/>
        <Route path='/calendar' element = {<Calender/>}/>
        <Route path='apex-chart' element = {<ApexCharts/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
        <Route path='/kanban' element = {<Kanban/>}/>
        <Route path='/dashborad_1' element = {<Dashboard_1/>}/>
        <Route path='/dashborad_2' element = {<Dashboard_2/>}/>
        </Routes>      
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App;