import React from 'react';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const SixCamp = () => {
    const axiosPublic=useAxiosPublic()
    const {data: camps=[]}=useQuery({
        queryKey:[],
        queryFn: async()=>{
          const res= await axiosPublic.get('/six-camps/')
            return res.data
        }      
    } )
    console.log(camps)
    return (
        <div>
            
        </div>
    );
};

export default SixCamp;