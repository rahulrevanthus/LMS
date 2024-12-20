import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = (props) => {
  const {setupdateNavigation, updateNavigation} = props;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async() => {
    try {
        const info ={name,email,password}
        const data = await axios.post("http://localhost:5000/signup/", info)
        if (data) {
          setupdateNavigation(!updateNavigation);
            console.log("data has been send", data)
            localStorage.setItem('lmsweb_uId', JSON.stringify(data.data.result._id));
            localStorage.setItem('lmsweb_email', JSON.stringify(data.data.result.email));
            localStorage.setItem('lmsweb_username', JSON.stringify(data.data.result.name));
            
            setName("")
            setEmail("")
            setPassword("")
            navigate("/")
            toast.success("You signed in successfully")
        }
        
    }
    catch (error) {
        console.log(error)
    }
}

  return (
 
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaff] border">
  <div className="bg-white border shadow-xl rounded-lg p-8 w-full max-w-sm">
    <h2 className="text-2xl font-semibold text-[#4D2C5E] text-center mb-6">
      Create Your Account
    </h2>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-[#4D2C5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-[#4D2C5E]"
      />
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
        Sign Up
      </button>
    </div>
    <p className="text-center text-gray-500 text-sm mt-4">
      Already have an account?{' '}
      <a href="#" className="text-[#4D2C5E] hover:underline" onClick={()=> navigate("/login")}>
        Log in
      </a>
    </p>
  </div>
</div>

  );
};

export default Signup;
