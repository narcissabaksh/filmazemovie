import React from 'react';
import contact from '../images/contactback.jpg';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';

function Contact() {
  return (
    <div className='overflow-hidden'>
      <div className='w-full h-full text-white relative overflow-hidden'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
          <img className='w-full h-[1200px] md:w-full md:h-[780px] object-cover' src={contact} alt='' />
        </div>

        <div className='absolute w-full top-[6%] p-4 my-5 md:p-8'>
          <div className='flex mb-3 '>
            <Link to={'/'} className='text-white my-3 hover:text-slate-500 text-center transition-all'>
              Ana səhifə
            </Link>
            <MdChevronRight className='text-white my-4 text-center hover:text-slate-500' size={20}></MdChevronRight>
            <Link to={'/contact'} className='text-slate-500 my-3 hover:text-white transition-all ml-4'>
              Contact
            </Link>
          </div>

          <div className='lg:flex md:justify-between'>
            <div className='my-16 ml-16'>
              <h2 className='text-3xl md:text-5xl font-extralight '>CONTACT US </h2>
              <p className='mb-5 max-w-[500px]  font-thin my-9'>
                If you have any questions or need any assistance please get in touch
              </p>

              <div className='md:flex text-sm my-14'>
                <div className=''>
                  <p className='text-gray-400'>MAIL:</p>
                  <p className='my-2 cursor-pointer border border-gray-400 border-r-0 border-l-0 border-t-0 border-b-1 w-[200px] md:w-auto'>
                    example@filmaze.com
                  </p>
                </div>

                <div className='md:ml-16'>
                  <p className='text-gray-400'>PHONE:</p>
                  <p className='my-2 cursor-pointer border border-gray-400 border-r-0 border-l-0 border-t-0 border-b-1 w-[200px] md:w-auto'>
                    +994 70 000 11 33
                  </p>
                </div>
              </div>

              <div className='text-sm'>
                <p>BUSINESS HOURS:</p>
                <div className='my-5'>
                  <li className='mb-2'>Monday to Friday: 6:30am -8:30pm</li>
                  <li>Closed on holidays</li>
                </div>
              </div>
            </div>

            <div className='my-16 mr-20'>
              <form className=''>
                <div class='grid grid-col-1 ml-10 lg:w-[400px]'>
                  <label className='text-sm text-zinc-400 mb-1 my-20 lg:my-0'>YOUR NAME</label>
                  <input class='border-b border-gray-400 bg-transparent text-white w-full mb-4' type='text' />

                  <label className='text-sm text-zinc-400 mb-1 my-8'>YOUR E-MAIL</label>
                  <input class='border-b border-gray-400 bg-transparent text-white w-full mb-4 ' type='email' />

                  <label className='text-sm text-zinc-400 mb-1 my-8'>YOUR TEXT MESSAGE</label>
                  <textarea
                    className='text-xl border-b border-gray-400 h-[100px] w-full bg-transparent text-white resize-none placeholder-gray-700 mb-4'
                    maxLength={150}
                    placeholder='If you have any questions or need any assistance'
                  ></textarea>
                  <button
                    type='submit'
                    className='flex justify-between bg-transparent border border-gray-400 text-white hover:bg-white hover:text-black px-4 py-2 rounded'
                  >
                    Submit <MdChevronRight className='my-0.5  text-center' size={20}></MdChevronRight>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
