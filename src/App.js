import React from "react";
import { useEffect, useState } from "react";

import './App.css';
import SearchIcon from './search.svg';

import MovieCard from "./MovieCard";

// omdb apikey = f3d3f12

const API_URL = 'http://www.omdbapi.com?apikey=f3d3f12';

const testMovie = {
    "Title": "Scooby-Doo 2: Monsters Unleashed",
    "Year": "2004",
    "imdbID": "tt0331632",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEzNzk3NTE1Ml5BMl5BanBnXkFtZTYwODM1MTU3._V1_SX300.jpg"
  }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Scooby Doo');
    }, []);

    return (
        <div className='app'>
            <h1>YourMovies</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}
            
        </div>
    );
};

export default App;
