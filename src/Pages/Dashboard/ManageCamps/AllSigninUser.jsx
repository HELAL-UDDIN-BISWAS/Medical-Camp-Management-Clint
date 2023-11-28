import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure ';
import { useQuery } from '@tanstack/react-query';
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
const AllSigninUser = () => {
    const axiosSecure=useAxiosSecure();
    const axiosPublic=useAxiosPublic();

    const { data: users = [],refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const res = await axiosSecure.get('/user')
          return res.data
        }
      })
      const handleMakeAdmin=(id)=>{
        axiosPublic.patch(`/user/admin/${id}`)
            .then(res=>{
                console.log(res.data)
                // if(res.data.modifiedCount > 0){
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: "Your work has been saved",
                    //     showConfirmButton: false,
                    //     timer: 1500
                    //   });
                // }
            })
      }
      const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
          .then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/user/${id}`, {
                method: "DELETE",
              })
                .then(res => res.json())
                .then(data => {
                  if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                      title: 'success',
                      text: 'Do you want to continue',
                      icon: 'success',
                      confirmButtonText: 'DELETE'
                    })
                  }
                })
            }
          });
      }
      
      console.log(users)
    return (
        <div>
      <div className="my-8">
      <h3 className="text-indigo-500 text-center text-3xl ">All Registered User</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) =>
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role ==='admin'? 'admin' :<button className='text-xl text-lime-700' onClick={()=>handleMakeAdmin(user._id)}><FaUsers /></button>}</td>
                  <td><button className='text-xl text-red-500' onClick={()=>handleDelete(user._id)}><MdDelete /></button></td>
                 
                 
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllSigninUser;