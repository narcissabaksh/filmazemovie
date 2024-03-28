const key = 'cd45e063417d7854ad7fef896e88dcfc';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestRecommendations: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,

  requestLatest: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}language=en-US&page=2`,

  requestPopularM: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=23`,

  requestList: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}language=en`
  
  

};

export default requests;
