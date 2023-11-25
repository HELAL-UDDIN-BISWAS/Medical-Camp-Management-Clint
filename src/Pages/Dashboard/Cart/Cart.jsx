import React, { useContext } from 'react';
import useTenstak from '../../../Hooks/useTenstak';
import DataTable from "react-data-table-component";
import { AuthContext } from '../../../Shared/Provider/Provider';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
// ====================++++++++++++++++++++++++++++++++++++++++++++____________
const Cart = () => {
  const {user}=useContext(AuthContext);
  const[cart]=useTenstak();
   

    const columns = [
        {
          name: "Serial No.",
          selector: (row, index) => <p className="">{index + 1}</p>,
        },
        {
          name: "Image",
          cell: (row) => (
            <img
              className="rounded-full w-14 h-14 my-3 bg-base-300"
              src={row.userPhoto}
              alt="Blog Image"
              width="50"
            />
          ),
        },
        {
          name: "Name",
          selector: (row) => row.userName,
        },
        {
          name: "Time",
          selector: (row) => row.scheduledDateTime,
        },
        {
          name: "Price",
          selector: (row) => row.price,
        },
        {
            name: "Delete",
            selector: () => <button onClick={()=>handledelete(item._id)} ><MdDelete /></button> ,
          },
      
      ];

      const customStyles = {
        rows: {
          style: {
            minHeight: "72px", // override the row height
            overflowX: "auto",
            background: "gray-200",
            whiteSpace: "nowrap",
          },
        },
        headCells: {
          style: {
            paddingLeft: "10px", // override the cell padding for head cells
            paddingRight: "10px",
            fontWeight: "bold",
            fontSize: "15px",
            width: "50px",
            whiteSpace: "nowrap",
            overflowX: "auto",
          },
        },
        cells: {
          style: {
            paddingLeft: "5px", // override the cell padding for data cells
            paddingRight: "5px",
            fontWeight: "bold",            
          },
        },
      };
    
      const formatDateTime = dateTimeString => {
        const options = {
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        };
    
        const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
        return formattedDateTime;
      };
    console.log(cart)
    
        return (
        <div>
    <div className="">
      <div className="w-full  p-1 mb-20 mx-auto ">
        <h1 className="text-transparent text-4xl pb-3 font-semibold md:text-7xl text-center my-8 bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">
          Featured Blogs
          
        </h1>
        <div className="border hidden md:block">
          <div className=" overflow-x-scroll overflow-y-auto">
            <DataTable
              className="w-full"
              columns={columns}
              data={cart}
            //   customStyles={customStyles}
            ></DataTable>
          </div>
        </div>

        <div className="overflow-x-auto md:hidden">
          <table className="table border ">
            {/* head */}
            <thead className="">
              <tr>
                <th className="font-bold ">Serial</th>
                <th className="font-bold ">Photo</th>
                <th className="font-bold ">Name</th>
                <th className="font-bold ">Price</th>
                <th className="font-bold ">Price</th>
                <th className="font-bold ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => ( <div>
                <tr key={idx}>
                  <tb className="text-center ml-10">{idx + 1}</tb>
                  <td>
                    <img className="rounded-full w-10" src={item.userPhoto} />
                  </td>
                  <td>{item.userName}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td className='mx-3'>{formatDateTime(item.scheduledDateTime)}</td>
                  <td><button className='text-red w-11'><MdDelete /></button></td>
                </tr>
              </div>                
              ))}
            </tbody>
          </table>
          
        </div>
      </div>    
    </div>
        </div>
    );
};

export default Cart;