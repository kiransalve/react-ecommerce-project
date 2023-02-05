import React from 'react'
import "./MovieList.css"

const MovieList = (props) => {
    return (
        <div className='movie-container'>
            {props.movie.map((movie) => {
                return <div key={movie.episode_id} className="movie">
                    <div className="movie-title">
                        {movie.title}
                    </div>
                    <div className="director">
                        Director : {movie.director}
                    </div>
                    <div className="producer">
                        Producer : {movie.producer}
                    </div>
                    <div className="release-date">
                        Release Date : {movie.release_date}
                    </div>
                    <div className="opening-crowl">
                        {movie.opening_crawl}
                    </div>
                </div>
            })}
        </div>
    )
}

export default MovieList