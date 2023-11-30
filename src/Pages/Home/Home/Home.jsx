

import Ratings from '../Rating/Rating';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='max-h-screen'>
            <Banner></Banner>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;