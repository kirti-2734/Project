import React from 'react'
import "../styles/signup.css"
import { Link } from 'react-router-dom'
import Login from './Login'
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data)=>{

        const userdata = {
            name:data.name,
            email:data.email,
            password:data.password
        }

        await axios.post("http://localhost:8080/signup",userdata)
        .then((res)=>{
            console.log(res.data);
            if(res.data)
            {
                toast.success("Signup Successfully");
            }

            localStorage.setItem("Users",JSON.stringify(res.data.user));
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
            <h3 className='mb-4 font-semibold'>Signup</h3>
            <Link to={"/"}> <button className='mb-8 font-semibold hover:text-red-500'>✕</button></Link>
            </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label for="name">Name:</label><br></br>
            <input type='text ' placeholder='Enter Your Name' name='name' className='border rounded-md outline-none w-80 px-3 py-1'
            {...register("name", { required: true })}
            ></input>
        </div>
        {errors.name && <span className='text-red-500'>Plese Enter Your Name</span>}
        <br></br>

        <div>
            <label for="email" >Email:</label><br></br>
            <input type='text ' placeholder='Enter Your Email' name='email' className='border rounded-md outline-none w-80 px-3 py-1'
             {...register("email", { required: true })}
            ></input>
        </div>
        {errors.email && <span className='text-red-500'>Plese Enter Your Email</span>}
        <br></br>

        <div>
            <label for="password" className='mt-2'>Password:</label><br></br>
            <input type='password ' placeholder='Enter Your Password' name='password' className='border rounded-md outline-none w-80 px-3 py-1'
             {...register("password", { required: true })}
            ></input>
        </div>
        {errors.password && <span className='text-red-500'>Plese Enter Your Password</span>}

        <div className='btns'>
                <button className='bg-red-500 text-white p-1 px-4 rounded'>Signup</button>
                <p  >Have Account ?{" "}
                <button className="underline text-blue-500" onClick={()=>{document.getElementById('my_modal_2').showModal()}}>Login</button>
                </p>
                <Login></Login>
        </div>
    </form>                          
    </div>
    </div>
   </>
  )
}

export default Signup
