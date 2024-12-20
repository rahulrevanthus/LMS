import React, { useEffect, useState } from 'react'
import logo from "../../assets/Images/logo.svg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";




const Navigation = (props) => {

  const {updateNavigation, setupdateNavigation} = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const [data, setData] = useState(() => localStorage.getItem('lms_email') || '');


const updateLocalStorage = (newData) => {
  localStorage.setItem('lms_email', newData);
  setData(newData); 
};


// Toggle the dropdown menu
const handleUserSetting = () => {
  setIsDropdownOpen(!isDropdownOpen);
};

const handleLogout = () => {
  // console.log("User logged out");
  localStorage.setItem('lmsweb_email', "");
  localStorage.setItem('lmsweb_uId', "");
  setupdateNavigation(!updateNavigation)
  // setData(newData); 
  // Add your logout logic here
};

const [userProfile,setuserProfile] = useState();
  useEffect(()=>{
    const email= localStorage.getItem('lmsweb_email') ;
    let p_email = email ? JSON.parse(email) : ""; 
    // setuserProfile({...userProfile, p_email});
  
    const u_id = localStorage.getItem('lmsweb_uId');
    let profile_id = u_id ? JSON.parse(u_id) : ""; 
    setuserProfile({...userProfile, profile_id,p_email})
  
  },[updateNavigation])


  return (
    <div className="container bg-[#FDF8EE] py-4">
    <div className='flex justify-between items-center mx-20 '>
    <div><img src={logo} alt="" className='w-[58px] h-[51px]'/></div>
    <div className=''>
      <ul className='flex justify-between items-center gap-10'>
        <li className='text-[#1D1D1D] text-lg font-semibold'><Link to={"/"}>Home</Link></li>
          {/* <li className='text-[#1D1D1D] text-lg font-semibold'><Link onClick={()=>updateLocalStorage("")}>Logout</Link></li> */}
       {
        userProfile?.p_email && userProfile?.profile_id ? <>
          <li className='text-[#1D1D1D] text-lg font-semibold'><Link to={"/create-course"}>CreateCourse</Link></li>
      
            <li className='flex gap-[4px] '>
            <Link to={"/user-profile"}> <button className='w-10 h-10 border text-white bg-[#4D2C5E] font-semibold rounded-full' >
              <img src="/man.png" alt="" />
            </button>
            </Link>
            <button> <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 pl-2  text-lg" onClick={handleUserSetting}/>
            </button>
          </li>
         
      {isDropdownOpen && (
        <div className="absolute right-0 mt-44 w-48 bg-white border rounded-lg shadow-lg">
          <ul className="py-2">
            
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#ede8ef]"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
        </> : <>
        <li className='text-[#1D1D1D] text-lg font-semibold'><Link to={"/signup"}>Signup</Link></li>

<li><button className='border px-14 py-[10px] text-[#FFFFFF]  bg-[#4D2C5E] text-xl font-medium rounded-[218px]'><Link to={"/login"}>Login</Link></button></li>

        </>
       }
 
     
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Navigation;
