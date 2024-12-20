

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from  "axios"
import { useNavigate ,Link } from "react-router-dom";


const Profile = () => {



  const[userdata ,setUserData] = useState([])

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
  
  };
const [userProfile,setuserProfile] = useState();
  useEffect(()=>{
    const email= localStorage.getItem('lmsweb_email');
    let p_email =email && JSON.parse(email); 
    // setuserProfile({...userProfile, p_email});
  
    const uname = localStorage.getItem('lmsweb_username');
    let user_name = uname && JSON.parse(uname); 
    setuserProfile({...userProfile, user_name,p_email})
  
  },[])
  // console.log("userProfile==",userProfile)

  const userId = localStorage.getItem("lmsweb_uId");


  useEffect(()=>{
    getCourseData()
  },[])

 const getCourseData =async()=>{
  try{
    
    let result = await axios.get(`http://localhost:5000/getone-user-course/${userId}`)
    if(result){
      setUserData(result.data)
      
    }
  }catch(error){
    console.log(error)
  }
 }

 const handleDelete =async(courseId)=>{
  try{
    let result = await axios.delete(`http://localhost:5000/delete-user-course/${courseId}`)
    if(result){
      alert(result.data.message)
      getCourseData()
    }
  }
  catch(error){
    console.log(error)
  }
 }




  return (
    <div className="max-w-4xl mb-20 mx-auto bg-white shadow-lg rounded-lg p-8 mt-20">
      {/* Profile Header */}
     
      <div className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800"> <b>Name:</b> {userProfile?.user_name}</h1>
        <p className="text-lg text-gray-500 mt-2"><b>Email:</b> {userProfile?.p_email}</p>
      </div>

      {/* Courses Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Courses</h2>
        <ul className="space-y-4">
          {userdata.map((course) => (
            <li
              key={course._id}
              className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-sm"
            >
              <span><img src={`http://localhost:5000/uploads/${course.photo}`} alt="" className="w-14 h-14 rounded-full border-2 p-1 border-[#a8a8a8] " /></span>
              <span className="font-medium text-gray-700">{course.name}</span>
              <span className="text-gray-600">{course.price}</span>
              <div>
                <Link to={`/update-user/${course._id}`}>        
                 <FontAwesomeIcon icon={faEdit} className="text-[#7b4695] hover:text-[#502964] pr-4 cursor-pointer"  />
                </Link>
              <FontAwesomeIcon icon={faTrash} className="text-red-500 hover:text-red-700 cursor-pointer" onClick={()=>handleDelete(course._id)}/>
              </div>
           
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

