import React from 'react'
import "../styles/signup.css"
import { Link } from 'react-router-dom'
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Newproduct() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data)=>{
        const productdata = {
            image:data.image,
            name:data.name,
            price:data.price,
            type:data.type,
            discription:data.discription,
            category:data.category
        }

        await axios.post("http://localhost:8080/create",productdata)
        .then((res)=>{
            console.log(res.data);
            if(res.data)
            {
                toast.success("Product Created Successfully");
                navigate("/product");
            }
        })
        .catch((err)=>{
            if(err.response){
              toast.error(err.response.data.massege);
            }
        });
    }
  return (
      <>
        <div className='signup'>


            <div className='border rounded p-8 shadow-md maincard  mt-12'>
                    <div className='flex justify-between'>
                    <h3 className='mb-4 font-semibold'>New Product</h3>
                    <Link to={"/"}> <button className='mb-8 font-semibold hover:text-red-500'>✕</button></Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label for="image">Image Link:</label><br></br>
            <input type='text ' placeholder='Enter Your Image Link' name='image' className='border rounded-md outline-none w-80 px-3 py-1'
            {...register("image", { required: true })}
             ></input>
            </div>
            {errors.image && <span className='text-red-500'>Plese Enter Your Image Link</span>}
            <br></br>

            <div>
        <label for="name" >Name:</label><br></br>
            <input type='text ' placeholder='Enter Your Name' name='name' className='border rounded-md outline-none w-80 px-3 py-1'
         {...register("name", { required: true })}
        ></input>
        </div>
        {errors.name && <span className='text-red-500'>Plese Enter Your Email</span>}
        <br></br>

        <div>
        <label for="price" className='mt-2'>Price:</label><br></br>
        <input type='text' placeholder='Enter Product Price' name='price' className='border rounded-md outline-none w-80 px-3 py-1'
     {...register("price", { required: true })}
    ></input>
    </div>
    {errors.price && <span className='text-red-500'>Plese Enter Your Price</span>}<br></br>

    <div>
        <label for="type" className='mt-2'>Type:</label><br></br>
        <input type='text' placeholder='Enter Product Type' name='type' className='border rounded-md outline-none w-80 px-3 py-1'
     {...register("type", { required: true })}
    ></input>
    </div>
    {errors.type && <span className='text-red-500'>Plese Enter Your Product Type</span>}<br></br>


    <div>
        <label for="discription" className='mt-2'>Discription:</label><br></br>
        <input type='text' placeholder='Enter Product Type' name='discription' className='border rounded-md outline-none w-80 px-3 py-1'
     {...register("discription", { required: true })}
    ></input>
    </div>
    {errors.discription && <span className='text-red-500'>Plese Enter Your Product Discription</span>}<br></br>

    <div>
        <label for="category" className='mt-2'>Category:</label><br></br>
        <input type='text' placeholder='Enter Product Category' name='category' className='border rounded-md outline-none w-80 px-3 py-1'
     {...register("category", { required: true })}
    ></input>
    </div>
    {errors.category && <span className='text-red-500'>Plese Enter Your Product Category</span>}<br></br>


    

    <div className='btns'>
        <button className='bg-red-500 text-white p-1 px-4 rounded'>Submit</button>
    </div>
</form>                          
</div>
</div>
</>
  )
}

export default Newproduct