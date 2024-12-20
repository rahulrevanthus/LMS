import React from 'react'

import stars from "../../assets/Images/starts.svg"
import CardsDetails from './CardsDetails'
import { useNavigate } from 'react-router-dom';


const Cards = ({ name, price, photo, index ,description,course_id }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate('/details', {
          state: { name, price, photo, index ,description,course_id}
        });
      };
      console.log(photo)
    return (
        <div key={index} >
            <div className='border rounded-lg px-3 pt-3'>
                <div className='rounded w-[430px] h-[238px] '><img src={photo} alt="" className=' w-full h-full' /> </div>
                <div className='mt-1 mb-7'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-medium text-[#8d8c8c]'>{name}</p>
                        <img src={stars} alt="" />
                    </div>
                    <p className='text-xl  font-medium '>Price : {price}</p>
                </div>
            </div>
            <button className='border font-medium text-[22px] rounded-full mt-[-16px] ml-[130px] py-2 px-8 bg-[#FF7426] text-[#FFFFFF] '  onClick={handleViewDetails}>View Details</button>
        </div>
    )
}

export default Cards
