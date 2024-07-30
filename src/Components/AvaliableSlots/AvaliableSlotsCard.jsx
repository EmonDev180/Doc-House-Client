import { useState } from "react";
import Modal from "../Modal/Modal";


const AvaliableSlotsCard = ({ slot }) => {

    console.log(slot)




    const [isOpen,setIsOpen] = useState(false)

 

    const { img, title, category,time,button } = slot;

    return (
        <div className="flex justify-center items-center">
    <div className="h-80 w-80 border-solid border-2 border-gray-100 flex flex-col items-center justify-center p-4">
        <img className="mt-4" src={img} alt="" />
        <div className="space-y-4 mt-4 text-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{time}</p>
            <button onClick={() => setIsOpen(true)} className="btn btn-warning">{button}</button>

            {
                isOpen && <Modal onClose={() => setIsOpen(false)} slot={slot}></Modal>
            }
        </div>
    </div>
</div>

    );
};

export default AvaliableSlotsCard;