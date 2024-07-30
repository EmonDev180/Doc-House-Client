import Navber from "../../Shared/Navber/Navber";

import chair1 from '../..//assets/images/chair 1.png'
import { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";
import Footer from "../Home/Footer";
import AvaliableSlots from "../../Components/AvaliableSlots/AvaliableSlots";
import { useSearchParams } from "react-router-dom";
import Calender from "../../Components/Calender/Calender";

const Appoinment = () => {

    const [services, setServices] = useState([])

    const [params, setParams] = useSearchParams()
    const category = params.get('category');

    console.log(category)


    useEffect(() => {
        fetch('/public/sevices.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <Navber></Navber>
            <div className="flex flex-col md:flex-row justify-center mt-12 gap-6 lg:gap-12">
                <div className="mb-6 md:mb-0">
                    <Calender></Calender>
                </div>
                <div>
                    <img src={chair1} alt="" />
                </div>

            </div>
            <div>
                <div className="text-center mt-12">
                    <p>Available Services on April 30, 2022</p>
                    <h2 className="font-bold text-3xl">Please select a service.</h2>
                </div>
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center mt-12 gap-4">
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center font-bold mt-8">
                    <AvaliableSlots></AvaliableSlots>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;