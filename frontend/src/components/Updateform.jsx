import React, { useState } from 'react'
import "../styles/signup.css"
import { Link, useLocation } from 'react-router-dom'
import Login from './Login'
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Updateform() {

   const navigate = useNavigate();
   const iddata = useLocation();
  
    
   const[id,setId] = useState(iddata.state._id);
   const[input,setInput] = useState({image:iddata.state.image, name:iddata.state.name, price:iddata.state.price,type:iddata.state.type, discription:iddata.state.discription, category:iddata.state.category});
   let handelInput =  (event)=>{

       let fielName = event.target.name;
       let newVal = event.target.value;
       setInput((input)=>{
       return {...input,[fielName]:newVal}});
       
   }

    const onSubmit = async(event)=>{
        event.preventDefault();
            setInput({
                image:"",
                name:"",
                price:"",
                type:"",
                discription:"",
                category:""
            });
            console.log(input);

            
        await axios.put(`http://localhost:8080/update/new/${id}`,input)
        .then((res)=>{
            console.log(res.data);
            if(res.data)
            {
                toast.success("Product Updated Successfully");
                navigate("/product");
            }
        })
        .catch((err)=>{
            if(err.response){
              toast.error(err.response.data.massege);
            }
        });
    };

    
  return (
    <>
            <div className='signup'>
                <div className='border rounded p-8 shadow-md maincard'>
                    <div className='flex justify-between'>
                    <h3 className='mb-4 font-semibold'>Edit Product</h3>
                    <Link to={"/"}> <button className='mb-8 font-semibold hover:text-red-500'>✕</button></Link>
                </div>

            <form onSubmit={onSubmit}>
                <div>
                        <label for="image">Image Link:</label><br></br>
                        <input type='text ' placeholder='Enter Your Image Link' name='image' value={input.image} onChange={handelInput} className='border rounded-md outline-none w-80 px-3 py-1' ></input>
                        </div>
                        <br></br>

                        <div>
                        <label for="name" >Name:</label><br></br>
                        <input type='text ' placeholder='Enter Your Name' name='name' value={input.name} className='border rounded-md outline-none w-80 px-3 py-1' onChange={handelInput}
                       ></input>
                        </div>
                        <br></br>

                        <div>
                        <label for="price" className='mt-2'>Price:</label><br></br>
                        <input type='text' placeholder='Enter Product Price' name='price'value={input.price} className='border rounded-md outline-none w-80 px-3 py-1' onChange={handelInput}
                        ></input>
                        </div>
                       <br></br>

                        <div>
                        <label for="type" className='mt-2'>Type:</label><br></br>
                        <input type='text' placeholder='Enter Product Type'name='type' value={input.type} className='border rounded-md outline-none w-80 px-3 py-1' onChange={handelInput} ></input>
                        </div>
                        <br></br>

                        <div>
                        <label for="discription" className='mt-2'>Discription:</label><br></br>
                        <input type='text' placeholder='Enter Product Type' name='discription' value={input.discription} className='border rounded-md outline-none w-80 px-3 py-1' onChange={handelInput}></input>
                        </div>
                       <br></br>

                        <div>
                        <label for="category" className='mt-2'>Categoty:</label><br></br>
                        <input type='text' placeholder='Enter Product Category' name='category' value={iddata.state.category} className='border rounded-md outline-none w-80 px-3 py-1' onChange={handelInput}></input>
                        </div>
                       <br></br>

                        <div className='btns'>
                        <button className='bg-red-500 text-white p-1 px-4 rounded'>Submit</button>
                        </div>
                </form>                          
            </div>
            </div>
    </>
  )
}

export default Updateform