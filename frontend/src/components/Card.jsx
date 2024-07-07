import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Card({alldata}) {

  const navigate = useNavigate();
  const deleteProduct = async(id1)=>{
        
                let id = id1;
               console.log(id);
                  await axios.delete(`http://localhost:8080/deleteUser/${id}`)
                  .then((res)=>{
                      console.log(res.data);
                      if(res.data)
                      {
                          toast.success("Delete Successfully");
                          navigate("/");
                      }
                  })
                  .catch((err)=>{
                      if(err.response){
          
                        toast.error(err.response.data.massege);
                      }
                  });
  }


const updateProduct = async(id2)=>{
        
  let id = id2;
  console.log(id);
    await axios.get(`http://localhost:8080/update/${id}`)
    .then((res)=>{
        console.log(res.data);
        if(res.data)
        {
            toast.success("Edit Product");
            navigate("/update",{state:{
              _id:res.data.user._id,
              image:res.data.user.image,
              name:res.data.user.name,
              price:res.data.user.price,
              type:res.data.user.type,
              discription:res.data.user.discription,
              category:res.data.user.category
            }});
        }
    })
    .catch((err)=>{
        if(err.response){

          toast.error(err.response.data.massege);
        }
    })
  };


  const showProduct = async(id3)=>{
        
    let id = id3;
    console.log(id);
    
      await axios.get(`http://localhost:8080/show/${id}`)
      .then((res)=>{
          console.log(res.data);
          if(res.data)
          {
              toast.success("Show Product Details");
              navigate("/show",{state:{
                _id:res.data.showdata._id,
                image:res.data.showdata.image,
                name:res.data.showdata.name,
                price:res.data.showdata.price,
                type:res.data.showdata.type,
                discription:res.data.showdata.discription,
                category:res.data.showdata.category
              }});
          }
      })
      .catch((err)=>{
          if(err.response){
  
            toast.error(err.response.data.massege);
          }
      })
    };


  return (
    
             <div className="card bg-base-100 w-80 shadow-xl mt-8 mb-8 border pk" onClick={()=>showProduct(alldata._id)}>
                    <figure>
                    <img className='img w-[100%] h-[200px]' 
                        src={alldata.image}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                         <h2 className="card-title">
                         {alldata.name}
                        
                        </h2>
                        <div className='badge  py-3 px-4 bg-yellow-500 text-white'><b>${alldata.price}</b></div>
                        <p>{alldata.discription}</p>
                        <p>{alldata.type}</p>
                        <div className="card-actions justify-between">
                        <div className="badge badge-outline py-3 px-4" onClick={()=>deleteProduct(alldata._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></div>
                        <div className="badge badge-outline  hover:bg-red-700 hover:text-white py-3 duration-300 cursor-pointer m-start px-4 " onClick={()=>updateProduct(alldata._id)}>Edit</div>
                        </div>
                        </div>
                    </div>
                   
    
  )
}

export default Card
