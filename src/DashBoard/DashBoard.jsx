import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className="flex flex-col md:flex-row">

            <div className="w-full md:w-64 bg-gray-200 min-h-screen">

                <ul className='menu p-4'>

                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/dashboardHome">
                                        <h2 className="text-xl md:text-2xl">Dashboard</h2>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUser">
                                        <h2 className="text-xl md:text-2xl">All Users</h2>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addDoctor">
                                        <h2 className="text-xl md:text-2xl">Add a Doctor</h2>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageDoctor">
                                        <h2 className="text-xl md:text-2xl">Manage Doctors</h2>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <h2 className="text-xl md:text-2xl">Home</h2>
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/myAppoinment">
                                        <h2 className="text-xl md:text-2xl">My Appointments</h2>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <h2 className="text-xl md:text-2xl">Home</h2>
                                    </NavLink>
                                </li>
                            </>
                    }

                </ul>
            </div>

            {/* Dashboard content */}
            <div className='flex-1 p-4 md:p-8'>
                <Outlet />
            </div>
        </div>

    );
};

export default DashBoard;