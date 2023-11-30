import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Sectiontitle from '../../../Components/sectionTitle/Sectiontitle';
const Swiperimg = () => {
  return (
    <div className='my-5'>
      <div className='text-center my-6'>
        <Sectiontitle
          heading={"ORDER ONLINE"}
          subheading={'---From 11:00am to 10:00pm---'}>
        </Sectiontitle>
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
          <img className='rounded' src={image1} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded' src={image2} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded' src={image3} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded' src={image4} alt="" />
          <h2></h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded' src={image5} alt="" />
          <h2></h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperimg;