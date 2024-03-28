import React from 'react';
import about from '../images/aboutB.jpg';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import Accordian from './Accordian'


function TermsOfUse() {
  return (
    <div className='overflow-hidden '>
    <div className='w-full h-[450px] text-white relative overflow-hidden'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[400px] bg-gradient-to-r from-black '></div>
        <img className='w-full h-[400px] object-cover' src={about} alt="" />
      </div>

      <div className='absolute w-full top-[6%] p-4 my-5 md:p-8'>
        <div className='flex mb-3 '>
          <Link to={'/'} className='text-white my-3 hover:text-slate-500 text-center transition-all '>Ana səhifə</Link>
          <MdChevronRight className='text-white my-4 text-center hover:text-slate-500' size={20}></MdChevronRight>
          <Link to={'/termsofuse'} className='text-slate-500 my-3 hover:text-white transition-all ml-4'>Terms of Use</Link>
        </div>

        <div className='ml-12  md:ml-0'>
          <h2 className='text-2xl  md:text-5xl  my-6 font-bold'>TERMS OF<span className='font-extralight ml-3'>USE</span></h2>
        <div className='my-6'>
          <p className='mb-5 max-w-[400px] md:max-w-[700px]'>These Terms of Use  govern your access to and use of the Filmaze website and any related services provided by Filmaze. By accessing or using the Website, you agree to be bound by these Terms and our Privacy Policy.</p>
        </div>
        </div>
        
      </div>
    </div>
    <div className=' ml-10'>
        <div className=' ml-6  bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'>1. Use of the Website</h2>
         <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'>1.1. <span>License:</span>  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Website for your personal, non-commercial purposes.</p>
         <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'>1.2. <span>User Accounts:</span>You may be required to create an account to access certain features of the Website. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
         <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'>1.3. <span>Prohibited Activities:</span> You agree not to engage in any of the following prohibited activities:</p>
            

            <div className='ml-4 my-8'>
             <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>•</span> Use the Website for any illegal or unauthorized purpose;</p>
             <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>•</span> Modify, adapt, or hack the Website or modify another website to falsely imply that it is associated with Filmaze;</p>
             <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>•</span> Attempt to gain unauthorized access to any portion or feature of the Website;</p>
             <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>•</span> Interfere with or disrupt the operation of the Website or servers or networks connected to the Website;</p>
             <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>•</span> Collect or store personal information about other users of the Website;</p>
             <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>•</span> Use any automated means to access the Website or collect data from the Website;</p>
             <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>•</span> Circumvent any measures we may use to prevent or restrict access to the Website.</p>
            </div>
        </div>

        <div className=' ml-6  bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'>2. Intellectual Property</h2>
         <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'>2.1. <span> Content:</span>  All content on the Website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Filmaze or its licensors and is protected by copyright and other intellectual property laws.</p>
         <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'>2.2. <span> Use of Content: </span>You may access and view the content on the Website solely for your personal, non-commercial use. Any other use, including but not limited to reproduction, distribution, modification, or republication of the content, is strictly prohibited without our prior written consent.</p>
        </div>

        <div className=' ml-6  bottom-0 w-full text-white overflow-hidden my-8'>
         <h2 className='text-2xl md:text-3xl font-bold'>3. Disclaimer of Warranties</h2>
         <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'>2.1. <span> Content:</span>  All content on the Website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Filmaze or its licensors and is protected by copyright and other intellectual property laws.</p>
         <p className='my-3   max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'>2.2. <span> Use of Content: </span>You may access and view the content on the Website solely for your personal, non-commercial use. Any other use, including but not limited to reproduction, distribution, modification, or republication of the content, is strictly prohibited without our prior written consent.</p>
        </div>

    </div>
    </div>
  );
}

export default TermsOfUse;
