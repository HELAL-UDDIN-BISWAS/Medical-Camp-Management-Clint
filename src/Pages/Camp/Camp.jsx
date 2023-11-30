import axios, { Axios } from 'axios';
import React, { useContext } from 'react';
import { useState } from "react";
import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Shared/Provider/Provider';
import Swal from 'sweetalert2';

const Camp = () => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const campdata = useLoaderData();
  const { price, campName, category, image, longDescription, name, scheduledDateTime, shortDescription, specializedServices, specialty, targetAudience, venueLocation, _id } = campdata || {}

  const handaleSumit =async(e) => {
    e.preventDefault()
    const from = e.target
    const age = from.age.value
    const phone = from.phone.value
    const address = from.address.value
    const price = from.price.value

    const participantData = {
      userName: user.displayName,
      email: user.email,
      userPhoto: user.photoURL,
      age,
      phone,
      address,
      price,
      campName,
      venueLocation,
      image,
      specialty
    }
    console.log(participantData)
    const url = `https://y-tau-one.vercel.app/participant`;
    axios.post(url, participantData)
      .then(res => {
        
        Swal.fire({
          icon: "success",
          title: "Wishlist...",
          text: "ADD Participant Success",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        console.log(res.data)
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        console.error(error)
      })
      const countRes =await axios.patch(`https://y-tau-one.vercel.app/camp-count/${_id}`,)
        console.log(countRes)
   
  }

  const onClick = () => {
    setShowModal(!showModal);
  };
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
  return (
    <div className='w-full my-5'>
      <div>
        <img className='h-[450px] w-full ' src={image} alt="" />
      </div>
      <div className='my-3 md:flex justify-between'>
        <h2 className='text-xl'>Location: {venueLocation}</h2>
        <p>{formatDateTime(scheduledDateTime)}</p>
      </div>

      <div className='md:flex justify-between'>
        <p className='text-xl text-black'>category: {category}</p>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <>
          <Button className='text-black btn' type='primary' onClick={onClick}>Register</Button>

          <Modal
            icon={<CloudArrowUp size={28} color="#1B4DFF" />}
            size="md"
            show={showModal}
            position="top-center"
          >
            <Modal.Header></Modal.Header>
            <form onSubmit={handaleSumit}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input type="number" placeholder="Age" name='age' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="number" placeholder="Phone" name='phone' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" name='address' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" required />
              </div>
              <button className='my-5 btn btn-outline btn-secondary' type="primary">
                Confirm
              </button>
            </form>
            <div className=' justify-end items-end text-end'>
              <button className='justify-end btn btn-outline btn-secondary' type="primary" onClick={onClick}>
                Close
              </button>
            </div>

          </Modal>
        </>

      </div>
      <div>
        <p>{price}</p>
        <p className='text-xl text-black'>specialty: {specialty}</p>
        <p className='text-xl text-black'>Name: {name}</p>
        <p className='text-xl text-black'>Camp Name: {campName}</p>
        <p className='text-xl text-black'>Target Audience: {targetAudience}</p>
        <p className='text-xl text-black mb-4'>Specialized Services: {specializedServices}</p>
        <p className=''>{shortDescription}</p>
        <p className=''>{longDescription}</p>
      </div>

    </div>
  );
};

export default Camp;