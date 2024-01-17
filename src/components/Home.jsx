import React from 'react'
import Navbar from './Navbar'
import { Aside } from './Aside'
import { Main } from './Main'
import { Fotter } from './Fotter'
import { Calender } from '../pages/Calender'
import CustomNavbar from './Navbar'

export const Home = () => {
  return (
    <div className='container-fluid'>
      <div>
        <CustomNavbar/>
      </div>
      <div>
        <Aside/>
      </div>
      <div style={{width : "80%", marginLeft : "auto"}}>
        <Main/>
      </div>
    </div>
  )
}
