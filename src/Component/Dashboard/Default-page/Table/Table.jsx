import React from 'react';

import { GoDotFill} from 'react-icons/go';

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
            <td>Action</td> 
        </tr>
    );
};

export default Table;