import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoHammerOutline } from "react-icons/io5";
import Swal from 'sweetalert2';
import { CloudArrowUp } from "phosphor-react";
import { Button, Modal } from "keep-react";
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure ';
import { useQuery } from '@tanstack/react-query';

const ManageCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [datas, setdata] = useState([])
  const [ids,setids]=useState('')
 

  const handleUpdate = async (data) => {
    const imageFile = new FormData();
    imageFile.append('image', data.photo[0]);
    const { data: imagedata } = await axios.post('https://api.imgbb.com/1/upload?key=b425eed4264500ee966fabfc8c973be7', imageFile);
    
    const userInfo = {
      campName: data.campname,
      price: data.campfees,
      image: imagedata.data?.display_url,
      venueLocation: data.venue,
      specializedServices: data.services,
      healthcare: data.healthcare,
      targetAudience: data.audience,
      longDescription: data.description
    }
  
    axiosSecure.put(`/ubdateCamp/${ids._id}`, userInfo)
      .then(data => {
        
          refetch()
          Swal.fire({
            title: 'success',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Success'
          })
      
      })
  }
   
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosSecure.get('/availableCamps')
      return res.data
    }
  })
  const handledelete = (id) => {
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
          fetch(`http://localhost:5000/deletecamp/${id}`, {
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
  const formatDateTime = dateTimeString => {
    const options = {
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      year: 'numeric',
      month: '2-digit',
    };

    const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
    return formattedDateTime;
  };
  const onClick = (data) => {
    setids(data)
    setShowModal(!showModal);
  
  };
  console.log(ids)
  return (
    <div>
       <div className="my-8">
      <h3 className="text-indigo-500 text-center text-3xl ">Manage Camp</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className='text-sky-500'></th>
              <th className='text-sky-500'>Photo</th>
              <th className='text-sky-500'>Camp Name</th>
              <th className='text-sky-500'>Date And Time</th>
              <th className='text-sky-500'>Venue Location</th>
              <th className='text-sky-500'>Services</th>
              <th className='text-sky-500'>Ubdate</th>
              <th className='text-sky-500'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((data, index) =>
                <tr className="bg-base-200" key={data._id}>
                  <th>{index + 1}</th>
                  <td><img className='h-8 w-8 rounded' src={data.image} alt="" /></td>
                  <td>{data.campName}</td>
                  <td>{formatDateTime(data.scheduledDateTime)}</td>
                  <td>{data.venueLocation}</td>
                  <td>{data.specializedServices}</td>
                  <td> <Button className='text-lime-600 text-xl ' type='primary' onClick={()=>onClick(data)}><IoHammerOutline />
                 </Button></td>
                  <td><button onClick={() => handledelete(data._id)}>
                    <div><td className='text-red-600 text-xl'><MdDelete /></td></div>
                  </button></td>               
                </tr>)
            }
          </tbody>
        </table>
      </div>
      <>

        <Modal
          icon={<CloudArrowUp size={28} color="#1B4DFF" />}
          size="lg"
          show={showModal}
          position="top-center"
        >

          <form onSubmit={handleSubmit(handleUpdate)} className="card-body">
            <div className="grid md:grid-cols-2 w-full gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">CampName</span>
                </label>
                <input type="text"   {...register("campname")} placeholder="Camp Name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file"  {...register("photo")} placeholder="Name" className="" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">CamFees</span>
                </label>
                <input type=""  {...register("campfees")} placeholder="Camp Fees" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Venue Location</span>
                </label>
                <input type="text"  {...register("venue")} placeholder="Venue Location" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Specialized Services Provided</span>
                </label>
                <input type="text"  {...register("services")} placeholder="Specialized Services Provided" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Healthcare Professionals in Attendance</span>
                </label>
                <input type="text"  {...register("healthcare")} placeholder="Healthcare" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Target Audience</span>
                </label>
                <input type="text"  {...register("audience")} placeholder="Target Audience" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Comprehensive Description</span>
                </label>
                <input type="text"  {...register("description")} placeholder="Comprehensive Description" className="input input-bordered" required />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Camp</button>
            </div>
          </form>

          <div className=' justify-end items-end text-end'>
            <button className='justify-end btn btn-outline btn-secondary' type="primary" onClick={onClick}>
              Close
            </button>
          </div>

        </Modal>
      </>
    </div>
  );
};

export default ManageCamps;