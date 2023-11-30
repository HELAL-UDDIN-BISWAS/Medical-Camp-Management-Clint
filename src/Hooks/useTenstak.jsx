import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Shared/Provider/Provider";

const useTenstak = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://y-tau-one.vercel.app/participant?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]

};

export default useTenstak;