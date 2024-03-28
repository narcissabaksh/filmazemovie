import React, { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import signin from '../images/signinback.jpg';
import { MdChevronRight } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function SignIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
 

  return (
    <div>

      <div data-aos="fade-right" className='flex justify-center'>
        <div className='text-white relative overflow-hidden hidden lg:block'>
          <div className='absolute w-full h-[1000px] rounded bg-gradient-to-r from-black opacity-95'></div>
          <img className='rounded object-cover w-full h-full min-w-full' src={signin} alt="" />
          <div className='absolute w-full left-[20%] top-[20%] p-4 my-5 md:p-8'>
            <h2 className='text-4xl md:text-5xl font-extralight max-w-[300px]'>Welcome back to Filmaze</h2>
            <p className='font-extralight my-4 max-w-[300px] text-sm'>We're happy to see you again please enter your email and password</p>
          </div>
        </div>
        

        <div className='flex justify-center my-16'>
          {error ? <p className='p-3 bg-red-800 max-w-[400px] my-2'>{error}</p> : null}
          <form onSubmit={handleSubmit} className=''>
            <div className='text-white my-14'>
              <h2 className='text-3xl justify-center md:text-5xl font-extralight text-center mb-4'>SIGN IN</h2>
            </div> 

            <div className="grid grid-col-1 ml-10 md:w-[400px]">
              <label htmlFor="email" className='text-sm text-zinc-400 mb-1 my-2'>E-MAIL ADDRESS</label>
              <input  onChange={(e) => setEmail(e.target.value)}
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email"  
                required 
                className="border rounded border-gray-400 bg-transparent text-white mb-6 p-1 my-4"
              />

              <label className='text-sm text-zinc-400 mb-1 my-3'>PASSWORD</label>
              <input  onChange={(e) => setPassword(e.target.value)}
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required className="border rounded border-gray-400 bg-transparent text-white p-1 my-4 w-full" 
              />

              <button type='submit' 
                className="flex justify-between bg-transparent border text-gray-900 bg-white border-gray-400 text-gray hover:text-white hover:bg-transparent hover:border-white hover:border px-4 py-2 my-6 rounded">
                Sign in <MdChevronRight className='my-0.5 text-center' size={20} />
              </button>

              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input type="checkbox" className='mr-2 my-0.5' />
                  Remember me
                </p>
                <p>Need help?</p>
              </div>

              <p className='py-8'>
                <span className='text-gray-600'>Don't have an account?</span>
                <Link className='text-white ml-1' to={'/signup'}>Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
