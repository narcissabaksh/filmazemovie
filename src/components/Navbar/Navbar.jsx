import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo-movie.png'; 
import { Link, useNavigate  } from 'react-router-dom';
import Search from './Search';
import { UserAuth } from '../../context/AuthContext';

function Navbar() {
  // Authentication context
  const { user, signOut } = UserAuth();
  const navigate = useNavigate();

  // Handle signout
  const handleSignout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  // Burger menu state
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const burgerMenuRef = useRef(null);

  // Function to close the burger menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
        setIsBurgerMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Toggle burger menu
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <img src={logo} alt="logo" className='cursor-pointer object-cover w-40 h-10 mr-10' />
      </Link>

      {/* Search bar */}
      <div className='hidden md:block'>
        <Search />
      </div>

      {/* Burger menu */}
      <div ref={burgerMenuRef} className='relative'>
        <button
          className='block lg:hidden text-white p-2 focus:outline-none'
          onClick={toggleBurgerMenu}
        >
          {/* Burger icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>

        {/* Burger menu content */}
        {isBurgerMenuOpen && (
          <div className='absolute top-16 right-0 bg-gray-900 p-4 rounded-md'>
            <Link to='/' className='block text-white py-2 hover:scale-110 transition-all'>Home</Link>
            <Link to='/discover' className='block text-white py-2 hover:scale-110 transition-all'>Discover</Link>
            {user?.email ? (
              <>
                <Link to='/myaccount' className='block text-white py-2 hover:scale-110 transition-all'>My Account</Link>
                <button onClick={handleSignout} className='block text-white py-2 hover:scale-110 transition-all'>Sign Out</button>
              </>
            ) : (
              <Link to='/signin' className='block text-white py-2 hover:scale-110 transition-all'>Sign In</Link>
            )}
            {/* Add search bar in mobile version */}
            <div className='md:hidden'>
              <Search className='block text-white border-2 border-white-600 rounded-full pl-4 pr-10 py-2 hover:scale-110 transition-all w-full' />
            </div>
          </div>
        )}
      </div>

      {/* Desktop menu items */}
      <div className='hidden lg:flex items-center space-x-6'>
        <Link to='/' className='text-white hover:scale-110 transition-all'>Home</Link>
        <Link to='/discover' className='text-white hover:scale-110 transition-all'>Discover</Link>

        {user?.email ? (
          <>
            <Link to='/myaccount' className='text-white border-2 border-white-600 rounded-full pl-6 pr-6 py-2 hover:scale-110 transition-all'>Account</Link>
            <button onClick={handleSignout} className='text-white border-2 border-white-600 rounded-full pl-6 pr-6 py-2 hover:scale-110 transition-all'>Sign Out</button>          </>
        ) : (
          <Link to='/signin' className='text-white border-2 border-white-600 rounded-full pl-6 pr-6 py-2 hover:scale-110 transition-all'>Sign In</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
