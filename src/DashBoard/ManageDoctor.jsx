import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const ManageDoctor = () => {
    const axiosSecure = useAxiosSecure();
    const { data: doctorList = [], refetch } = useQuery({
        queryKey: ['doctorList'],
        queryFn: async () => {
            const res = await axiosSecure.get('/doctorList');

            return res.data;
        },

    })




    const handleDelete = async (doctor) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });


                const res = await axiosSecure.delete(`/doctorList/${doctor._id}`)
                console.log(res.data)

                refetch()


            }
        });

    }


    return (
        <div>
            <h2 className="text-3xl">manage doctor:{doctorList.length}</h2>

            <div>



                <div className="overflow-x-auto ">
                    <table className=" table min-w-full table-auto">
                        {/* head */}
                        <thead>
                            <tr className="text-xl ">

                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>SPECIALITY</th>
                                <th>DELETE</th>

                            </tr>
                        </thead>
                        <tbody>


                            {

                                doctorList.map(doctor =>
                                    <tr key={doctor._id} className="text-xl">

                                        <td>
                                            <div className="flex items-center text-xl gap-3">
                                                <div className="avatar">
                                                    <div className=" h-16 w-16">
                                                        <img
                                                            src={doctor.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                <div className="font-bold">{doctor.name}</div>

                                            </div>
                                        </td>

                                        <td>
                                            {doctor.email}
                                        </td>
                                        <td>
                                            {doctor.category}
                                        </td>



                                        <td>
                                            <button onClick={() => handleDelete(doctor)} className="btn bg-red-500">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }



                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctor;