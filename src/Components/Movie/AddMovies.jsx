import React from 'react'
import "./AddMovies.css"

const AddMovies = () => {
    return (
        <div className='add-movies-container'>
            <form action="#" className='form-container'>
                <div className='title'>
                    <label htmlFor="title">Title : </label>
                    <input type="text" name="title" />
                </div>
                <div className="opening-text">
                    <label htmlFor="opening text">Opening Text : </label>
                    <input type="text" name="opening-text" />
                </div>
                <div className="released-date">
                    <label htmlFor="released date">Released Date : </label>
                    <input type="date" name="released-date" />
                </div>
                <div className="submit">
                    <button>Add Movie</button></div>
            </form>
        </div>
    )
}

export default AddMovies