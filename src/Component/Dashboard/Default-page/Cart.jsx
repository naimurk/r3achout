import React from 'react';
import { BiSolidDashboard} from 'react-icons/bi';
import { CgWorkAlt} from 'react-icons/cg';
import { AiOutlineAim} from 'react-icons/ai';
import { PiWechatLogoBold} from 'react-icons/pi';
import { BiUserCircle} from 'react-icons/bi';
import { PiHandshakeDuotone} from 'react-icons/pi';
import { TbFileDescription} from 'react-icons/tb';


const Cart = ({item}) => {
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-8 lg:gap-12'>
        
        {/* cart */}
        <div data-aos="zoom-in" className='bg-white relative mt-12  lg:mt-12 h-[150px] ml-3 lg:ml-0 w-[350px]'>
           <div className='bg-[#E7EEF5] w-32 h-32 -mt-16 rounded-full flex justify-center items-center  absolute m-auto left-0 right-0'><div className='bg-white p-10 rounded-full'><BiUserCircle className='text-2xl text-[#23B574]'></BiUserCircle></div></div>
           <div className='absolute bottom-5 flex justify-center  w-full'><p className='font-bold'>Candidate R3achout</p></div>
           
        </div>
        {/* cart */}
        <div data-aos="zoom-in" className='bg-white relative mt-12  lg:mt-12 h-[150px] ml-3  lg:ml-0 w-[350px]'>
           <div className='bg-[#E7EEF5] w-32 h-32 -mt-16 rounded-full flex justify-center items-center  absolute m-auto left-0 right-0'><div className='bg-white p-10 rounded-full'><AiOutlineAim className='text-2xl text-[#23B574]'></AiOutlineAim></div></div>
           <div className='absolute bottom-5 flex justify-center  w-full'><p className='font-bold'>Candidate Search Assitance </p></div>
           
        </div>
        {/* cart */}
        <div data-aos="zoom-in" className='bg-white relative mt-12  lg:mt-12 h-[150px] ml-3  lg:ml-0 w-[350px]'>
           <div className='bg-[#E7EEF5] w-32 h-32 -mt-16 rounded-full flex justify-center items-center  absolute m-auto left-0 right-0'><div className='bg-white p-10 rounded-full'><PiWechatLogoBold className='text-2xl text-[#23B574]'></PiWechatLogoBold></div></div>
           <div className='absolute bottom-5 flex justify-center  w-full'><p className='font-bold'>InterView Question </p></div>
           
        </div>
        {/* cart */}
        <div data-aos="zoom-in" className='bg-white relative  mt-12  lg:mt-12 h-[150px] ml-3  lg:ml-0 w-[350px]'>
           <div className='bg-[#E7EEF5] w-32 h-32 -mt-16 rounded-full flex justify-center items-center  absolute m-auto left-0 right-0'><div className='bg-white p-10 rounded-full'><PiHandshakeDuotone className='text-2xl text-[#23B574]'></PiHandshakeDuotone></div></div>
           <div className='absolute bottom-5 flex justify-center  w-full'><p className='font-bold'>Intake</p></div>
           
        </div>
        {/* cart */}
        <div data-aos="zoom-in" className='bg-white relative  mt-12  lg:mt-12 h-[150px] ml-3  lg:ml-0 w-[350px]'>
           <div className='bg-[#E7EEF5] w-32 h-32 -mt-16 rounded-full flex justify-center items-center  absolute m-auto left-0 right-0'><div className='bg-white p-10 rounded-full'> <TbFileDescription className='text-2xl text-[#23B574]'></TbFileDescription></div></div>
           <div className='absolute bottom-5 flex justify-center  w-full'><p className='font-bold'>Job Description</p></div>
           
        </div>
       

        </div>
    );
};

export default Cart;