import React from 'react'
import { useState, useEffect } from "react";
import MovieList from './MovieList';
import AddMovies from './AddMovies';
import "./Movie.css"

const Movie = () => {
    const [movie, setMovies] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchmovie() {
            setError(null)
            try {
                const response = await fetch("https://react-http-72ccd-default-rtdb.firebaseio.com/movie.json")
                const data = await response.json()
                const movies = []
                for (const key in data) {
                    movies.push({
                        id: key,
                        title: data[key].name,
                        opeeningText: data[key].desription,
                        released_date: data[key].released_date
                    })
                }
                setMovies(movies);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchmovie()
    }, [])
    return (
        <div>
            <div className="addmovies">
                <AddMovies />
            </div>
            <MovieList movies={movie} error={error} />
        </div>
    )
}

export default Movie