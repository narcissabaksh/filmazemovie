import React from 'react';
import about from '../images/aboutB.jpg';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';


function About() {
  return (
    <div className='overflow-hidden'>
    <div className='w-full h-[450px] text-white relative overflow-hidden'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[400px] bg-gradient-to-r from-black '></div>
        <img className='w-full h-[400px] object-cover' src={about} alt="" />
      </div>

      <div className='absolute w-full top-[6%] p-4 my-5  md:p-8'>
        <div className='flex mb-3 '>
          <Link to={'/'} className='text-white my-3 hover:text-slate-500 text-center transition-all '>Ana səhifə</Link>
          <MdChevronRight className='text-white my-4 text-center hover:text-slate-500' size={20}></MdChevronRight>
          <Link to={'/questions'} className='text-slate-500 my-3 hover:text-white transition-all ml-4'>About</Link>
        </div>
        <h2 className='text-3xl md:text-5xl font-bold'>ABOUT <span className='font-extralight'>US</span></h2>
        <div className='my-6'>
          <p className='mb-5 max-w-[500px] '>Welcome to Filmaze, the ultimate destination for movie enthusiasts! Our platform is designed to cater to your passion for the silver screen. If you have further questions</p>
          <Link to={'contact'} className='text-white border-2 border-white-600 rounded-xl pr-5 pl-5 py-1 pb-1 hover:text-gray-950 hover:bg-white'>Contact Us</Link>
        </div>
      </div>
    </div>
    <div className='ml-10 '>
      <div className=' ml-6  bottom-0 w-full text-white overflow-hidden '>
        <h2 className='text-2xl md:text-3xl font-bold'>Our Vision</h2>
        <p className='my-3 max-w-[450px] sm:[200px]  md:max-w-[1050px]'>Empowering Movie Enthusiasts: Filmaze aims to empower movie enthusiasts by providing a platform that caters to diverse tastes and preferences. Whether you're a fan of classic cinema, a follower of the latest blockbusters, or an indie film aficionado, Filmaze is here to fuel your cinematic journey.</p>
        <p className='my-3  max-w-[450px]  md:max-w-[1050px]'>Community-Centric Approach: We believe in the strength of community. Filmaze is not just a website; it's a gathering place for individuals who share a common passion for movies. Engage in discussions, share your favorite films, and connect with fellow movie lovers from around the globe.</p>
      </div>

      <div className='my-9 ml-6  bottom-0 w-full text-white overflow-hidden '>
        <h2 className='text-2xl md:text-3xl  font-bold'>What We Offer</h2>
        <div className='ml-4'>
          <p className='my-3  max-w-[450px]  md:max-w-[1050px]'><span>• Extensive Movie Library: </span>Dive into our vast collection of movies spanning various genres, including action, romance, comedy, thriller, horror, and more. From Hollywood blockbusters to indie gems, we have it all.</p>
          <p className='my-3  max-w-[450px]  md:max-w-[1050px]'><span>• User-Friendly Interface:  </span>Our website is designed with you in mind, offering a seamless and intuitive browsing experience. Easily search for your favorite movies, discover new titles, and create personalized playlists.</p>
          <p className='my-3  max-w-[450px]  md:max-w-[1050px]'><span>• High-Quality Streaming: </span>Enjoy HD streaming of your favorite movies without any interruptions. Whether you're streaming on your computer, tablet, or smartphone, Filmaze delivers exceptional quality every time.</p>
          <p className='my-3  max-w-[450px]  md:max-w-[1050px]'><span>• Exclusive Content: </span>Stay updated with the latest movie news, reviews, and interviews with filmmakers. Explore exclusive behind-the-scenes content and get a glimpse into the world of cinema like never before.</p>
          <p className='my-3  max-w-[450px]  md:max-w-[1050px]'><span>• Community Engagement:  </span>Join our vibrant community of movie enthusiasts to discuss your favorite films, share recommendations, and connect with like-minded individuals from around the globe.</p>
        </div>
        
      </div>

      <div className='my-9 ml-6  bottom-0 w-full text-white overflow-hidden '>
        <h2 className='text-2xl md:text-3xl  font-bold'>Our Commitment to You</h2>
        <div className='my-1'>
          <p className='my-3  max-w-[450px]  md:max-w-[1050px]'>At Filmaze, your satisfaction is our top priority. We are committed to providing you with a safe, secure, and enjoyable movie-watching experience. Whether you're watching alone, with friends, or with family, we strive to exceed your expectations at every turn.</p>
        </div>
        
      </div>

      <div className='my-9 ml-6  bottom-0 w-full text-white overflow-hidden '>
        <h2 className='text-2xl md:text-3xl font-bold'>Get Started Today</h2>
        <div className='my-1'>
          <p className='my-3  max-w-[450px] md:max-w-[1050px]'>Ready to embark on your cinematic journey? Sign up for free and start exploring the wonderful world of movies with Filmaze. Whether you're in the mood for a classic film, a thrilling blockbuster, or an indie masterpiece, we've got you covered.</p>
          <p className='my-3  max-w-[450px] md:max-w-[1050px]'>Join us at Filmaze and let the magic of movies unfold!</p>
          <Link to={'/signup'} className='text-blue-500 border-2 my-6 border-blue-600 rounded-xl pr-2 pl-2 py-1 pb-1  hover:bg-white'>Sign Up</Link>
        </div>
        
      </div>

      </div>
    </div>
  );
}

export default About;
