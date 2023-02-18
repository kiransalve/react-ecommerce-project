import React, { useEffect, useState } from 'react'
import "./MovieList.css"

const MovieList = ({ movies }) => {

    useEffect(() => {
        console.log(movies, "in movie list")
    }, [movies])
    return (
        <div className='movie-container'>
            {
                movies.map((movie) => {
                    return <div key={movie.name} className="movie">
                        <div className="movie-title">
                            {movie.title}
                        </div>
                        <div className="release-date">
                            Release Date : {movie.released_date}
                        </div>
                        <div className="opening-crowl">
                            {movie.opeeningText}
                        </div>
                    </div>
                }
                )
            }
        </div>
    )
}

export default MovieList