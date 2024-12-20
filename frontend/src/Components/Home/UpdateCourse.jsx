import React, { useState ,useEffect} from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourse = () => {
    let navigate = useNavigate()


    const { id } = useParams();
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleUpdate = async () => {
        
        try {
            let result = await axios.put(`http://localhost:5000/update-user-course/${id}`,{ name, price })
            if (result) {
                setName(" ")
                setPrice(" ")
                alert(result.data.message)
                navigate("/user-profile")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCourseData()
    }, [])

    const getCourseData = async () => {
        try {

            let result = await axios.get(`http://localhost:5000/get-oneuser-coursebyid/${id}`)
            if (result) {
                console.log(result)
                setName(result.data[0].name)
                setPrice(result.data[0].price)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div class="max-w-md mx-auto my-20 bg-white shadow-lg rounded-lg p-6">
            <form>

                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                       
                        placeholder="Enter name"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-[#4D2C5E]"
                    />
                </div>
                <div class="mb-4">

                    <label for="price" class="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                      
                        placeholder="Enter price"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:border-[#4D2C5E]"
                    />
                </div>


                <button
                    type="button"
                    class="w-full bg-[#4D2C5E] text-white font-medium py-2 rounded-md hover:bg-[#3B2148] focus:outline-none focus:ring-2 focus:ring-[#4D2C5E] focus:ring-offset-2"
                  onClick={handleUpdate}
                >
                    Update
                </button>
            </form>
        </div>


    )
}

export default UpdateCourse
