import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Shared/Provider/Provider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure ";
import useTenstak from "../../../Hooks/useTenstak";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";


const Feedback = () => {
    const axiosPublic=useAxiosPublic();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useTenstak();
    const { data: payments = [] } = useQuery({
        queryKey: ['paymentstttt', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentstttt/${user.email}`)
            return res.data;
        }
    })
  


   const handleRating=(event)=>{
      event.preventDefault()
      const rating=event.target.rating.value;
      const ratingInfo={
        rating,
        date: new Date(),
        email: user.email,
        name: user.displayName,
      }
      axiosPublic.post('/rating/',ratingInfo)
      .then(res=>{   
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        console.log(res)})
        .catch(error=>console.error(error))
      console.log(ratingInfo)
      console.log(user)
   }
    return (
        <div>
            <h2 className="text3-xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>price</th>
                            <th>Status</th>
                            <th>Rating</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>

                            <th>{index + 1}</th>
                            <td>${payment.price}</td> 
                            <td>{payment.status}</td>
                            
                            <td> <form onSubmit={handleRating} className="flex" action="">
                                <div className="">
                                    <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
                                </div> 
                                <div><button className="btn ml-3">Rating</button></div>
                            </form></td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Feedback;