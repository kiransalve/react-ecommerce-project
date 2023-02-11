import React, { useState } from 'react'
import "./AddMovies.css"

const AddMovies = () => {
    const [newMovie, setNewMovie] = useState({
        title: "", opening_text: "", released_date: ""
    })
    const handleChange = async (event) => {
        setNewMovie({
            ...newMovie,
            [event.target.name]: event.target.value
        })
        await fetch("https://react-http-72ccd-default-rtdb.firebaseio.com/movie.json", {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newMovie)
    }
    return (
        <div className='add-movies-container'>
            <form action="#" className='form-container' onSubmit={handleSubmit}>
                <div className='title'>
                    <label htmlFor="title">Title : </label>
                    <input type="text" name="title" value={newMovie.title} onChange={handleChange} />
                </div>
                <div className="opening-text">
                    <label htmlFor="opening text">Opening Text : </label>
                    <input type="text" name="opening_text" value={newMovie.opening_text} onChange={handleChange} />
                </div>
                <div className="released-date">
                    <label htmlFor="released date">Released Date : </label>
                    <input type="date" name="released_date" value={newMovie.released_date} onChange={handleChange} />
                </div>
                <div className="add-movie-button">
                    <button type='submit'>Add Movie</button></div>
            </form>
        </div>
    )
}

export default AddMovies