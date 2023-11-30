
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Ratings from '../Rating/Rating';
import Banner from './Banner/Banner';
import SixCamp from './Camps/SixCamp';
import Swiperimg from './SwiperImg/Swiperimg';
import Section from './Section/Section';

const Home = () => {
    AOS.init();
    return (
        <div className='max-h-screen'>
            <Banner></Banner>
            <div className='my-9'>
            <h3 data-aos="fade-right" className='text-center my-2 text-3xl text-orange-600'>Registered Camps</h3>    
            <SixCamp></SixCamp>
            </div>
            <div>
            <h3 data-aos="fade-left" className='text-center my-2 text-3xl text-orange-600'>Future Camps</h3>
            <Section></Section>
            </div>    
            <Swiperimg></Swiperimg>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;