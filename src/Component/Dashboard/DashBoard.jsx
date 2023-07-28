import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { BiSolidDashboard} from 'react-icons/bi';
import { CgWorkAlt} from 'react-icons/cg';
import { AiOutlineAim} from 'react-icons/ai';
import { PiWechatLogoBold} from 'react-icons/pi';
import { BiUserCircle} from 'react-icons/bi';
import { PiHandshakeDuotone} from 'react-icons/pi';
import { TbFileDescription} from 'react-icons/tb';


const DashBoard = () => {
    return (
       <>
       {/* Navbar start */}
       <Navbar></Navbar>
       {/* Navbar end */}
       
       {/* dashboard start */}
       <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  bg-[#E7EEF5]  flex flex-col items-center justify-center ">
                {/* Page content here */}
                <div className="mt-20 lg:mt-12"><Outlet></Outlet></div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul id="navlink" className="menu p-4 relative w-80 h-full bg-white text-base-content">
                    {/* Sidebar content here */}
                    <button className="btn mb-12 bg-green-500 text-white border-0 rounded-full">Create new job +</button>
                    <li className="my-2"><NavLink> <CgWorkAlt className="text-green-500 text-xl"></CgWorkAlt> My jobs</NavLink></li>
                    <li className="my-2"><NavLink> <BiSolidDashboard className="text-green-500 text-xl"></BiSolidDashboard> DashBoard</NavLink></li>
                    <li className="my-2"><NavLink> <BiUserCircle className="text-green-500 text-xl"></BiUserCircle> Candidate R3achout</NavLink></li>
                    <li className="my-2"><NavLink> <AiOutlineAim className="text-green-500 text-xl"></AiOutlineAim> Search Assistant</NavLink></li>
                    <li className="my-2"><NavLink> <PiWechatLogoBold className="text-green-500 text-xl"></PiWechatLogoBold> Interview</NavLink></li>
                    <li className="my-2"><NavLink> <PiHandshakeDuotone className="text-green-500 text-xl"></PiHandshakeDuotone> Intake</NavLink></li>
                    <li className="my-2"><NavLink> <TbFileDescription className="text-green-500 text-xl"></TbFileDescription> Job description</NavLink></li>

                    <div className="bg-[#0C579B] absolute text-white rounded-lg bottom-14 lg:bottom-32 left-2 right-2 p-5 text-center">
                        <p>Upgrade Your Account</p>
                        <p className="my-4">Increase your usage and get early access to new features</p>
                        <button className="btn bg-green-500 border-0 rounded-full text-white">upgrade</button>
                    </div>
                    
                </ul>

            </div>
        </div>
       {/* dashboard end */}
       </>
    );
};

export default DashBoard;