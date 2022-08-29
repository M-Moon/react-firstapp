import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placerholder.com/400'} 
                alt={movie.Title}
                onClick={() => {
                    window.open(`https://www.imdb.com/title/${movie.imdbID}/`, '_blank')
                }}
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
