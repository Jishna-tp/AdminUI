import React from 'react'
// import './Body.css';
import {Routes, Route } from 'react-router-dom';
import Home from '../Components/Content/Home'
import Profile from '../Components/Content/Profile'
import {Settings, Venue, Department} from '../Components/Content/Settings'
import Login from './Login/Login'

const Admin = () => {
  return (
    <Routes>
        <Route path="/Login" element={<Login />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Settings/venue" element={<Venue />} />
        <Route path="/Settings/Department" element={<Department />} />
    </Routes>
  )
}

export default Admin