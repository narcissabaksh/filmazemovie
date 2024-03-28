import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import axios from 'axios';

const Main = () => {
  const [movies, setMovies] = useState([]); 

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  const overviewTruncate = (str, num) => {
    if(str?.length > num){
      return str.slice(0,num) + '...';
    } else {
      return str;
    }
  };

  return (

    <div className='w-full h-[550px] text-white'>
      
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
        <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
      
      <div className='absolute w-full top-[30%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold max-w-[550px]'>{movie?.title}</h1>
        <div className='flex space-x-4  my-4'>
         <button className='text-white border-2 border-white-600 rounded-xl pr-5 pl-5 py-1 pb-1 hover:text-gray-950 hover:bg-white ' >Play Now</button>
         <button className='text-gray-900 bg-white rounded-xl pr-5 ml-4 pl-5 py-1 pb-1 hover:text-white hover:bg-transparent hover:border-white hover:border-2' >Add to Watchlist</button>
        </div>

        <p className='text-gray-400 text-sm'  >Released | <span>{movie?.release_date}</span></p>
        <p className="my-4 w-full md:max-w-[80%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{overviewTruncate(movie?.overview, 180)}</p>
      </div>

      
      
    </div>
  );
}

export default Main;
