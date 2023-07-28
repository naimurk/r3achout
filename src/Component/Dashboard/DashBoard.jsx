import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const DashBoard = () => {
    return (
       <>
       {/* Navbar start */}
       <Navbar></Navbar>
       {/* Navbar end */}
       
       {/* dashboard start */}
       <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li className="my-2"><NavLink>My jobs</NavLink></li>
                    <li className="my-2"><NavLink>DashBoard</NavLink></li>
                    <li className="my-2"><NavLink>Candidate R3achout</NavLink></li>
                    <li className="my-2"><NavLink>Search Assistant</NavLink></li>
                    <li className="my-2"><NavLink>Interview</NavLink></li>
                    <li className="my-2"><NavLink>Intake</NavLink></li>
                    <li className="my-2"><NavLink>Job description</NavLink></li>
                    
                </ul>

            </div>
        </div>
       {/* dashboard end */}
       </>
    );
};

export default DashBoard;