import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/products.css";
import Card from './Card';
import axios from "axios";
function Products() {

      const[data,setData] = new useState([]);
      useEffect(()=>{
              const productdata = async()=>{
                try{

                  const res =  await axios.get("http://localhost:8080/product");
                  console.log(res.data);
                  setData(res.data);
                }catch(err){
                      console.log(err);
                }
              };
              productdata();
      },[]);
  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen'>
     <h1 className='heding'>All Products</h1>
     <div className='allproducts'>
        {data.map((alldata,index)=>(
        
            <Card alldata={alldata} key={index}></Card>
         
        ))}
     </div>
    </div>
    <div className='back'>
         <a className='btn bg-red-500 text-white px-8 ' href='/'>Back</a>
    </div>
    <hr></hr>
    <Footer></Footer>
    </>
  )
}

export default Products
