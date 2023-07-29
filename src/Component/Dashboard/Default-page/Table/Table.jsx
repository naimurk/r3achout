import React from 'react';

import { GoDotFill} from 'react-icons/go';
import { AiTwotoneDelete} from 'react-icons/ai';
import { AiFillEye,AiOutlineEdit} from 'react-icons/ai';

const Table = ({item,index}) => {
    const {jobTitle,status,stage,hiringManager,priority} = item
    return (
        <tr className='bg-white my-5'>
            <th>{1+index}</th>
            <td>{jobTitle}</td>
            <td className='flex items-center gap-x-2'> <GoDotFill className={`${status=="Open"? "text-green-500" : "text-red-500"}`} ></GoDotFill> <p>{status}</p></td>
            <td>{hiringManager}</td>
            <td>{stage}</td> 
            <td>{priority}</td> 
            <td className='flex gap-x-2'>
                <AiOutlineEdit className='text-blue-500 text-xl'></AiOutlineEdit>
                <AiFillEye className='text-green-500 text-xl' ></AiFillEye>
                <AiTwotoneDelete className='text-red-500 text-xl'></AiTwotoneDelete>
                </td> 
        </tr>
    );
};

export default Table;