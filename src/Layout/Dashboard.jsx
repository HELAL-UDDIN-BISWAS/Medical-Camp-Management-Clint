import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 bg-amber-100 h-screen">
                <ul className="menu p-4  ">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/manage-registered-camps'>Rregistered-Camps</NavLink></li>
                                <li><NavLink to='/dashboard/manage-camps'>Manage-Camps</NavLink></li>
                                <li><NavLink to='/dashboard/add-a-camp'>Add-A-Camp</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to='/dashboard/participant-profile'>Profile</NavLink></li>
                                <li><NavLink to='/dashboard/registered-camps'>My cart</NavLink></li>
                                <li><NavLink to='/'>Home</NavLink></li>
                            </>
                    }
                    <div className="divider divider-start"></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                </ul>
            </div>
            <div className="w-full mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;