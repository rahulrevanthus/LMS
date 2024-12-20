import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'; 
import "../../assets/style/CardsDetails.css";
import ReactStars from "react-rating-stars-component";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { toast } from "react-toastify";
import axios from 'axios';

const CardsDetails = () => {
    const { state } = useLocation();
    const { name, price, photo, index ,description,course_id} = state || {};

    const  navigate =  useNavigate()
    const handleBack =()=>{
        navigate(-1); 
    }

    const [userId, setUserId] = useState(() => localStorage.getItem('lmsweb_uId') );
    const [userName, setUserName] = useState(() => localStorage.getItem('lmsweb_username') );

useEffect(()=>{
  const id= localStorage.getItem('lmsweb_uId');
  let parsedData = JSON.parse(id); 
  setUserId(parsedData);

  const user_name = localStorage.getItem('lmsweb_username');
  setUserName(user_name)

},[course_id,state])

console.log("course_id===-=-",course_id,"====",userId)

    const [reviewForm,setreviewForm] = useState({});

    const [updateReviewList,setupdateReviewList] = useState(false);
  
    const handleReviewChange=(e)=>{
      const {name,value} = e.target;
      setreviewForm({...reviewForm, [name]: value})
    }
    const ratingChanged = (newRating) => {
      console.log("newRating",newRating);
      setreviewForm({...reviewForm, "rating": newRating})
    };
console.log("reviewForm==",reviewForm);

    const handleSubmitReview = async ()=>{
      if(!reviewForm.rating || !reviewForm.comment ){
        toast.warning("Fill review details properly")
      }else{
        const courseId = course_id;
const formdata = {...reviewForm , courseId , userId,userName }

console.log("reviewForm=====",formdata)

try {
 
  const data = await axios.post("http://localhost:5000/reviews/", formdata)
  if (data) {
      console.log("data has been send", data)
      setupdateReviewList(!updateReviewList)
      toast.success("You give review successfully")
  }
  
}
catch (error) {
  console.log(error)
}


      }

    }

const [reviewList,setreviewList] = useState([]);
    const getALLREviewsList = async () => {
      try {
        const courseId = course_id;
          const result = await axios.get(`http://localhost:5000/reviews/${courseId}`);
         console.log("result==",result)
         setreviewList(result.data)
      } catch (error) {
          console.log(error);
      }
  };
    useEffect(()=>{
      getALLREviewsList()
    },[updateReviewList])

    const formatDate = (isoDate) => {
      const date = new Date(isoDate);
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);
    };

  return (
    <div className="details-container">
    <div className="details-card">
              <button className="details-back-button m-[20px] w-[200px]" onClick={handleBack}>Back</button>
      <img src={photo} alt={name} className="details-image object-cover" />
      <div className="details-content">
        <h1 className="details-title">{name}</h1>
        <p className="details-price">Price: <span>{price}</span></p>
        <p className="pb-3 text-lg">{description}</p>


<h1 className='text-[24px] font-semibold  '>Give Review</h1>

<div className='flex flex-col w-[350px] gap-[12px] '>
  <label htmlFor="">Rating</label>
  {/* <input type="number" className='border border-gray-400' name='rating' onChange={handleReviewChange} /> */}
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={50}
    activeColor="green"
  />
  <label htmlFor="">Comments</label>
  <textarea rows={4} id="" className='border border-gray-400' name='comment' onChange={handleReviewChange} ></textarea>

  <button className="details-back-button m-[20px] w-[200px]" onClick={handleSubmitReview}>Submit</button>
 

</div>

<div className="course_reviews">
  
<h2 className='text-[24px] font-semibold mb-[12px] '>Course Reviews</h2>

<div className="flex flex-wrap gap-[18px]">
{ reviewList && reviewList.length > 0 ? 
  reviewList.map((value,index)=>{
    return(
<div className="review_card border border-gray-400 rounded p-[10px] w-[calc(50%-14px)] ">
 {value.userName &&  <p><b>Name: </b>  {value.userName}  </p> }
  <p> <b>Comment:</b> {value.comment} </p>
 
  <ReactStars
    count={5}
    value={value.rating}
    size={24}
    isHalf={true}
    activeColor="green"
    color="yellow"
    emptyIcon={<StarBorderIcon/>}
    halfIcon={<StarHalfIcon/>}
    filledIcon={<StarIcon/>} 
    edit={false}
  />

<p><b>{formatDate(value.createdAt)}</b></p>

</div>
    )
  }) : <div><h2>No Reviews found</h2></div>
}

</div>

</div>

      </div>
    </div>
  </div>
  )
}

export default CardsDetails
