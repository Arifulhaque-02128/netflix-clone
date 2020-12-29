// const api_key = "be35a0ddcd8179b1fe58d847e23f27aa";
const api_key = process.env.REACT_APP_API_KEY;
const requestURL = {
    topRatedMovies : `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    netflixOriginalMovies : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`,
    comedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
    popularMovies : `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    upcomingMovies : `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
    horrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
    actionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
    romanceMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
    documentary : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`
}

export default requestURL;

// https://api.themoviedb.org/3/movie/464052?api_key=be35a0ddcd8179b1fe58d847e23f27aa&language=en-US

// d_tBexDdyBk

// https://www.youtube.com/embed/d_tBexDdyBk