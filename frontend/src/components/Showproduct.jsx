import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/show.css";
function Showproduct() {
  
    const iddata = useLocation();
    console.log(iddata);
    return (
    <>
            <div className='show'>
                <div className=" inner1">
                   <figure className='fig'>
                       <img className='border'
                         src={iddata.state.image}
                          alt="Album" />
                          </figure>
                </div>
                <div className="card-body inner2">
                    <h2 className="card-title text-3xl">Name : &nbsp;{iddata.state.name}</h2><hr></hr><br></br>
                    <p className='text-xl'><b>Discription :</b> &nbsp;{iddata.state.discription}</p>
                    <p className='text-xl'><b>Price :</b> &nbsp;{iddata.state.price}	
                    &#8377;</p>
                    <p className='text-xl'><b>Type :</b> &nbsp;{iddata.state.type}</p>
                    <p className='text-xl'><b>Category :</b> &nbsp;{iddata.state.category}</p>
                    <div className="card-actions justify-end">

                  <a href="/product"> <button className="btn btn-error text-white">Back</button></a>
                   </div>
                </div>

            </div>
            


    </>
  )
}

export default Showproduct;