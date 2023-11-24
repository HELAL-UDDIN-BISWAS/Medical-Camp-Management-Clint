import { useContext } from "react";
import { AuthContext } from "../Shared/Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user,loding } = useContext(AuthContext)
    const location=useLocation()
if(loding){
    return <span className="loading loading-spinner loading-lg"></span>
}
    if (user) {
        return children;
    }

  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;