import { AiOutlineLeft} from 'react-icons/ai';
import { IoMdNotificationsOutline} from 'react-icons/io';
import { RiChatCheckLine} from 'react-icons/ri';
import { VscMenu} from 'react-icons/vsc';
import { BiSolidUser} from 'react-icons/bi';
// import { AiOutlineMenu} from 'react-icons/ri';


const Navbar = () => {
    return (
        <div className="w-full flex justify-between  p-5 lg:p-7 bg-white">
            {/* first part */}
            <div className="flex w-1/2  items-center gap-x-2 lg:gap-x-10 ">
                <div className='border p-3 lg:hidden rounded-full border-green-500'><BiSolidUser className='text-[#0C579B]'></BiSolidUser></div>
                <p className="font-bold lg:text-xl hidden lg:block text-[#0C579B]">R<span className="text-green-500">3</span>ACHOUT. <span className="font-light text-green-500">ai</span></p>
                <button className="hidden btn btn-md bg-white border lg:block"><AiOutlineLeft></AiOutlineLeft></button>
                <p className='font-bold text-sm lg:text-lg'>Home</p>
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
                    <div className='lg:hidden'>
                          <VscMenu></VscMenu>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;