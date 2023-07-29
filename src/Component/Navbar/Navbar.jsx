import { AiOutlineLeft} from 'react-icons/ai';
import { IoMdNotificationsOutline} from 'react-icons/io';
import { RiChatCheckLine} from 'react-icons/ri';
import { VscMenu} from 'react-icons/vsc';
import { BiSolidUser} from 'react-icons/bi';
import { BiSolidDashboard} from 'react-icons/bi';
import { CgWorkAlt} from 'react-icons/cg';
import { AiOutlineAim} from 'react-icons/ai';
import { PiWechatLogoBold} from 'react-icons/pi';
import { BiUserCircle} from 'react-icons/bi';
import { PiHandshakeDuotone} from 'react-icons/pi';
import { TbFileDescription} from 'react-icons/tb';
import { RxCross2} from 'react-icons/rx';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
// import { AiOutlineMenu} from 'react-icons/ri';


const Navbar = () => {
    const [isOpen , setIsOpen]= useState(false)
    const location = useLocation()
    const Pathname = location?.pathname;
    let name = "Home" ;
   
    if(Pathname == "/"){
        name="Home"
    }
    else if (Pathname == "/jobs"){
        name =  "Job"
    }
    else if (Pathname == "/dashboard"){
        name =  "Dashboard"
    }
    
    
    return (
        <div className="w-full flex justify-between  p-5 lg:p-7 bg-white">
            {/* first part */}
            <div className="flex w-1/2  items-center gap-x-2 lg:gap-x-10 ">
                <div className='border p-3 lg:hidden rounded-full border-green-500'><Link to={'/'}><BiSolidUser className='text-[#0C579B]'></BiSolidUser></Link></div>
                <p className="font-bold lg:text-xl hidden lg:block text-[#0C579B]">R<span className="text-green-500">3</span>ACHOUT. <span className="font-light text-green-500">ai</span></p>
               <NavLink to={"/"}>                <button className="hidden btn btn-md bg-white border lg:block"><AiOutlineLeft></AiOutlineLeft></button>
</NavLink>
                <p className='font-bold text-sm lg:text-lg'>{name}</p>
            </div>

            {/* second part */}
            <div className="flex w-1/2 gap-x-2 lg:gap-x-10 justify-end items-center">
                <button className="btn bg-[#E7EEF5] rounded-full btn-sm"><IoMdNotificationsOutline></IoMdNotificationsOutline></button>
                <button className="btn bg-[#E7EEF5] rounded-full btn-sm"><RiChatCheckLine></RiChatCheckLine></button>
                <div className="divider` lg:hidden lg:divider-horizontal"></div>
                <div className="flex gap-x-5 items-center justify-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://picsum.photos/500/300?random=1" />
                        </div>
                    </div>
                    <div className=" hidden text-lg lg:block">
                        <p className = "font-bold">Malida Ryne</p>
                        <p className= "font-light">Recruiter</p>
                    </div>
                    <div className='md:hidden'>
                          {
                            isOpen ? <RxCross2 onClick={()=> setIsOpen(!isOpen)} ></RxCross2>: <VscMenu onClick={()=> setIsOpen(!isOpen)}></VscMenu>
                          }
                    </div>
                </div>
            </div>
            
            {/* mobile */}
            <div>
            <ul id="navlink" className={`md:hidden absolute md:static duration-500 ${isOpen?  "-left-3 w-3/4 pl-3 top-20 h-full translate-x-3   bg-white z-50": "-left-44 -translate-x-9 "}`}>
                    {/* Sidebar content here */}
                    <button className="btn  mb-12 mt-5 bg-green-500 text-white border-0 rounded-full">Create new job +</button>
                    <li className="my-5"><NavLink to={"/jobs"} className={"flex gap-x-2"}> <CgWorkAlt className="text-green-500 text-xl"></CgWorkAlt> My jobs</NavLink></li>
                    <li className="my-5"><NavLink to={"/dashboard"} className={"flex gap-x-2"}> <BiSolidDashboard className="text-green-500 text-xl"></BiSolidDashboard> DashBoard</NavLink></li>
                    <li className="my-5"><NavLink className={"flex gap-x-2"}> <BiUserCircle className="text-green-500 text-xl"></BiUserCircle> Candidate R3achout</NavLink></li>
                    <li className="my-5"><NavLink className={"flex gap-x-2"}> <AiOutlineAim className="text-green-500 text-xl"></AiOutlineAim> Search Assistant</NavLink></li>
                    <li className="my-5"><NavLink className={"flex gap-x-2"}> <PiWechatLogoBold className="text-green-500 text-xl"></PiWechatLogoBold> Interview</NavLink></li>
                    <li className="my-5"><NavLink className={"flex gap-x-2"}> <PiHandshakeDuotone className="text-green-500 text-xl"></PiHandshakeDuotone> Intake</NavLink></li>
                    <li className="my-5"><NavLink className={"flex gap-x-2"}> <TbFileDescription className="text-green-500 text-xl"></TbFileDescription> Job description</NavLink></li>

                    <div className="bg-[#0C579B] absolute text-white rounded-lg bottom-8 lg:bottom-32 left-2 right-2 p-5 text-center">
                        <p>Upgrade Your Account</p>
                        <p className="my-4">Increase your usage and get early access to new features</p>
                        <button className="btn bg-green-500 border-0 rounded-full text-white">upgrade</button>
                    </div>
                    
                </ul>
            </div>

        </div>
    );
};

export default Navbar;