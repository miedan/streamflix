import React from 'react'

import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import netflixLogo from '../assets/net-logo.png';
import profilepic from '../assets/profilepic.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const Header = () => {

  const navigate = useNavigate()

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
    <div className='my-6'>
       
      <nav className='flex items-center justify-between '>

          <div className='flex items-center '>
            {/* <img src={netflixLogo} alt='netflixlogo' className='h-20 w-24 '></img> */}
            <div onMouseOver={handleonmouseover} onMouseOut={handleonmouseout} className='md:hidden relative  flex gap-1 items-center text-sm '>
              <p>browse</p>
              <IoMdArrowDropdown/>
              { dropdownon && (
              
                <ul className='w-32 absolute left-0 top-6 border  border-white text-sm flex flex-col gap-2 py-2'>
                  
                  <li>Home</li>
                  <li>Movies</li>
                  
                  
                  <li>Watch Later</li>
                </ul>
              
            )}
            </div>

            <ul className='hidden md:flex md:gap-3 '>
              <li>Home</li>
              <li>Movies</li>
              <Link to='/tvseries'>
                    <li>
                      Tv Series
                    </li>
                  </Link>
              <li>Watch Later</li>
            </ul>
          </div>

          <div className='flex gap-3 items-center pr-4'>
            
            <div className='hidden md:block'>
             

               <input type='search' placeholder='Search movies' className='border border-blue-500 text-black  bg-white pl-2 text-md'/>

              {/* {search ? 
              (
              <div className='relative inline-block'>
                <IoSearchOutline  className='absolute left-1 top-1/2 -translate-y-1/2 '/>
                <input type='search' placeholder='Search movies' className='border border-white bg-white pl-6 text-sm'/>
              </div>
              )
              : 
              (<IoSearchOutline onClick={handleclick}/>)} */}
            </div>
            

           
            
            
            <button onClick={() => navigate('/movie')} className='bg-blue-500 px-1'>Sign up</button>
            <button className=' border border-blue-500 px-1'>Log in</button>
            <MdOutlineNotifications/> 
            {/* <img src={profilepic} alt='profile avatar' className='w-6 h-6 w- ' ></img> */}

            {/* <div onMouseOver={handleonmouseover} onMouseOut={handleonmouseout} className='hidden md:relative  md:inline-block '>
              <IoMdArrowDropdown/>
              { dropdownon && (
              
                <ul className='w-32 absolute right-0 top-6 border  border-white text-sm flex flex-col gap-2 py-2'>
                  
                  <li>Manage profiles</li>
                  <li>Transfer profiles</li>
                  <li>Account</li>
                  <li>Help center</li>
                </ul>
              
            )}
            </div> */}
         
            
        

          </div>


      </nav>

    </div>
  )
}

export default Header