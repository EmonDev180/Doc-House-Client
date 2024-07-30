import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://doc-house-server-three.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure;