// import React from 'react'

// const Footer = () => {
//     return (
//         <div className='container'>
//             <div className='bg-[#FDF8EE] bottom-0 pt-[31px]'>
//                 <div className='flex justify-evenly items-center'>
//                     <div>
//                         <h2 className='text-2xl font-bold text-[#1D1D1D] pb-6'>Book Store</h2>
//                         <p className='w-[318px] font-normal text-[18px] text-[#606060]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
//                     </div>
//                     <div>
//                         <div className='text-[25px] text-[#00052E] font-semibold pb-[29px]'> Company</div>
//                         <ul className=''>
//                             <li className='text-[19px] font-normal pb-[25px] text-[#606060]'>About Us</li>
//                             <li className='text-[19px] font-normal pb-[25px] text-[#606060]'>How to work?</li>
//                             <li className='text-[19px] font-normal pb-[25px] text-[#606060]'>Populer Course</li>
//                             <li className='text-[19px] font-normal pb-[25px] text-[#606060]'>Service</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <div className='text-[25px] text-[#00052E] font-semibold  pb-[29px]'>Courses</div>
//                         <ul>
//                             <li className='text-[19px] pb-[25px]  font-normal text-[#606060]'>Categories</li>
//                             <li className='text-[19px] pb-[25px] font-normal text-[#606060]'>Ofline Course</li>
//                             <li className='text-[19px] pb-[25px] font-normal text-[#606060]'>Vidio Course</li>
//                         </ul>
//                     </div>
//                     <div>
//                     <div className='text-[25px] text-[#00052E] font-semibold  pb-[29px]'>Support</div>
//                         <ul>
//                             <li className='text-[19px] pb-[25px] font-normal text-[#606060]'>FAQ</li>
//                             <li className='text-[19px] pb-[25px] font-normal text-[#606060]'>Help Center</li>
//                             <li className='text-[19px] pb-[25px] font-normal text-[#606060]'>Career</li>
//                             <li className='text-[19px] pb-[25px] font-normal text-[#606060]'>Privacy </li>
//                         </ul>
//                     </div>
//                     <div>
//                     <div className='text-[25px] text-[#00052E] font-semibold  pb-[29px]'>Contac Info</div>
//                         <ul>
//                             <li className='text-[19px]  pb-[25px]  font-normal text-[#606060]'>+0913-705-3875</li>
//                             <li className='text-[19px]  pb-[25px] font-normal text-[#606060]'>ElizabethJ@jourrapide.com</li>
//                             <li className='text-[19px]  pb-[25px] font-normal text-[#606060]'>4808 Skinner Hollow Road
//                                 Days Creek, OR 97429</li>

//                         </ul>
//                     </div>
//                 </div>
//                 <div className='border-t-2'>
//                     <p className='text-center py-[31px] text-[19px] font-normal text-[#606060]'>BookStore All Right Reserved, 2022</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Footer

import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto px-6'>
            <div className='bg-[#fdf8ee] bottom-0 pt-10'>
                <div className='flex justify-around items-center'>
                    <div>
                        <h2 className='text-2xl font-bold text-[#1D1D1D] pb-4'>Book Store</h2>
                        <p className='w-[318px] font-normal text-[18px] text-[#606060]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
                    </div>
                    <div>
                        <h3 className='text-[25px] text-[#00052E] font-semibold pb-4'>Company</h3>
                        <ul>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>About Us</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>How to work?</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Popular Course</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Service</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[25px] text-[#00052E] font-semibold pb-4'>Courses</h3>
                        <ul>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Categories</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Offline Course</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Video Course</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[25px] text-[#00052E] font-semibold pb-4'>Support</h3>
                        <ul>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>FAQ</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Help Center</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Career</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>Privacy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[25px] text-[#00052E] font-semibold pb-4'>Contact Info</h3>
                        <ul>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>+0913-705-3875</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>ElizabethJ@jourrapide.com</li>
                            <li className='text-[19px] font-normal pb-3 text-[#606060]'>4808 Skinner Hollow Road<br/>Days Creek, OR 97429</li>
                        </ul>
                    </div>
                </div>
                <div className='border-t-2 mt-6'>
                    <p className='text-center py-6 text-[19px] font-normal text-[#606060]'>BookStore All Rights Reserved, 2022</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

