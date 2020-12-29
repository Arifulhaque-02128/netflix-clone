import './App.css';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import requestURL from './api';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header request={requestURL.netflixOriginalMovies}/>
      <MovieContainer netflixOriginal={true} movieTitle="NETFLIX ORIGINALS" request={requestURL.netflixOriginalMovies} />
      <MovieContainer netflixOriginal={false} movieTitle="Top Rated" request={requestURL.topRatedMovies} />
      <MovieContainer netflixOriginal={false} movieTitle="Upcoming Movie" request={requestURL.upcomingMovies} />
      <MovieContainer netflixOriginal={false} movieTitle="Popular Movie" request={requestURL.popularMovies} />
      <MovieContainer netflixOriginal={false} movieTitle="Action Movie" request={requestURL.actionMovies} />
      <MovieContainer netflixOriginal={false} movieTitle="Romance" request={requestURL.romanceMovies} />
      <MovieContainer netflixOriginal={false} movieTitle="Comedy" request={requestURL.comedyMovies} />
      <MovieContainer netflixOriginal={false} movieTitle="Documentary" request={requestURL.documentary} />
    </div>
  );
}

export default App;
