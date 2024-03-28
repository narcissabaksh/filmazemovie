import React from 'react';
import privacy from '../images/aboutB.jpg';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';


function PrivacyStatement() {
  
  return (
    <div className='overflow-hidden'>
    <div className='w-full h-[450px] text-white relative overflow-hidden'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[400px] bg-gradient-to-r from-black '></div>
        <img className='w-full h-[400px] object-cover' src={privacy} alt="" />
      </div>

      <div className='absolute w-full top-[6%] p-4  my-5 md:p-8'>
        <div className='flex mb-3 '>
          <Link to={'/'} className='text-white my-3 hover:text-slate-500 text-center transition-all '>Ana səhifə</Link>
          <MdChevronRight className='text-white my-4 text-center hover:text-slate-500' size={20}></MdChevronRight>
          <Link to={'/privacy'} className='text-slate-500 my-3 hover:text-white transition-all ml-4'>Privacy Statement</Link>
        </div>

        <div className='ml-12  md:ml-0'><h2 className='text-3xl md:text-5xl font-bold'>PRIVACY <span className='font-extralight'>STATEMENT</span></h2>
        <div className='my-6'>
        <p className='mb-5 text-slate-300 max-w-[500px]'>Last Updated: 03/18/2024</p>
          <p className='mb-5 max-w-[400px] md:max-w-[700px]'>At Filmaze, we are committed to protecting your privacy. This Privacy Statement outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.</p>
        </div>
        </div>
        
      </div>
    </div>
    <div className=' ml-10'>
       <div className=' ml-6  bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>1. </span>Information We Collect:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>Personal Information: We may collect personal information such as your name, email address, and any other information you provide voluntarily when you register an account, subscribe to our newsletter, participate in surveys, or interact with our website and services.Personal Information: We may collect personal information such as your name, email address, and any other information you provide voluntarily when you register an account, subscribe to our newsletter, participate in surveys, or interact with our website and services.</p>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>Usage Data: We automatically collect information about your usage of our website, including your IP address, browser type, pages visited, and other usage statistics.</p>     
        </div>

        <div className=' ml-6 my-9 bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>2. </span>Use of Information:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>We may use the information we collect to provide, maintain, and improve our services, customize your experience, communicate with you, and send you promotional materials.</p>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>We may also use your information to analyze trends, track user interactions, and gather demographic information for internal purposes.</p>     
        </div>


        <div className=' ml-6 my-9 bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>3. </span>Disclosure of Information:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided that they agree to keep this information confidential.</p>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>We may also disclose your information if required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</p>     
        </div>

        <div className=' ml-6 my-9 bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>4. </span>Cookies and Tracking Technologies:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>We use cookies and similar tracking technologies to track your activity on our website, improve user experience, and gather information about usage patterns. You can control cookies through your browser settings.</p>
        </div>

        <div className=' ml-6 my-9 bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>5. </span>Third-Party Links:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of these websites before providing any personal information.</p>
        </div>

        <div className=' ml-6 my-9 bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>6. </span>Data Security:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
        </div>

        <div className=' ml-6 my-9  bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>7. </span>Children's Privacy:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we have collected personal information from a child under 13, please contact us immediately.</p>   
        </div>

        <div className=' ml-6 my-9 bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>8. </span>Changes to This Privacy Statement:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] m lg:max-w-[1010px] lg:text-[17px]'><span>• </span>We reserve the right to update or modify this Privacy Statement at any time. Any changes will be effective immediately upon posting the revised Privacy Statement on our website.</p>
        </div>

        <div className=' ml-6 my-9 bottom-0 w-full text-white overflow-hidden '>
         <h2 className='text-2xl md:text-3xl font-bold'><span className='italic font-thin'>9. </span>Contact Us:</h2>
         <p className='my-3 ml-6  max-w-[450px]  md:max-w-[800px] flex lg:max-w-[1010px] lg:text-[17px]'><span>• </span>If you have any questions or concerns about this Privacy Statement or our privacy practices, please <Link to={'/contact'} className='text-white border-2 border-white-600 rounded-xl pr-2 pl-2 py-1 pb-1 hover:text-gray-950 hover:bg-white'>Contact Us</Link>.</p>
        </div>

      
        

      </div>
    </div>
  );
}

export default PrivacyStatement;
