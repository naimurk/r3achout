import React from 'react';
import { GoDotFill } from 'react-icons/go';


const MyjobTr = ({ item, index }) => {
    const { jobTitle, status, stage, hiringManager, priority } = item;

    return (
        <tr className='bg-white w-full my-5'>
            <th>{1 + index}</th>
            <td>{jobTitle}</td>
            <td className='flex items-center gap-x-2'> <GoDotFill className={`${status == "Open" ? "text-green-500" : "text-red-500"}`} ></GoDotFill> <p>{status}</p></td>
            <td>{hiringManager}</td>
            <td>{stage}</td>
            <td>{priority}</td>
            <td>Action</td>
        </tr>
    );
};

export default MyjobTr;