import React from 'react'
import "./About.css";
import Album1 from "../../image/Album1.png"
import { FaYoutubeSquare } from "react-icons/fa"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <div className="about-container">
                <h1 className="about-header">About Us</h1>
                <img src={Album1} alt="image" className='about-image' />
                <p className="about-data">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor consectetur itaque nobis officia voluptatibus, dolore excepturi saepe quidem laudantium libero ipsa repellendus delectus praesentium repellat consequuntur qui consequatur ex temporibus similique asperiores dolorem aperiam architecto sunt quam.
                    Magni voluptates sapiente explicabo iste quisquam possimus quas eius! Eius reiciendis alias vitae.
                </p>
                <div className="icons">
                    <a href="https://www.youtube.com/"><FaYoutubeSquare className='icon' /></a>
                    <a href="https://www.facebook.com/"><AiFillFacebook className='icon' /></a>
                    <a href="https://www.instagram.com/"><AiFillInstagram className='icon' /></a>
                </div>
            </div>
        </>)
}

export default About