import React from 'react'
import { useState, useEffect } from "react";
import MovieList from './MovieList';
import "./Movie.css"

const Movie = () => {
    const [movie, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchmovie() {
            setIsLoading(true)
            setError(null)
            try {
                const response = await fetch("https://swapi.dev/api/films")
                const data = await response.json()
                const transformed = data.results
                setMovies(transformed);
                setIsLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchmovie()
    }
        , [])
    return (
        <div>
            <div className='fetchmovie'>
                {/* <button onClick={fetchmovie}>Fetch Movies</button> */}
            </div>
            {!isLoading && <MovieList movie={movie} error={error} />}
            {isLoading && <p>Loading...</p>}
        </div>
    )
}

export default Movie