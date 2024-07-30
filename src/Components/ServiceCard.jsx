
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal/Modal";




const ServiceCard = ({service}) => {

    const [params,setParams] = useSearchParams()

    const {img,title} = service;

    const handleOnclick = () => {


        const items =  params.get('category')

        console.log(items)
     

    

      


    }

  


    return (
        <div onClick={handleOnclick} className="h-24 w-64  border-solid border-2 border-gray-100">
            <div className="flex items-center gap-4">
                <img className="mt-4" src={img} alt="" />
                <h2 className="text-2xl font-bold">{title}</h2>
              
            </div>
        </div>
    );
};

export default ServiceCard;