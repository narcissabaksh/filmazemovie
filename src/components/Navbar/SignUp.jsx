import React, { useState } from 'react';
import signup from '../images/signupback.jpg';
import { MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function SignUp() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div data-aos="fade-left" className='flex justify-center'>

      <div className='flex justify-center my-16 lg:my-14 lg:w-1/2 flex-col lg:flex-row items-center'>
        <form onSubmit={handleSubmit} className='w-full max-w-md my-14'>
          <div className='text-white '>
            <h2 className='text-3xl md:text-5xl font-extralight text-center mb-4'>SIGN UP</h2>
          </div> 
          <div className="grid grid-cols-1 gap-4 md:w-[400px]">
            <label htmlFor="fullName" className="text-sm text-zinc-400 mb-1 my-2">FULL NAME</label>
            <input  
              id="fullName" 
              name="fullName" 
              type="text" 
              autoComplete="name" 
              required 
              className="border rounded border-gray-400 bg-transparent text-white mb-6 p-1" 
            />
            <label htmlFor="email" className='text-sm text-zinc-400 mb-1 my-2'>E-MAIL ADDRESS</label>
            <input   
              onChange={(e) => setEmail(e.target.value)}
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email"  
              required 
              className="border rounded border-gray-400 bg-transparent text-white mb-6 p-1" 
            />
            <label htmlFor="password" className='text-sm text-zinc-400 mb-1 my-2'>PASSWORD</label>
            <input 
              onChange={(e) => setPassword(e.target.value)}
              id="password" 
              name="password" 
              type="password" 
              autoComplete="current-password" 
              required 
              className="border rounded border-gray-400 bg-transparent text-white p-1"  
            />
            <button 
              type='submit' 
              className="flex justify-between bg-transparent border text-gray-900 bg-white border-gray-400 text-gray hover:text-white hover:bg-transparent hover:border-white hover:border px-4 py-2 my-6 rounded">
              Sign Up <MdChevronRight className='my-0.5 text-center' size={20} />
            </button>
            <div className='flex justify-between items-center text-sm text-gray-600'>
              <p>
                <input type="checkbox" className='mr-2 my-0.5' />
                Accept Terms & Conditions
              </p>
              <p>Need help?</p>
            </div>
            <p className='py-8 text-center'>
              <span className='text-gray-600'>Already have an account?</span>
              <Link className='text-white ml-1' to={'/signin'}>Sign In</Link>
            </p>
          </div>
        </form>
      </div>

      <div className='text-white relative overflow-hidden hidden lg:block lg:w-1/2'>
        <div className='relative overflow-hidden'>
          <div className='absolute w-full h-full rounded bg-gradient-to-t from-black opacity-95'></div>
          <img className='rounded object-cover w-full h-full min-w-full' src={signup} alt="" />
        </div>
        <div className='absolute w-full left-[20%] top-[20%] p-4 my-5 md:p-8'>
          <h2 className='text-3xl md:text-5xl font-extralight max-w-[300px]'>Create your Account</h2>
          <p className='font-extralight my-4 max-w-[300px] text-sm'>Welcome to Filmaze, we're happy to see you </p>
        </div>
      </div>
    
    </div>
  )
}

export default SignUp;
