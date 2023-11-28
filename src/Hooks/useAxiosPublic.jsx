import axios from "axios";

const axiosPublic = axios.create({
    baseURL: ' https://y-tau-one.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;

};

export default useAxiosPublic;