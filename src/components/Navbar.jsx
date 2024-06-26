import React, { useState } from 'react'
import {FaBars,FaTimes ,FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,FaTwitter} from 'react-icons/fa'
  import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/sjlogo.png'
import { Link } from 'react-router-dom'; // Import Link from React Router

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='justify-between flex items-center 
    fixed w-full text-gray-300 h-[90px] px-4 bg-[#0a192f]'>
       <div>
     <img src={logo} alt="sj" width={120}/>
       </div>
       {/* menu */}

   
        <ul className='hidden md:flex'>
        <li>
          <Link to="/"  >
          Home
        </Link>
        </li>
        <li><Link to="/about"  >
          About
        </Link>
        </li>
        <li><Link to="/skills"  >
          Skills
        </Link>
        </li>
        <li><Link to="/work"  >
          Work
        </Link>
        </li>
        <li><Link to="/contact"  >
          Contact
        </Link></li>
        </ul>
    
       {/* Hamburger */}

       <div onClick={handleClick}  className='md:hidden z-10'>
       {!nav ? <FaBars /> : <FaTimes />}
       </div>

       {/* mobile-menu */}
     
       <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }>
            <li className='py-6 text-4xl'> <Link to="/" onClick={handleClick} >
             Home
            </Link>
          </li>
            <li  className='py-6 text-4xl'>
              
            <Link to="/about" onClick={handleClick} >About</Link>

            </li>
            <li  className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/skills"  > Skills </Link>
         
       
            </li>
            <li  className='py-6 text-4xl'>
            <Link to="/work" onClick={handleClick}  >  Work </Link>

       
            </li>
            <li className='py-6 text-4xl'>
            <Link to="/contact" onClick={handleClick}   >  Contact </Link>

        
            </li>
        </ul>
       

       {/* Social-icons */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] bg-[#0072b1] ml-[-100px] duration-300 hover:ml-[-10px] h-[60px] flex justify-between items-center'>
            <a href="https://www.linkedin.com/in/sivaji-gadidala-b712ba221" className='flex justify-between items-center text-gray-300 w-full' >LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] bg--[#333333]  ml-[-100px] duration-300 hover:ml-[-10px] h-[60px] flex justify-between items-center'>
            <a href="https://github.com/sivajisj" className='flex justify-between items-center text-gray-300 w-full' >Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] bg-[#3281d5] ml-[-100px] duration-300 hover:ml-[-10px] h-[60px] flex justify-between items-center'>
            <a href="https://twitter.com/iamsivajisj?t=1aIlFQShApjN50JW891vFw&s=09" className='flex justify-between items-center text-gray-300 w-full' >Twitter <FaTwitter size={30}/>
            </a>
          </li>
          <li className='w-[160px] bg-purple-900 ml-[-100px] duration-300 hover:ml-[-10px] h-[60px] flex justify-between items-center'>
            <a href="https://drive.google.com/file/d/1v8yLVs6tVwHRrEGGoz1sWscglwZ9hYlH/view?usp=sharing" className='flex justify-between items-center text-gray-300 w-full' > Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] bg-[#089994] ml-[-100px] duration-300 hover:ml-[-10px] h-[60px] flex justify-between items-center'>
            <a href="/" className='flex justify-between items-center text-gray-300 w-full' > Email <HiOutlineMail size={30} />
            </a>
          </li>
          
        </ul>
       </div>
    </div>
    
    
  
  )
}
