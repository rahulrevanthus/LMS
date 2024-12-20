import React from 'react'
import skills from "../../assets/Images/latest-skills.svg"
import career from "../../assets/Images/caeer.svg"
import certificate from "../../assets/Images/certification.svg"

const LatestSkills = () => {
  return (
    <div  className='container '>
      <div className='bg-[#4D2C5E] flex gap-5 justify-center items-center py-[70px] rounded-2xl mx-20 mt-[-32px]'>
        <div className='flex gap-3 justify-center items-center w-[413px] h-[137px]'>
           <div className='border flex justify-center items-center p-2  rounded bg-white'>
            <img src={skills} alt="" className=' w-[70px] h-[40px]'/>
           </div>
           <div className='pt-[16px] px-3'>
            <div className='text-[28px] font-bold  text-[#FFFFFF]'>Learn The Latest Skills</div>
            <p className='text-[15px] font-medium text-[#B8ABBF]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
           </div>
        </div>
        <div className='flex gap-3 justify-center  items-center w-[418px] h-[137px]'>
           <div className='border flex justify-center items-center p-2  rounded bg-white'>
            <img src={career} alt="" className=' w-[70px] h-[40px]' />
           </div>
           <div className='pt-[16px] px-3'>
            <div className='text-[28px] font-bold  text-[#FFFFFF]'>Get Ready For a Career</div>
            <p className='text-[15px] font-medium text-[#B8ABBF]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
           </div>
        </div>
        <div className='flex gap-3 justify-center items-center w-[413px] h-[137px]'>
           <div className='border flex justify-center items-center p-2  rounded bg-white'>
            <img src={certificate} alt="" className=' w-[70px] h-[40px]'/>
           </div>
           <div className='pt-[16px] px-3'>
            <div className='text-[28px] font-bold  text-[#FFFFFF]'>Earn a Certificate</div>
            <p className='text-[15px] font-medium text-[#B8ABBF]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default LatestSkills
