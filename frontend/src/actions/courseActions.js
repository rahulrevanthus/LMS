import axios from "../axios";

export const asyncAddNewCourse = async (formData,file, navigate) => {
  try {

    // const data = { 
    //      name : formData.name,
    //      description : formData.description,
    //      price: formData.price,
    //     photo: file
    // }

    const url = "/create-course";

 
    

    // await axios.post(url,{
    //     headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     body: JSON.stringify({
    //         name: 'Course Name',
    //         description: 'Course Description',
    //         price: '99.99',
    //         photo : file
    //       }),
    // })
    const formDatass = new FormData();
    formDatass.append('name', 'Course Name');
    formDatass.append('description', 'Course Description');
    formDatass.append('price', '99.99');
    formDatass.append('photo', file); // `file` should be the selected file from the input

await axios.post(url, formDatass, {
  headers: {
    'Content-Type': 'multipart/form-data', // Optional, browser usually sets this automatically
  },
}).then((response) => {
        console.log("form==%%",response);
      if (response.data.status === true) {
    navigate("/")
        console.log("form==$$$$$$$",response.data.data);
      } else {
      }
    });
  } catch (error) {
    if (error.response !== undefined) {
      if (error.response.status !== undefined) {
        if (error.response.status === 401) {
          //   errorMsg("Somthing went wrong...");
        } else {
          console.log(`${error.message}-${error.response.status}`);
        }
      }
    }
  }


};
