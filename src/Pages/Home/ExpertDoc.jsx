import { useEffect } from "react";
import { useState } from "react";
import ExpertDocCard from "./ExpertDocCard";


const ExpertDoc = () => {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://doc-house-server-three.vercel.app/expartDoc')
            .then(res => res.json())

            .then(data => setDatas(data))

    }, [])
    return (

        <div>
            <h2 className="text-center text-3xl font-bold mt-4">Expart Dentail Doctor</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-12 justify-center">
                {
                    datas.map(data => <ExpertDocCard key={data._id} data={data}></ExpertDocCard>)
                }
            </div>

        </div>

    );
};

export default ExpertDoc;