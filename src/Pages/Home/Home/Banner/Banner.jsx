
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
      <div className='max-h-screen'>
   <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
            <div>
            <SwiperSlide>
            <img src="https://i.ibb.co/JqfYn8N/pexels-antoni-shkraba-6749778.jpg" />
          </SwiperSlide>
          <div className='flex items-center justify-center text-center w-full'>
          <SwiperSlide >
            <img className='h-96 w-4/6 ' src="https://i.ibb.co/JqfYn8N/pexels-antoni-shkraba-6749778.jpg" />
          </SwiperSlide>
          </div>
          <div className='flex items-center justify-center text-center w-full'>
          <SwiperSlide >
            <img className='h-96 w-4/6 ' src="https://i.ibb.co/JqfYn8N/pexels-antoni-shkraba-6749778.jpg" />
          </SwiperSlide>
          </div>
            </div>
          
        </Swiper>
      </div>
     
       
    );
};

export default Banner;