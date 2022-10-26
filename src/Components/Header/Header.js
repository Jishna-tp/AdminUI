import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <Sidebar />
        <div className='header-items'>
            <div className='search'>
                <input type="search" name="" id="" />
                <IoIcons.IoMdSearch />
            </div>
            <div className='icons'>
                <IoIcons.IoIosNotifications />
                <CgIcons.CgProfile />
            </div>
        </div>     
    </div>
  )
}

export default Header