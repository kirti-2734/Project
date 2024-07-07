import React, { useEffect, useState } from 'react'
import "../styles/navbar.css"
import logo from "../../public/logo4.png"
import Login from './Login';
import { useAuth } from '../context/Autho';
import Logout from './Logout';
function Navbar() {


  const[sticky,setSticky]= new useState(false);
  const[authUser,setAuthUser] = useAuth();
  console.log(authUser)

  useEffect(()=>{

    const handleScroll =()=>{
      if(window.scrollY>0)
      {
        setSticky(true);
      }
      else
      {
        setSticky(false);
      }
     
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[]); 
  return (
    <>
        <div className='mx-4 mt-12'>
        <div className={`navbar bg-base-100 fixed top-0 left-0 right-0 z-10 ${
          sticky ?"sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" :" "
        }`}>
            <div className="navbar-start">
        <div className="dropdown">
             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
             <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className='text-3xl'><a href='/'>Home</a></li>
        <li><a href='/product'>Shop</a></li>
        <li><a>Add Product</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <a className=" text-2xl font-bold cursor-pointer"><img src={logo} className='logo'></img></a>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/'>Home</a></li>
      <li>
       <a href='/product'>Shop</a>
      </li>
      <li><a href='/new'>Add Product</a></li>
      <li><a>About</a></li>
    </ul>
  </div>

  <div className='hidden md:block me-1.5 search '>
  <label className="flex items-center gap-2">
  <input type="text" className="px-3 py-1 border" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

</div>
{ authUser ?<Logout></Logout>:<div><a className="bg-red-500 text-white hover:bg-red-400 duration-300 cursor-pointer login" onClick={()=>{document.getElementById('my_modal_2').showModal()}}>Login</a>
    <Login></Login>
</div>}
   
  </div>
</div>
</div>
</>
  )
}

export default Navbar
