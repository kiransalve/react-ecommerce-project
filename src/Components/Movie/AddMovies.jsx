import React, { useState } from 'react'
import "./AddMovies.css"

const AddMovies = () => {
    const [movieName, setMovieName] = useState()
    const [movieDescription, setMovieDescription] = useState()
    const [movieDate, setMovieDate] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://react-http-72ccd-default-rtdb.firebaseio.com/movie.json",
                {
                    method: "POST", body: JSON.stringify({
                        name: movieName,
                        desription: movieDescription,
                        released_date: movieDate
                    }), headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='add-movies-container'>
            <form action="#" className='form-container' onSubmit={handleSubmit}>
                <div className='title'>
                    <label htmlFor="title">Title : </label>
                    <input type="text" name="title" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
                </div>
                <div className="opening-text">
                    <label htmlFor="opening text">Opening `Text : </label>
                    <input type="text" name="opening_text" value={movieDescription} onChange={(e) => setMovieDescription(e.target.value)} />
                </div>
                <div className="released-date">
                    <label htmlFor="released date">Released Date : </label>
                    <input type="date" name="released_date" value={movieDate} onChange={(e) => setMovieDate(e.target.value)} />
                </div>
                <div className="add-movie-button">
                    <button type='submit'>Add Movie</button></div>
            </form>
        </div>
    )
}

export default AddMovies