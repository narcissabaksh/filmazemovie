import React from 'react';
import logo from '../images/logo-movie.png'; 
import background from '../images/footerback.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function Footer() {
  return (
    <div className='relative w-full h-[600px]'>
      <div className='absolute inset-0'>
        <img className='absolute inset-0 object-cover h-[950px] md:w-full md:h-[600px]' src={background} alt="" />
        <div className='absolute inset-0 bg-gradient-to-r  from-black'></div>
      </div>

      <div className='absolute top-[10%] w-full text-white'>

        <div data-aos="fade-down" className=' justify-between  lg:flex '>
          <Link to='/'>
          <img src={logo} alt="logo" className='cursor-pointer w-40 h-10 ml-20 my-20 mb-10' />
         </Link>

         <form data-aos="fade-down"  action="" className="relative ml-10 my-16 md:mr-28">
            <p className='text-sm font-thin ml-2 mb-2'>Subscribe for monthly <span className='font-bold'>movie updates</span> </p>
            <div className='relative w-[440px]'>
              <input className=" border rounded-full border-gray-400 bg-transparent w-[300px] md:w-[440px] py-2 pb-2 pl-4 pr-4 text-white  placeholder-white" type="email" placeholder='Enter your email' />
              <button className='absolute my-1 pl-6 pr-6 py-1 pb-1 left-80 top-0  border rounded-full border-gray-400 bg-transparent text-white'>Subscribe</button>
            </div>
          </form>
        </div>

        <div data-aos="fade-down" className='justify-center md:justify-start md:flex my-6 ml-20 '>
          <div className='flex flex-col mr-20 mb-9'>
            <h3 className='font-bold mb-5'>Legal</h3>
            <Link className='mb-2' to={'/termsofuse'}>Terms of use</Link>
            <Link className='mb-2' to={'/privacy'}>Privacy Statement</Link>
          </div>

          <div data-aos="fade-down" className='flex flex-col mr-20 mb-9'>
            <h3 className='font-bold mb-5'>Help</h3>
            <Link className='mb-2' to={'/questions'}>Most Asked Questions</Link>
          </div>

          <div data-aos="fade-down" className='flex flex-col'>
            <h3 className='font-bold mb-5'>More..</h3>
            <Link className='mb-2' to={'/contact'}>Contact</Link>
            <Link to={'/about'}>About</Link>
          </div>
        </div>
        <div className='flex flex-wrap items-center text-sm justify-between m-20'>
          <p className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© Made by Narcissa 2024</p>

          <div className=''>
            <Link className='m-2 hover:underline me-4 md:me-6' to={'/about'}>About</Link>
            <Link className='m-2 hover:underline me-4 md:me-6'  to={'/privacy'}>Privacy</Link>
            <Link className='m-2 hover:underline me-4 md:me-6' to={'/contact'}>Contact</Link>
          </div>
        </div>
       </div>
      
       
    </div>
  );
}




export default Footer;
