import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { AiOutlineDown } from 'react-icons/ai';
import Table from "./Table/Table";




const Defaultpage = () => {

   const [tableData , setTableData] = useState([])
   
   useEffect(()=> {
    fetch("table.json")
    .then(res=> res.json())
    .then(data => setTableData(data))
   },[])
//    console.log(tableData);
    return (
        <div>
            {/* cart div */}
            
                <div className="">
                    <Cart></Cart>
                </div>
            

            {/* table div */}
            
                <div className="overflow-x-auto mt-12 lg:mt-16">
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
                               tableData.map((item, index)=> <Table
                               item={item}
                               index= {index}
                               key={item?.id}
                               >

                               </Table>)
                            }

                        </tbody>
                    </table>
                </div>
            
        </div>
    );
};

export default Defaultpage;