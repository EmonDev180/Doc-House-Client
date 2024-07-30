import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";


const DasBoardHome = () => {

    const { user } = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()

    const { data: stats } = useQuery({
        queryKey: ['dashBoard-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/dashBoard-stats');

            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-3xl text-green-500">
                <span > WellCome Doctor House </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>



            <div className="stats shadow  m-12   ">

                <div className="stat w-[200px] gap-4 bg-orange-200">
                    <div className="stat-figure text-secondary">
                        <FaUser className="text-5xl" />
                    </div>
                    <div className="stat-title text-2xl">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                    <hr />
                    <h2 className="text-2xl">Users</h2>

                </div>

                <div className="stat w-[200px] gap-4 bg-yellow-300">
                    <div className="stat-figure text-secondary">
                        <TbBrandBooking className="text-5xl" />
                    </div>
                    <div className="stat-title text-2xl">Booking</div>
                    <div className="stat-value">{stats?.bookings}</div>

                    <hr />
                    <h2 className="text-2xl">Bookings</h2>
                </div>

                <div className="stat w-[200px] gap-4 bg-cyan-200">
                    <div className="stat-figure text-secondary">

                        <FaUserDoctor className="text-5xl" />

                    </div>
                    <div className="stat-title text-2xl">Doctor</div>
                    <div className="stat-value">{stats?.doctor}</div>
                    <hr />
                    <h2 className="text-2xl">Doctor</h2>
                </div>
            </div>

        </div>
    );
};

export default DasBoardHome;