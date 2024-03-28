import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Pagination from './Pagination.jsx';
import { Link } from 'react-router-dom';

function Discover() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Genres fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=cd45e063417d7854ad7fef896e88dcfc&language=en'
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchData();
  }, []);

  // Fetch movies by selected genre
  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        let response;
        if (selectedGenre) {
          response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=cd45e063417d7854ad7fef896e88dcfc&language=en&with_genres=${selectedGenre}`
          );
        } else {
          response = await axios.get(
            'https://api.themoviedb.org/3/discover/movie?api_key=cd45e063417d7854ad7fef896e88dcfc&language=en'
          );
        }
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMoviesByGenre();
  }, [selectedGenre]);

  // Pagination logic
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Current page's last movie index
  const indexOfLastPost = currentPage * postsPerPage;
  // Current page's first movie index
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Get current page's movies
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  // Toggle burger menu
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div>
      <div>
        {/* Non-burger menu */}
        {!isBurgerMenuOpen && !isMobile && (
          <div className='flex space-x-4 ml-20 justify-center'>
            <div className='relative my-28 overflow-hidden'>
              <button
                onClick={() => setSelectedGenre('')}
                className='m-1 text-white mr-4 border-2 border-white-600 rounded-full pr-7 pl-7 py-1 pb-1 hover:scale-110 transition-all'
              >
                All
              </button>
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                  className='m-1 text-white mr-4 border-2 border-white-600 rounded-full pr-7 pl-7 py-1 pb-1 hover:scale-110 transition-all'
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Responsive burger menu */}
        <div className='flex justify-end'>
          <button
            className='block md:hidden text-white my-20 p-2 focus:outline-none'
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
        </div>

        {/* Burger menu content */}
        {isBurgerMenuOpen && (
          <div className='flex flex-col md:hidden'>
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => {
                  setSelectedGenre(genre.id);
                  toggleBurgerMenu();
                }}
                className='text-white py-2 px-4 block hover:bg-gray-700'
              >
                {genre.name}
              </button>
            ))}
          </div>
        )}

        <div className='overflow-hidden'>
          <div className='grid grid-cols-5 gap-5 object-scale-down'>
            {currentPosts.map((item, index) => (
              <div className='justify-center flex' key={index}>
                <div key={index} className='relative inline-block'>
                  <img
                    className='rounded-xl w-[180px]'
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                  />
                  <div className='rounded-xl p-4 absolute top-0 left-0 w-full h-full overflow-hidden hover:bg-black/80 opacity-0 hover:opacity-80 text-white z-[100]'>
                    <div className='flex flex-col justify-center h-full'>
                      <p className='white-space-normal text-2xl md:text-sm font-bold '>
                        {item.title}
                      </p>
                      <p className='text-gray-400 white-space-normal text-[13px] md:text-sm text-xs text-left'>
                        Released | <span className='text-sm'>{item.release_date}</span>
                      </p>

                      <p>
                        {like ? (
                          <FaHeart className='absolute top-4 right-4 text-gray-300' />
                        ) : (
                          <FaRegHeart className='absolute top-4 right-4 text-gray-300' />
                        )}
                      </p>
                      <Link to={`/movie/${item.id}/movie`}>
                        <p className='text-sm my-4'>Learn more..</p>{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>



          <div className='m-10'>
            <Pagination totalPosts={movies.length} postsPerPage={postsPerPage} paginate={paginate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
