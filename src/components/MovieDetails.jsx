import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=cd45e063417d7854ad7fef896e88dcfc`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white">
      <div className='w-full text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full  h-[1200px]  md:h-[780px]  bg-gradient-to-r from-zinc-900'></div>
          <img className='object-cover h-[1200px] md:w-full md:h-[780px]' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />
        </div>
        
        <div  className='absolute w-full top-[10%] p-4 md:p-8'>
          <div className='flex'>
           <Link to={'/'} className='text-white my-3 hover:text-slate-500 text-center transition-all '>Ana səhifə</Link>
           <MdChevronRight className='text-white my-4 text-center hover:text-slate-500' size={20}></MdChevronRight>
           <p  className='text-slate-500 my-3 hover:text-white transition-all ml-4 cursor-pointer'>{movie.title}</p>
          </div>

          <div className="md:flex md:justify-between ">
            <div className="ml-10">
              <h1 className='text-3xl  md:text-5xl font-bold max-w-[500px] my-10'>{movie.title}</h1>
              
              <div className='flex  my-4 text-gray-400'>
                <p className='mr-4 border pr-4 hover:scale-105 transition-all cursor-pointer text-center border-gray-400 border-r-1 border-l-0 border-t-0 border-b-0'>{movie.release_date}</p> 
                <p className='mr-4 border pr-4 hover:scale-105 transition-all cursor-pointer text-center border-gray-400 border-r-1 border-l-0 border-t-0 border-b-0'>{movie?.original_language}</p>
                <p className='mr-4 border pr-4 hover:scale-105 transition-all cursor-pointer text-center border-gray-400 border-r-1 border-l-0 border-t-0 border-b-0'>{movie?.runtime}</p>
               <p className='mr-4 border pr-4 hover:scale-105 transition-all cursor-pointer text-center border-gray-400 border-r-1 border-l-0 border-t-0 border-b-0'>{movie?.genres?.map(genre => genre.name).join(', ')}</p>
              </div>

              <h3 className='  text-[16px] md:text-[17px] max-w-[300px] md:max-w-[500px]'>{movie?.overview}</h3>

              <div className='my-20  drop-shadow-xl  '>
               <h2 className=' text-xl md:text-2xl '>Rating</h2>
               <p className='my-2 text-indigo-400 text-[15px] md:text-[17px] '><span className='text-white pr-2 drop-shadow-md'>Average Vote:</span> {movie?.vote_average}</p>
               <p className='my-2 text-indigo-400 text-[15px] md:text-[17px] '><span className='text-white pr-2'>Vote Count:</span> {movie?.vote_count}</p>
               <p className='my-2 text-indigo-400 text-[15px] md:text-[17px]  '><span className='text-white pr-2'>Popularity:</span> {movie?.popularity}</p>
              </div>
            </div>
            
            <div className='md:my-16 ml-10 mr-28 cursor-pointer drop-shadow-2xl'>
             <img className='w-[200px] h-[300px] object-cover md:h-[full] md:w-full rounded-xl' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}alt={movie.title}/>
            </div>

          </div>
        </div>
      </div>
   </div>
  );
}

export default MovieDetails;