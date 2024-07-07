import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/Autho'
import { Navigate } from 'react-router-dom';
function Logout() {

    const[authUser,setAuthUser] = useAuth();
    const handlelogout = ()=>{

        try{

            setAuthUser({
                ...authUser,
                user:null
            })

            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(()=>{
                window.location.reload();
              },1000);

        }catch(err){

                // toast.error("Error:" +err.message);
                console.log(err);

        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor pointer text-[12px]' onClick={handlelogout} >Logout</button>
    </div>
  )
}

export default Logout