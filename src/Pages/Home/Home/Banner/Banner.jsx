
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {
    return (
      <div className='max-h-screen'>
     <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img  className='h-[80vh] w-full'src="https://i.ibb.co/WBzCK76/pexels-artem-podrez-5726794.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full' src="https://i.ibb.co/M7qhYb6/pexels-anna-shvets-3844581.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full' src="https://i.ibb.co/qB187mJ/pexels-karolina-grabowska-4047186.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full' src="https://i.ibb.co/F6qSKzS/pexels-anna-shvets-4225880.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
      </div>
     
       
    );
};

export default Banner;