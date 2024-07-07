import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data)=>{
            const loginuser = {
              email:data.email,
              password:data.password,
            };

            await axios.post("http://localhost:8080/login",loginuser)
            .then((res)=>{
              if(res.data)
              {
                toast.success("Login Successfully");
                navigate("/");
                setTimeout(()=>{
                  window.location.reload();
                },2000);
                localStorage.setItem("Users",JSON.stringify(res.data.user));
                
              }
              
            }).catch((err)=>{
              if(err.response){

                toast.error(err.response.data.massege);
              }
             

            })

  };

  return (
    <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
        
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        {/* if there is a button in form, it will close the modal */}
            <a href='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
        <h3 className="font-bold text-lg">Login</h3>
        <div>

        <label className="input input-bordered flex items-center gap-2 mt-4 mb-4">
            <svg
                 xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                className="h-4 w-4 opacity-70">
             <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
             <path
                 d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
             </svg>
            <input type="text" className="grow" placeholder="Email" name='email'
                 {...register("email", { required: true })}
            />
            </label>
            {errors.email && <span className='text-red-500'>Plese Enter Email</span>}

            <label className="input input-bordered flex items-center gap-2 mt-4 mb-4">
            <svg
                 xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                className="h-4 w-4 opacity-70">
             <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
             </svg>
            <input type="password" className="grow" placeholder="Password"  name='password'
                  {...register("password", { required: true })}
            />
            </label>
            {errors.password && <span className='text-red-500'>Password field is required</span>}
            <div className='flex justify-between mt-4'>
            
                <button className='bg-red-500 text-white p-1 px-4 rounded'>Login</button>
             
                <p>Not registered ? <span className='underline text-blue-500'><a href='/signup' >Signup</a></span></p>
            </div>
        </div>
        </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
