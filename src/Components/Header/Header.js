import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <Sidebar />
            <div className='search'>
                <input type="search" className='search_bar' name="" id="" />
                <IoIcons.IoMdSearch className='search_icon' />
            </div>
            <div className='icons'>
                <IoIcons.IoIosNotifications className='icon1' />
                <CgIcons.CgProfile className='icon2' />
            </div>   
    </div>
  )
}

export default Header