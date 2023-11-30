

import Ratings from '../Rating/Rating';
import Banner from './Banner/Banner';
import Swiperimg from './SwiperImg/Swiperimg';

const Home = () => {
    return (
        <div className='max-h-screen'>
            <Banner></Banner>
            <Swiperimg></Swiperimg>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;