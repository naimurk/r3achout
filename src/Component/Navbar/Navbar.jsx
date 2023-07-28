

const Navbar = () => {
    return (
        <div className="w-full flex justify-between  p-5 lg:p-7 bg-red-500">
            {/* first part */}
            <div className="flex w-1/2  items-center gap-x-2 lg:gap-x-10 ">
                <p>R3achout</p>
                <button className="hidden btn btn-sm lg:block">h</button>
                <p>Home</p>
            </div>

            {/* second part */}
            <div className="flex w-1/2 gap-x-2 lg:gap-x-10 justify-end items-center">
                <button className="btn btn-sm">he</button>
                <button className="btn btn-sm">he</button>
                <div className="divider` lg:hidden lg:divider-horizontal"></div>
                <div className="flex gap-x-5 items-center justify-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://picsum.photos/500/300?random=1" />
                        </div>
                    </div>
                    <div className=" hidden lg:block">
                        <p>helo</p>
                        <p>helo</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;