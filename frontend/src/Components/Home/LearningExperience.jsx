import React from 'react'
import preminum from "../../assets/Images/preminum.svg"
import heart from "../../assets/Images/hearts.svg"
import jigsaw from "../../assets/Images/jigsaw.svg"

const LearningExperience = () => {
  return (
    <div className='container'>
        <div className='bg-[#FDF8EE] flex  px-20 justify-center gap-20 items-center'>
        <div><img src={preminum} alt="" className='w-[516px] py-10' /></div>
        <div className=''>
            <div className='text-[69px] font-extrabold leading-[120%] pb-[46px]'>Premium  <span className='text-[#FF7426]'>Learning
            Experience</span></div>
            <div className='flex gap-5 pb-6 '>
                <div className='border bg-[#4D2C5E] rounded-[23px] flex justify-center items-center p-4'>
                    <img src={heart} alt="" />
                </div>
                <div>
                    <p className='text-[30px] font-medium text-[#050C26]'>Easily Accessible</p>
                    <p className='text-[#8A8A8A] text-[24px] font-medium'>Learning Will fell Very Comfortable With Courslab.</p>
                </div>
            </div>
            <div className='flex gap-5' >
            <div className='border bg-[#4D2C5E] rounded-[23px] flex justify-center items-center p-4'><img src={jigsaw} alt="" /></div>
                <div>
                    <p className='text-[30px] font-medium text-[#050C26]'>Fun learning expe</p>
                    <p className='text-[#8A8A8A] text-[24px] font-medium'>Learning Will fell Very Comfortable With Courslab.</p>
                </div>
            </div>
        </div>
        </div>
      
      
    </div>
  )
}

export default LearningExperience
