
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
        <SwiperSlide><img  className='h-[80vh] w-full'src="https://i.ibb.co/rpTmbNZ/pexels-mart-production-7088530.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full' src="https://i.ibb.co/MNZTMbt/pexels-goran-grudi-19328506.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full' src="https://i.ibb.co/qB187mJ/pexels-karolina-grabowska-4047186.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full' src="https://i.ibb.co/F6qSKzS/pexels-anna-shvets-4225880.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
      </div>
     
       
    );
};

export default Banner;