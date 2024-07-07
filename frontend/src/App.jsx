import React from 'react'
import Home from './home/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Products from './components/Products'
import Signup from './components/Signup'
import { useAuth } from "./context/Autho";
import toast, { Toaster } from 'react-hot-toast';
import Newproduct from './components/Newproduct'
import Updateform from './components/Updateform'
import Showproduct from './components/Showproduct'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  const[authUser,setAuthUser] = useAuth();
  console.log(authUser);

  return (
   <>
       <Navbar></Navbar>
        <Routes>
          <Route path='/' element = {<Home></Home>}></Route>
          <Route path='/product' element = { authUser ? <Products></Products> :<Navigate to={"/signup"}></Navigate>}></Route>
          <Route path='/signup' element = {<Signup></Signup>}></Route>   
          <Route path='/new' element = {<Newproduct></Newproduct>}></Route>   
          <Route path='/update' element = {<Updateform></Updateform>}></Route> 
          <Route path='/show' element = {<Showproduct></Showproduct>}></Route>    

        </Routes>
        <Toaster />
        
   </>
  )
}

export default App
