import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-amber-100 h-screen">
                <ul className="menu">
                    <li><NavLink to='dashboard/cart'>My cart</NavLink></li>
                </ul>
                <ul className="menu">
                    <li><NavLink to='dashboard/home'>My cart</NavLink></li>
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;