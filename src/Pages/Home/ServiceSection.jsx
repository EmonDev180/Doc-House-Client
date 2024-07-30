
import { FiClock } from "react-icons/fi";



const ServiceSection = () => {
    return (
        <div className='' >
            <div className="m-4 sm:m-6 md:m-12 lg:m-24 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">


                <div className="ml-0 sm:ml-4 md:ml-8 lg:ml-12">
                    <img className="w-[1200px] h-full" src="https://i.ibb.co/BCJtfG8/Rectangle-20078.png" alt="" />
                </div>
                <div className="">
                    <h2 className="text-2xl sm:text-3xl font-bold">Our Services</h2>
                    <p className="font-bold mt-4 text-sm sm:text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <img className="mt-4" src="https://i.ibb.co/GFzKcmd/Rectangle-10.png" alt="" />
                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">Electro Gastrology Therapy</h2>
                    <p className="font-bold mt-4 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit officia similique inventore tenetur aut laudantium minus est consequatur fugiat cupiditate neque illum non ducimus ratione, nesciunt quae! In, culpa odio temporibus consectetur consequatur dolores qui. Pariatur quae doloremque corporis!</p>
                </div>
            </div>
        
        


            <div className="flex flex-wrap justify-center gap-4">

                <div>
                    <img src="https://i.ibb.co/Pm7b6Pm/Rectangle-13.png" alt="" />
                    <div className=" flex justify-center  text-white  -mt-32 gap-2  ">
                        <div className="mt-2">
                        <FiClock />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold ">Opening hours </h3>
                            <p className="">Open 9.am to 5.00pm Everday</p>
                        </div>


                    </div>

                </div>

                <div>
                    <img src="https://i.ibb.co/Pm7b6Pm/Rectangle-13.png" alt="" />
                    <div className=" flex justify-center  text-white  -mt-32 gap-2  ">
                        <div className="mt-2">
                        <FiClock />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold ">Opening hours </h3>
                            <p className="">Open 9.am to 5.00pm Everday</p>
                        </div>


                    </div>

                </div>

                <div>
                    <img src="https://i.ibb.co/Pm7b6Pm/Rectangle-13.png" alt="" />
                    <div className=" flex justify-center  text-white  -mt-32 gap-2  ">
                        <div className="mt-2">
                        <FiClock />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold ">Opening hours </h3>
                            <p className="">Open 9.am to 5.00pm Everday</p>
                        </div>


                    </div>

                </div>



            </div>
        </div>
    );
};

export default ServiceSection;