import { useEffect, useState } from "react";
import AvaliableSlotsCard from "./AvaliableSlotsCard";



const AvaliableSlots = () => {
    const[slots,setSlots] = useState()



    useEffect(() => {
        fetch('https://doc-house-server-three.vercel.app/slots')
        .then(res => res.json())
        .then(data => setSlots(data))

    },[setSlots])
    return (
        <div>
            <h2 className="text-3xl text-center">Available slots for Teeth Orthodontics.</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4 mt-4 ">
            
            {
                slots?.map(slot => <AvaliableSlotsCard key={slot._id} slot={slot}></AvaliableSlotsCard>)
            }
        </div>
        </div>
    );
};

export default AvaliableSlots;