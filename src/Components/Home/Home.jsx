import React from 'react'
import { FaPlayCircle } from "react-icons/fa"
import "./Home.css"

const albumData = [
    {
        date: "JUL 16",
        city: "DETROIT, MI",
        stage: "DTE ENERGY MUSIC THEATRE"
    },
    {
        date: "JUL 19",
        city: "TORONTO,ON",
        stage: "BUDWEISER STAGE",
    },
    {
        date: "JUL 22",
        stage: "JIGGY LUBE LIVE",
        city: "BRISTOW, VA",
    },
    {
        date: "JUL 29",
        stage: "AK- CHIN PAVILION",
        city: "PHOENIX, AZ",
    },
    {
        date: "Aug 2",
        city: "LAS VEGAS, NV",
        stage: "T- MOBILE ARENA",
    },
    {
        date: "Aug 7",
        city: "CONCORD, CA",
        stage: "CONCORD PAVILION",
    }
]

const Home = () => {
    return <>
        <div className='home-header'>
            <p>Get our Latest Album</p>
            <FaPlayCircle className='home-icon' />
        </div>
        <div>
            <h3>Tours</h3>
            <ul className='album-container'>
                {
                    albumData.map((album) => {
                        return <div className='album'>
                            <li>{album.date}</li>
                            <li>{album.city}</li>
                            <li>{album.stage}</li>
                            <button>Buy Ticket</button>
                        </div>
                    })
                }
            </ul>
        </div>
    </>
}

export default Home