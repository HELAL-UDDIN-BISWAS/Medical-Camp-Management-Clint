import Swal from "sweetalert2";
import useTenstak from "../../../Hooks/useTenstak";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const RegisteredCamps = () => {

    const [cart, refetch] = useTenstak();
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

console.log(totalPrice)
    console.log(cart.length)
    console.log(cart)
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
                    fetch(`http://localhost:5000/participant/${id}`, {
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
    return (
        <div className="my-10 mx-5">

            <div className="flex justify-around items-center my-4">
               <h3 className="text-orange-400 text-2xl"> TotalItem: {cart.length}</h3>
               <h3 className="text-orange-400 text-2xl">TotalPrice: {totalPrice}</h3>
               <Link  to="/dashboard/payment"><button className="btn btn-outline btn-secondary">Pay</button></Link>
               
            </div>
            <div className="overflow-x-auto">

                {
                    cart.length > 0 ? <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Photo</th>
                                    <th>Time And Date</th>
                                    <th className="">Venue</th>
                                    <th>Specialty</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td><img className="h-8 w-8 rounded" src={item.image} alt="" /></td>
                                        <td>{formatDateTime(item.scheduledDateTime)}</td>
                                        <td>{item.venueLocation}</td>
                                        <td>{item.specialty}</td>
                                        <td>{item.price}</td>
                                        <td><button onClick={() => handledelete(item._id)} className="text-xl text-red-700"><MdDelete /></button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </> : <>
                        <h1 className="text-4xl text-center mt-10">Add Participant Camps</h1>
                    </>
                }
            </div>
        </div>
    );
};

export default RegisteredCamps;