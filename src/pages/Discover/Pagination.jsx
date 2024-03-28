import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='text-white text-center relative'>
      {pageNumbers.map(number => (
        <button key={number} className='mr-3 border-2 border-white-600 rounded-full pr-2 pl-2 py-1 pb-1 text-center hover:scale-110 transition-all' onClick={() => paginate(number)}>{number}</button>
      ))}
    </div>
  );
};

export default Pagination;
