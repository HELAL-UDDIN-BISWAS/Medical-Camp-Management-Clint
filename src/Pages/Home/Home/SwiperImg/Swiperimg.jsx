import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const Swiperimg = () => {
  return (
    <div className='my-5'>
      <div className='text-center my-6'>
      
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img className='rounded h-[500px]' src={'https://i.ibb.co/1Q8Rmfr/pexels-byb-byb-19332231.jpg'} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded h-[500px]' src={'https://i.ibb.co/K6Z2B3g/pexels-rfstudio-3825586.jpg'} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded h-[500px]' src={'https://i.ibb.co/MNZTMbt/pexels-goran-grudi-19328506.jpg'} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded h-[500px]' src={'https://i.ibb.co/9yt9DkC/pexels-mart-production-7088841.jpg'} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded h-[500px]' src={'https://i.ibb.co/rpTmbNZ/pexels-mart-production-7088530.jpg'} alt="" />
          <h2></h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperimg;