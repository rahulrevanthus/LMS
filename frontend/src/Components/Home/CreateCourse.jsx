import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {

  const navigate =  useNavigate()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault();

    let userId = localStorage.getItem("lmsweb_uId")

    // Prepare the form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("userId", userId);

    if(photo) formData.append("photo", photo);

    try {
      // Send the form data to the server
      const response = await axios.post("http://localhost:5000/create-course/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response);
      alert("Data submitted successfully!");
      setName("")
      setDescription("")
      setPrice("")
      setPhoto("")
      navigate("/")

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting data.");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center ">
      <div className="container max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Submit Your Details</h2>
        <form className="flex flex-col gap-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Write Course name"
            className="border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-transparent"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Write your price"
            className="border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-transparent"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a description"
            className="border border-gray-300 px-4 py-3 h-24 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-transparent resize-none"
          ></textarea>
          <input
           
            onChange={(e) => setPhoto(e.target.files[0])}
            type="file"
            className="border border-gray-300 px-4 py-3 rounded-lg text-gray-700 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-[#4D2C5E] hover:file:bg-[#3b2549] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#4D2C5E] text-white font-semibold rounded-lg hover:bg-[#3b2549] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4D2C5E]"
          onClick={handleSubmit}
       >
            Send
          </button>
           <img src={photo} alt="" />
        </form>
      </div>
    </div>

  )
}

export default CreateCourse
