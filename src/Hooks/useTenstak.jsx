import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTenstak = () => {
    const { data: cart = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = axios.get('http://localhost:5000')
            return (await res).data
        }
    })
    return [cart]
};

export default useTenstak;