import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MoviesContainer.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const MovieContainer = ({request, movieTitle, netflixOriginal}) => {

    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState("");
    const [movieTrailerYT, setMovieTrailerYT] = useState('');
    const posterPath = "https://image.tmdb.org/t/p/original";

    useEffect( () => {
        const fetchData = async (request) =>{
            await axios.get(request)
            .then(response => {
                setMovies(response.data.results);
                return response.data.results;
            })
            .catch(error => {
                console.log(error.message);
                return error.message;
            });
        }
        fetchData(request);
    }, [request]);

    const showTrailer = (movie) => {
        // console.log(movie);
        const fetchMovie = async () =>{

            if (netflixOriginal) {
                if (trailer) {
                    setTrailer("");
                } else {
                    movieTrailer( movie?.name || "" )
                    .then( res => {
                        console.log(res);
                        const UrlParams = new URLSearchParams(new URL(res).search);
                        setTrailer(UrlParams.get("v"));
                    } )
                    .catch( err => console.log(err) )
                }
            } else {
                if (movieTrailerYT) {
                    setMovieTrailerYT("");
                } else {
                    const api_key =  process.env.REACT_APP_API_KEY;
                    const movieURL=`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api_key}` ;
                    await axios.get(movieURL)
                    .then(response => {
                        setMovieTrailerYT(response.data.results[0]);
                        return response;
                    })
                    .catch(error => {
                        console.log(error.message);
                        return error.message;
                    });
                }
                
            }
            
        }
        fetchMovie();
       
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div className="movie-container">
            <h2>{movieTitle}</h2>
            <div className="posters">
                {
                    movies.map((movie) => (
                        <img onClick={ () => showTrailer(movie) } key={movie.id} className={`poster ${netflixOriginal && "poster_original"}`} src={`${netflixOriginal ? posterPath+movie.poster_path : posterPath+movie.backdrop_path}`} alt={movie.name || movie.original_title} />
                    ))
                }
            </div>
            <div className="trailer-section">
                {
                    netflixOriginal ? (trailer && <YouTube videoId={trailer} opts={opts} />)
                    : (movieTrailerYT && <YouTube videoId={movieTrailerYT.key} opts={opts} />)
                } 
            </div>
            
        </div>
    );
};

export default MovieContainer;