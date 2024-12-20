import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Loginpage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async() => {
        try {

            if(email && password){
                const info = {email,password}

                const data = await axios.post("http://localhost:5000/login/", info)
                if (data.ok) {
                    localStorage.setItem({"userId":data.data.User._id,"auth": data.data.auth})
                    navigate("/")
                }else{
                    console.log(data)
                }
               
                setEmail("")
                setPassword("")
            }
            else{
                 alert("write password and email")
            }
          
            
        }
        catch (error) {
            alert(error.response.data)
        }
    }

  return (
//     <div className='container'>
//     <div className='flex flex-col  gap-5 justify-center items-center  py-10 '>
//     <input type="text" placeholder='write email' value={email} onChange={(e) => setEmail(e.target.value)}           className='border border-[#4D2C5E] pl-3 py-2'/>
//     <input type="text" placeholder='write password' value={password} onChange={(e) => setPassword(e.target.value)}  className='border border-[#4D2C5E] pl-3 py-2'/>
//     <div>           
//          <button onClick={handleSubmit} className=' border bg-[#4D2C5E] px-4 py-2 rounded text-white'>Login</button>
//     </div>
//     </div>

// </div>
<div className="min-h-screen flex items-center justify-center bg-[#fdfaff]">
  <div className="bg-white border shadow-lg rounded-lg p-8 w-full max-w-sm">
    <h2 className="text-2xl font-semibold text-[#4D2C5E] text-center mb-6">
      Welcome Back
    </h2>
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-[#4D2C5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-[#4D2C5E]"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-[#4D2C5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-[#4D2C5E]"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-[#4D2C5E] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#3C204B] focus:outline-none focus:ring-2 focus:ring-[#4D2C5E]"
      >
        Login
      </button>
    </div>
    <p className="text-center text-gray-500 text-sm mt-4">
      Don't have an account?{' '}
      <a href="#" className="text-[#4D2C5E] hover:underline" onClick={()=> navigate("/signup")}>
        Sign Up
      </a>
    </p>
  </div>
</div>

  )
}

export default Loginpage
