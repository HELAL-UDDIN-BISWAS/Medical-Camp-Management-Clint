import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure ";

const AllUser = () => {
    const axiosSecure=useAxiosSecure()
    const {data: users = []}=useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const res=await axiosSecure.get('/participantcamp')
            return res.data
        }
    })
    console.log(users)
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
        <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serile</th>
        <th>Photo</th>
        <th>Name</th>
        <th>Date and Time,</th>
        <th>Camp Fees</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user,index)=>
        <tr>
            <th>{index + 1}</th>
            <td><img className="h-8 w-8 rounded" src={user.userPhoto} alt="" /></td>
            <td>{user.userName}</td>
            <td>{formatDateTime(user.scheduledDateTime)}</td>
            <td>${user.price}</td>
          </tr>)
    }
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;