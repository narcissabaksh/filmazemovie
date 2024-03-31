import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

const SavedShows = () => {
  const [movies, setMovies] = useState([]); 
  const { user } = UserAuth(); 

  
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
  //  userin etdiyi dəyişiklikləri  dinləyir
    const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows || []); //  save etdiyimiz filim datası ilə update edir
    });

    
    // Komponent ayrıldıqda və ya istifadəçi dəyişdikdə snapshot listener abunəlikdən çıxarmaq
    return () => unsubscribe();
  }, [user?.email]); // user  dəyişdikdə saved etdikləri filmlərin dəyişməsinə əmin olur

  //  userin saxladığı filmin documentine referance
  const movieRef = doc(db, 'users', `${user?.email}`);

  // saxlanılan filmi silmək üçün
  const deleteShow = async (passedID) => {
    try {
      console.log("Deleting show with ID:", passedID);
      // silinmiş filmin local stateini update edirik
      const updatedMovies = movies.filter((item) => item.id !== passedID);
      console.log("Updated movies after deletion:", updatedMovies);
      // silinmiş filmin firestore documentini update edirik
      await updateDoc(movieRef, {
        savedShows: updatedMovies
      });
      //  yenilənmiş movie array ilə stati update edirik
      setMovies(updatedMovies);
      console.log("Movies after state update:", movies);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      {movies.length > 0 && (
        <div className='relative flex items-center group'>
          <MdChevronLeft
            onClick={slideLeft}
            className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />
          <div
            id={'slider'}
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
          >
            {movies.map((item) => (
              <div
                key={item.id}
                className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
              >
                <img
                  className='w-full h-auto block rounded-xl'
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {item?.title}
                  </p>
                  <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />
        </div>
      )}
      {movies.length === 0 && (
        <div className="text-center p-20  text-2xl text-gray-400">You haven't saved anything yet.</div>
      )}
    </>
  );
};

export default SavedShows;
