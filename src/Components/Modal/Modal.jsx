
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Modal = ({ slot, onClose }) => {

    console.log(slot)


    const axiosSecure = useAxiosSecure();



    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const date = form.date.value;
        const time =  form.time.value;

        const name = form.name.value;

        const tel = form.tel.value;
        const email = form.email.value;



     

        const bookingInfo  = {
            Date:date,
            Time:time,
            Name:name,
            Phone:tel,
            email:email,
            Title:slot.title
        }




        console.log(bookingInfo)



        axiosSecure.post('/bookings',bookingInfo)
            .then((res)=> {
                console.log(res.data)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
               



              


               



            })
            .catch((error) => {
                console.log(error)
            })
          
    
    
      

       
        





        


    
      
    }
    return (

        <div>
            <div className="card bg-gray-200 w-full max-w-sm shrink-0 shadow-2xl">

            <div className="ml-32  ">
                        <button className="bg-red-500 rounded-full p-2"  onClick={onClose}>X</button>
                    </div>

                <div>
                    <h2 className="text-3xl">{slot.title}</h2>
                </div>
                <form onSubmit={handleSubmit} className=" card-body p-12">



                   



                    <div className="form-control">

                        <input type="date" name="date" className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <input type="time"  name="time"  className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        
                        <input type="tel" name="tel" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button  className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;