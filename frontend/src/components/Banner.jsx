import React from 'react'
import watch from "../../public/product2.jpg"
import "../styles/banner.css"

function Banner() {
  return (
   <>

        <div className='max-w-screen-2xl flex md:flex-row container md:px-20 mx-auto flex-col px-4'>
            <div className='md:mt-32 mt-12 order-2 md:order-1'>
            <div className='div1 '>
                        <h1 className='text-4xl font-bold'>Hello, welcomes to {""}<span className="text-red-500">ShopGalaxy</span></h1><br></br>
                        <p className='text-xl '>
                        "Discover the Latest in Electronics",  Find the newest gadgets and devices to keep you ahead of the curve. Shop our selection of cutting-edge technology today....!!
                        </p>


                        <label className="input input-bordered flex items-center gap-2 mt-8">
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
                                    <input type="text" className="grow" placeholder="Email" />
                            </label><br></br>
                            
                        <button className="btn btn-error text-white mt-4">Primary</button>
            </div>
            </div>
            <div className='div2 order-1'>
                        <img src={watch} alt='not visible' className='imggg'></img>
            </div>
        </div>
   </>
  )
}

export default Banner
