import React from 'react';
import SavedShows from './SavedShows';
import account from '../images/myaccountback.jpg';


const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[300px] object-cover'
          src= {account}
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='font-extraligh text-3xl md:text-5xl '>MY LIST</h1>
        </div>
      </div>
      <SavedShows/>
    </>
  );
};

export default Account;