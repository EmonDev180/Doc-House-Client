import { useLoaderData } from "react-router-dom";
import Navber from './../../Shared/Navber/Navber';
import Banner from "../Home/Banner";
import Footer from "../Home/Footer";




const DoctorProfile = () => {

    const [data] = useLoaderData()

    console.log(data)










    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>

            <div>
                <div className="bg-white mt-12 p-4 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center lg:items-start">
                        <img
                            src={data.image}
                            className="w-full lg:w-auto lg:max-w-xs object-cover" />
                        <div>
                            <h1 className="text-3xl font-bold">{data.name}</h1>
                            <h3 className=" text-gray-400 mt-2">{data.position}</h3>
                            <h4 className=" text-gray-400 mt-2">{data.availability}</h4>
                            <h4 className=" text-gray-400 mt-2">{data.location}</h4>
                    
                        </div>
                    </div>
                </div>


                <div className="bg-white mt-12 p-4 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">

                        <div>
                            <h2 className="text-3xl font-bold">About Me</h2>
                            <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis velit nulla facere animi id laudantium tenetur. Accusantium, assumenda soluta! Qui, animi delectus officia nisi aliquam expedita iusto iure optio ipsam.amet consectetur adipisicing elit. Officiis velit nulla facere animi id laudantium tenetur. Accusantium, assumenda soluta! Qui, animi delectus officia nisi aliquam expedita iusto iure optio ipsam?</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-32 mt-8">
                        <div className="w-full lg:w-1/2">
                            <h2 className=" text-2xl font-bold">Education</h2>
                            <ul className="list-inside">
                                <h4 className="font-bold">American Dental Medical University</h4>
                                <p>BDS</p>
                                <p>1998 - 2003</p>
                            </ul>


                        </div>
                        <div>
                            <h2 className=" w-full lg:w-1/2 text-2xl font-bold">Awards</h2>

                            <ul className="list-inside mt-4">
                                <li>

                                    <h4 className="font-bold">Humanitarian Award</h4>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                                </li>


                                <li className="mt-4">

                                    <h4 className="font-bold">Humanitarian Award</h4>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                                </li>


                                <li className="mt-4">

                                    <h4 className="font-bold">Humanitarian Award</h4>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                                </li>



                            </ul>


                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DoctorProfile;