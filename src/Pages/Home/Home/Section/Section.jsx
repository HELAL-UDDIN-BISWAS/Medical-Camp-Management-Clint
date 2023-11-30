import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './../../../../App.css'

const Section = () => {
    AOS.init();
    return (
        <div className='featured my-10 '>

        <div className='my-10'>
        </div>
        <div className='grid md:grid-cols-2 w-2/3 justify-center items-center mx-auto gap-5 py-10'>
          <div  data-aos="fade-right">
              <img className='h-[250px] w-[350px]' src={'https://i.ibb.co/K6Z2B3g/pexels-rfstudio-3825586.jpg'} alt="" />
          </div>
          <div  data-aos="fade-left">
              <h3 className='2xl text-white'>March 20, 2023</h3>
              <h3 className='2xl text-white'>WHERE CAN I GET SOME?</h3>
              <p  className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptat e facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          </div>
        </div>
      </div>
    );
};

export default Section;