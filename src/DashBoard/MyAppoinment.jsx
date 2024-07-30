import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyAppoinment = () => {

  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext)

  console.log(user?.email)


  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`);

      return res.data;

    },

  })





  return (
    <div>


   


      {


        <div className="overflow-x-auto sm:overflow-visible">
          <table className="table-auto w-full text-left">

            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>

              {
                bookings.map((booking, index) =>
                  <tr key={booking._id} className="bg-base-200">
                    <th >{index + 1}</th>
                    <td className=" text-sm md:text-base lg:text-lg">{booking.Name}</td>
                    <td className=" text-sm md:text-base lg:text-lg">{booking.email}</td>
                    <td className=" text-sm md:text-base lg:text-lg">{booking.Title}</td>
                    <td className=" text-sm md:text-base lg:text-lg">{booking.Date}</td>
                  </tr>)
              }







            </tbody>
          </table>
        </div>


      }
    </div>
  );
};

export default MyAppoinment;