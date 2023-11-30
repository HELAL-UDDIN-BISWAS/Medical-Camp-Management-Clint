import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Ratings= () => {
    const axiosPublic=useAxiosPublic()
        const [ratings, setrating] = useState([])
        useEffect(() => {
            fetch('https://y-tau-one.vercel.app/rating')
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setrating(data)
                })
        }, [])
        console.log(ratings)
    return (
        <div className='mb-12'>
            <h2 className='text-2xl text-lime-400 text-center'>User Rating</h2>
        <div className=' w-full'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div className=''>
                    {
                        ratings?.map(rating => <SwiperSlide key={rating._id}>
                            <div className='w-4/5 mx-auto text-center'>
                                <div className='text-center flex justify-center items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={parseInt(rating.rating)}
                                    readOnly
                                />
                                </div>
                                <h2 className='text-center text-red-400 text-2xl '>{rating.name}</h2>
                                <p className='text-center my-2'>{rating.email}</p>
                            </div>

                            {console.log(rating)}
                        </SwiperSlide>
                        )
                    }
                </div>
            </Swiper>
        </div>
    </div>
    );
};

export default Ratings;