import React, { useEffect } from 'react'
import HeroSection from '../Components/Home/HeroSection'
import LatestSkills from '../Components/Home/LatestSkills'
import OurTracks from '../Components/Home/OurTracks'
import LearningExperience from '../Components/Home/LearningExperience'
import Subscribe from '../Components/Home/Subscribe' 
import Quiz from '../Components/Home/Quiz'


const Home = () => {
 


  return (
    <>
     
     <HeroSection/>
     <LatestSkills/>
     <OurTracks/>
     <LearningExperience/>
     <Subscribe/>
     
     <Quiz/>
  
    </>
  )
}

export default Home
