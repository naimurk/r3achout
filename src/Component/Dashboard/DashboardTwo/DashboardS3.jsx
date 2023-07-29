

const DashboardS3 = () => {
    return (
        <div data-aos="fade-up" className="mt-5  pb-12" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
                {/* progress bar start */}
                <div className="p-5 flex justify-center items-center bg-white">
                    <div className="radial-progress text-green-500" style={{ "--value": 20 }}> High </div>
                </div>
                {/* progress bar start */}
                {/* progress bar start */}
                <div className="p-5 flex justify-center items-center bg-white">
                    <div className="radial-progress text-[#0C579B]" style={{ "--value": 10 }}>Medium</div>
                </div>
                {/* progress bar start */}
                {/* progress bar start */}
                <div className="p-5 flex justify-center items-center bg-white">
                    <div className="radial-progress text-[#0C579B]" style={{ "--value": 5 }}>Low</div>
                </div>
                {/* progress bar start */}
                {/* progress bar start */}
                <div className="p-5 flex justify-center items-center bg-white">
                    <div className="radial-progress  text-red-500" style={{ "--value": 2 }}>On hold</div>
                </div>
                {/* progress bar start */}
            </div>
        </div>
    );
};

export default DashboardS3;