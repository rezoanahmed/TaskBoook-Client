import axios from "axios";


const useAxios = () => {
    const axiosPublic = axios.create({
        baseURL: "https://taskboook.vercel.app"
    })
    return axiosPublic;
};

export default useAxios;