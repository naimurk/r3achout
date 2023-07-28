import { useEffect, useState } from "react";
import MyjobTr from "./MyjobTr";


const MyJob = () => {
    const [data , setData]=useState([])
    useEffect(()=> {
        fetch('table.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    return (
        <div className="overflow-x-auto w-full mt-5 lg:mt-16">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="text-sm bg-base-300 py-12 font-bold">
                            <tr>
                                <th></th>
                                <th>Job Title</th>
                                <th>Status </th>
                                <th>Hiring Manager</th>
                                <th>Stage</th>
                                <th>Priority</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                               data.map((item, index)=> <MyjobTr
                               item={item}
                               index= {index}
                               key={item?.id}
                               >

                               </MyjobTr>)
                            }

                        </tbody>
                    </table>
                </div>
    );
};

export default MyJob;