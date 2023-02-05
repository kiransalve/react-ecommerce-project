import React from 'react'
import { useState } from "react";

const Movie = () => {

    const [movie, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    async function fetchmovie() {
        setIsLoading(true)
        const response = await fetch("https://swapi.dev/api/films")
        const data = await resonse.json();
        const transformed = data.result.map((movieData) => {
            return {
                id: movieData.episode_id,
                title: movieData.title,
                openingText: movieData.opening_crawl,
                releaseDate: movieData.release_data,
            };
        });
        setMovies(transformed);
        setIsLoading(false)
    };
    return (
        <div>
            <span>
                <button onClick={fetchmovie}></button>
            </span>
            {!isLoading && <MovieList />}
            {isLoading && <p>Loading...<p />}
            </div>
    )
}

            export default Movie