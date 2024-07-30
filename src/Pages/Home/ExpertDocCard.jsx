import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdEventAvailable, MdOutlineEventAvailable } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";


const ExpertDocCard = ({ data }) => {

    console.log(data)


    const { _id, image, name, availability, fee, position, location } = data;



    return (

        <div>

           

            <div className="card bg-base-100 w-96">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="" />
                </figure>
                <div className=" card text-left ml-12">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <div className=" grid gap-y-2 mt-4 text-gray-500 text-xl">

                        <div className="flex gap-2">
                            <div className="mt-1">
                                <FaLocationDot />
                            </div>
                            <div>
                                {location}
                            </div>


                        </div>


                        <div className="flex gap-2">
                            <div className="mt-1">
                                <MdOutlineEventAvailable />
                            </div>
                            <div>
                                {availability}
                            </div>


                        </div>



                        <div className="flex gap-2">
                            <div className="mt-1">
                                <TbCoinTaka />
                            </div>
                            <div>
                                {fee}
                            </div>


                        </div>






                    </div>

                    <Link to={`/doctorProfile/${_id}`}>

                        <div className="mt-4">
                            <button className="btn btn-wide bg-green-300 ">View Details</button>
                        </div>

                    </Link>





                </div>

            </div>

        </div>




    );
};

export default ExpertDocCard;