import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = ({request}) => {

    const [headerPoster, setHeaderPoster] = useState([]);
    const posterPath = "https://image.tmdb.org/t/p/original";

    useEffect( () => {
        const fetchData = async (request) =>{
            await axios.get(request)
            .then(response => {
                setHeaderPoster(response.data.results[Math.floor(Math.random()*(response.data.results.length-1))]);
                return response.data.results;
            })
            .catch(error => {
                alert(error.message);
                return error.message;
            });
        }
        fetchData(request);
    }, [request]);

    const truncateString = (str, len) =>{
        return str.length>len ? (str.slice(0, len) + "...") : str ;
    }

    return (
        <header className="header-poster" style={{
            backgroundImage : `url(${posterPath+headerPoster.backdrop_path})`,
            backgroundSize : "cover",
            backgroundPosition : "center center",
        }}
        >
            <Navbar />
            <div className="header-contents">
                <div className="header-title">
                    <h2>{headerPoster.original_title || headerPoster.title || headerPoster.name} </h2>
                </div>
                <div className="header-btn my-3">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className="header-overview">
                    {
                        headerPoster.overview &&  <p>{truncateString(headerPoster.overview, 150)}</p>
                    }
                   
                </div>
            </div>
            
        </header>
    );
};

export default Header;