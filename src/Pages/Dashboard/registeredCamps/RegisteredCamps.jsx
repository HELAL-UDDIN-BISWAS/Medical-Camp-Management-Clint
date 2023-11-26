import Swal from "sweetalert2";
import useTenstak from "../../../Hooks/useTenstak";
import { MdDelete } from "react-icons/md";

const RegisteredCamps = () => {
    const [cart,refetch] = useTenstak()
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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
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
                                <td><img className="h-8 w-8 rounded" src={item.userPhoto} alt="" /></td>
                                <td>{formatDateTime(item.scheduledDateTime)}</td>
                                <td>{item.venueLocation}</td>
                                <td>{item.specialty}</td>
                                <td>{item.price}</td>
                                <td><button onClick={()=>handledelete(item._id)} className="text-xl text-red-700"><MdDelete /></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisteredCamps;