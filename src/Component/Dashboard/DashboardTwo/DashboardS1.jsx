import { useEffect, useState } from 'react';
import { BsFillBagHeartFill } from 'react-icons/bs';


const DashboardS1 = () => {
    const [data, setData] = useState([])
    
    // const { closed , opened , total} = data[0];
    
    useEffect(() => {
        fetch("job.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    
    return (
        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>


            <div className='bg-white relative'>
                <div className='flex  items-center p-12 gap-x-4'>
                    <BsFillBagHeartFill></BsFillBagHeartFill>
                    <h1 className='text-xl font-bold'>Total jobs</h1>
                </div>
                <p className='absolute bottom-3 font-bold text-[#0C579B] tex right-3'>{50}</p>
            </div>
            <div className='bg-white relative'>
                <div className='flex  items-center p-12 gap-x-4'>
                    <BsFillBagHeartFill></BsFillBagHeartFill>
                    <h1 className='text-xl font-bold'>opened jobs</h1>
                </div>
                <p className='absolute bottom-3 font-bold text-[#0C579B] tex right-3'>{30}</p>
            </div>
            <div className='bg-white relative'>
                <div className='flex  items-center p-12 gap-x-4'>
                    <BsFillBagHeartFill></BsFillBagHeartFill>
                    <h1 className='text-xl font-bold'>urgent jobs</h1>
                </div>
                <p className='absolute bottom-3 font-bold text-[#0C579B] tex right-3'>{10}</p>
            </div>
            

        </div>
    );
};

export default DashboardS1;