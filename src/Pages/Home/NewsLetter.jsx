import { FaPhoneVolume } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";


const NewsLetter = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        const date = form.date.value;
        const time = form.time.value;

        console.log(name,email,date,time)
        
    }
    return (
        <div className="flex flex-col lg:flex-row bg-emerald-950 h-auto lg:h-[400px] mt-12">
            <div className=" w-full lg:w-1/2 m-8 lg:m-16">
                <h1 className="text-3xl lg:text-5xl font-bold text-white">Contect With  Us</h1>
                <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus possimus culpa laudantium asperiores labore esse incidunt? Magni, necessitatibus sed?</p>
                <div className="flex text-white mt-4">

                    <FaPhoneVolume className="text-3xl" />

                    018234639463

                </div>
                <div className="flex text-white mt-4">

                    <IoLocation className="text-3xl" />

                    Dhanmondi,Dhaka,Bangladesh

                </div>


            </div>

            <div className="w-full  lg:w-1/2 m-8 lg:m-16 mt-12 lg:mt-12">


                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 m-12">
                    <input type="date" name="date" placeholder="Date" className="input input-bordered  " required />
                    <input type="time" name="time" placeholder="time" className="input input-bordered " required />
                       
                    </div>

                    <button  className="btn btn-warning btn-block">Book Now</button>



                </form>






            </div>
        </div>
    );
};

export default NewsLetter;