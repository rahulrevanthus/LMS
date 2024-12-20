// import axios from "../axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const userLogin = createAsyncThunk(
//   "auth/signup",
//   async ({ formData, navigate }, { rejectWithValue }) => {
//     try {
//     //   const config = {
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //   };
//       const  data  = await axios.post("/signup", formData);
//       // console.log("data==####",data);
//       if (data.data.auth) {
//         // console.log("data==####$$$$$$$$$$$$$$$$$$$$$$",data.data.result);
//         localStorage.setItem("lmsweb_uId", data.data.result._id);
//         // localStorage.setItem("star_upass", data.password);
//         navigate("/");
//         return data;
//       } else {
//         return rejectWithValue(data.message);
//       }
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );




// export const getUserDetail = createAsyncThunk(
//   "auth/user_detail",
//   async (formData, { rejectWithValue }) => {
//     let sendformData = {};
//     sendformData.user_id = localStorage.getItem("lmsweb_uId");
//     // sendformData.password = localStorage.getItem("star_upass");
//     // console.log("sendformData======%%%%%%%%%%%",sendformData)
//     try {
//       return sendformData;
      
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
