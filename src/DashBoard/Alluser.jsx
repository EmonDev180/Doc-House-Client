import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Alluser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');

            return res.data;
        }
    })

    const handleDelete = (user) => {

        console.log(user)

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
                refetch();
                const res = await axiosSecure.delete(`/users/${user._id}`)
                console.log(res.data)

            }
        });

    }

    const handleMakeAdmin = (user) => {

        axiosSecure.patch(`/users/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
            

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is as admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    refetch();

                }
            })







    }



    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All user:{users.length}</h2>
                <h2 className="text-3xl">Total user</h2>

            </div>

            <div className="overflow-x-auto sm:overflow-visible">
                <table className="table-auto w-full text-left">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?    <button className="btn btn-success"> Admin</button>  : 

                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg ">
                                            <button className="btn btn-success">Make Admin</button>
                                        </button>

                                    }

                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg ">
                                        <button className="btn btn-error">Delete</button>

                                    </button>
                                </td>
                            </tr>)
                        }



                        {/* <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;