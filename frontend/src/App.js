// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Home/Navigation.jsx';
import Footer from './Components/Home/Footer.jsx';
import Signup from './Pages/Signup.jsx';
import Loginpage from './Pages/Loginpage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CreateCourse from '../src/Components/Home/CreateCourse.jsx';
import CardsDetails from './Components/cards/CardsDetails.jsx';
import Profile from './Components/Home/Profile.jsx';
import UpdateCourse from './Components/Home/UpdateCourse.jsx';
import { useState } from 'react';

function App() {

 const [updateNavigation,setupdateNavigation] = useState(false);


  return (
    <>
      <BrowserRouter>
        <Navigation setupdateNavigation={setupdateNavigation} updateNavigation={updateNavigation} />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup setupdateNavigation={setupdateNavigation} updateNavigation={updateNavigation} />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/create-course' element={<CreateCourse />} />
          <Route path="/details" element={<CardsDetails />} />
          <Route path='/user-profile' element={<Profile/>}/>
          <Route path='/update-user/:id' element={<UpdateCourse/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
