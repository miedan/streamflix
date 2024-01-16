import React from 'react'

import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import netflixLogo from '../assets/net-logo.png';
import profilepic from '../assets/profilepic.jpg';
import { useState } from 'react';




const Header = () => {

  const [search, setsearch] = useState(false)
  const [dropdownon, setdropdownon] = useState(false)

  const handleclick = () =>{
    setsearch(!search)
  }

  const handleonmouseover = () => {
    setdropdownon(true)
  }

  const handleonmouseout = () => {
    setdropdownon(false)
  }
  
  return (
    <div>
       
      <nav className='flex items-center justify-between '>

          <div className='flex items-center '>
            <img src={netflixLogo} alt='netflixlogo' className='h-20 w-24 '></img>
            <div onMouseOver={handleonmouseover} onMouseOut={handleonmouseout} className='md:hidden relative  flex gap-1 items-center text-sm '>
              <p>browse</p>
              <IoMdArrowDropdown/>
              { dropdownon && (
              
                <ul className='w-32 absolute left-0 top-6 border  border-white text-sm flex flex-col gap-2 py-2'>
                  
                  <li>Home</li>
                  <li>Tv Shows</li>
                  <li>Movies</li>
                  <li>Latest</li>
                  <li>My List</li>
                </ul>
              
            )}
            </div>

            <ul className='hidden md:flex md:gap-3 '>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
            </ul>
          </div>

          <div className='flex gap-3 items-center pr-4'>
            
            <div className='hidden md:block'>

              {search ? 
              (
              <div className='relative inline-block'>
                <IoSearchOutline  className='absolute left-1 top-1/2 -translate-y-1/2 '/>
                <input type='search' placeholder='Genre, Titles, People' className='border border-white bg-black pl-6 text-sm'/>
              </div>
              )
              : 
              (<IoSearchOutline onClick={handleclick}/>)}
            </div>
            

           
            
            <MdOutlineNotifications/> 
            <img src={profilepic} alt='profile avatar' className='w-6 h-6 w- ' ></img>

            <div onMouseOver={handleonmouseover} onMouseOut={handleonmouseout} className='hidden md:relative  md:inline-block '>
              <IoMdArrowDropdown/>
              { dropdownon && (
              
                <ul className='w-32 absolute right-0 top-6 border  border-white text-sm flex flex-col gap-2 py-2'>
                  
                  <li>Manage profiles</li>
                  <li>Transfer profiles</li>
                  <li>Account</li>
                  <li>Help center</li>
                </ul>
              
            )}
            </div>
         
            
        

          </div>


      </nav>

    </div>
  )
}

export default Header