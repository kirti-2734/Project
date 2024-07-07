import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import "../styles/freeproduct.css"
import axios from "axios";

function Freeproduct() {

  const[datanew,setData] = new useState([]);
  useEffect(()=>{
          const productdata1 = async()=>{
            try{

              const res =  await axios.get("http://localhost:8080/product");
              console.log(res.data);
              setData(res.data);
            }catch(err){
                  console.log(err);
            }
          };
          productdata1();
  },[]);
    const alldata = datanew.filter((data1)=>data1.category==="free");
  return (
   <>
    <div className='container mx-auto max-w-screen-2xl px-4  md:px-20 '>
        <h1 className='font-semibold text-xl pb-2'>Free offered products</h1>
        <p>"ShopGalaxy""Discover Infinite Choices at ShopGalaxy: Your Universe of Products"</p>
           <div className="productCard">
            {alldata.map((alldata)=>(
              
                   <Card alldata={alldata}></Card>
             
            ))}  
           </div>
    </div>
</>
  )
}

export default Freeproduct
