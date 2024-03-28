import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, {  useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function Movie({ item }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const overviewTruncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };


  return (
    <div className='hover:scale-110 transition-all w-[160px] sm:w-[240px] lg:w-[280px] inline-block   overflow-hidden cursor-pointer relative p-2'>
      <div className='relative inline-block'>
      <img className=' rounded-xl overflow-hidden object-fill ' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
 
        <div className='rounded-xl p-4 absolute top-0 left-0 w-full h-full overflow-hidden hover:bg-black/80 opacity-0 hover:opacity-80 text-white z-[100]'>
          <div className='flex flex-col justify-center h-full'>
            <p className='white-space-normal md:text-2xl text-sm font-bold'>{item?.title}</p>
            <p className='text-gray-400 hidden md:block white-space-normal text-[13px] md:text-sm  text-xs text-left'>
              Released | <span className='text-sm'>{item?.release_date}</span>
            </p>
            <p className='white-space-normal hidden md:block md:text-sm '>{overviewTruncate(item?.overview, 30)}</p>
            
            <p onClick={saveShow}>
              {like ? (<FaHeart className='absolute top-4 right-4 text-gray-300' /> 
              ) : (
              <FaRegHeart className='absolute top-4 right-4 text-gray-300' />)}
            </p>

            <Link to={`/movie/${item.id}/movie`} ><p className='text-sm my-4'>Learn more..</p> </Link>
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default Movie;
