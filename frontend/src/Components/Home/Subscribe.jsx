import React from 'react'
import backinputimage from "../../assets/Images/input-back.svg"

const Subscribe = () => {
  return ( 
    <div className='container' >
        <div className=" ">
        <div className='   mt-[60px]'  style={{
        backgroundImage: `url(${backinputimage})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: "454px", 
        display: "flex", 
        flexDirection:"column",
        justifyContent: "center", 
        alignItems: "center"
      }}>
          <div>
            <h1 className='text-[40px] font-semibold text-white text-center'>Subscribe to our newsletter</h1>
            <p className='text-xl font-medium text-white text-center'>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
          <div className='flex justify-center items-center pt-[45px]'>
            <div >
            <input type="text" placeholder='Email Address' className=' text-[20px] font-medium border rounded-full pl-6 py-5 w-[610px]' />
            <button className='text-xl font-medium text-white py-4 bg-[#FF7426] px-[70px]  rounded-full'>Send</button>
            </div>
          </div>
        </div>
     
       </div>
    </div>
  )
}

export default Subscribe
