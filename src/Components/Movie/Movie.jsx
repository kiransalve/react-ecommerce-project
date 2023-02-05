import React from 'react'
import { useState } from "react";
import MovieList from './MovieList';
import "./Movie.css"

const Movie = () => {
    const [movie, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    async function fetchmovie() {
        setIsLoading(true)

        const response = await fetch("https://swapi.dev/api/films")
        const data = await response.json();
        const transformed = data.results

        setMovies(transformed);
        setIsLoading(false)
    }
    return (
        <div>
            <div className='fetchmovie'>
                <button onClick={fetchmovie}>Fetch Movies</button>
            </div>
            {!isLoading && <MovieList movie={movie} />}
            {isLoading && <p>Loading...</p>}
        </div>
    )
}

export default Movie