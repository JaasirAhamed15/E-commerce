import React from 'react'
import './Admin.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import Lisrproduct from '../../Components/Lisrproduct/Lisrproduct'
const admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/listproduct' element={<Lisrproduct/>}/>
        </Routes>
    </div>
  )
}

export default admin