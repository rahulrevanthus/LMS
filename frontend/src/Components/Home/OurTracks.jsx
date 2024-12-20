import React from 'react'
import uiimage1 from "../../assets/Images/uiuxdesign1.svg"
import uiimage2 from "../../assets/Images/uiuxdesign2.svg"
import uiimage3 from "../../assets/Images/uiuxdesign3.svg"
import stars from "../../assets/Images/starts.svg"
import Cards from '../cards/Cards'
import {useEffect,useState} from "react"

import { useNavigate } from 'react-router-dom';
import axios from "axios"


const OurTracks = () => {

const [cards, setCards]= useState([])

   
    useEffect(()=>{
        getCourseDetails()
    },[]);


    const getCourseDetails = async () => {
        try {
            const result = await axios.get("http://localhost:5000/get-course-route/");
            const modifiedData = result.data.map(course => ({
                ...course,
                photo: `http://localhost:5000/uploads/${course.photo}`
            }));
            setCards(modifiedData);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='container'>
            <div className='pt-[95px]'>
                <div className='text-center text-[50px] font-bold'>Courses</div>
                <p className='text-center text-xl font-medium text-[#8A8A8A] pb-[65px] '>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className='flex flex-wrap mx-12 gap-5 items-center pb-[126px]'>
                {
                    cards.map((data,index) =>(
                        <Cards index={index} price={data.price} name={data.name} photo={data.photo} description={data.description} course_id={data._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurTracks


