import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
    const [names, setNames] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)


    const nameChangeHandlar = (e) => {
        setNames(e.target.value)
    }
    const phoneChangeHandlar = (e) => {
        setPhone(e.target.value)
    }
    const emailChangeHandlar = (e) => {
        setEmail(e.target.value)
    }
    const handleContactSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://react-http-72ccd-default-rtdb.firebaseio.com/contact.json",
                {
                    method: "POST", body: JSON.stringify({
                        name: names,
                        phone: phone,
                        email: email
                    }), headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            setNames("");
            setPhone("");
            setEmail("");
            setSubmitted(true)
        } catch (error) {
            console.error(error)
        }
    }


    return (

        <div className='contact-container'>
            <div className="contact-header">
                <p>Contact Us</p>
            </div>
            {submitted ? (
                <div className="thanks-box">
                    Thanks for contacting us..!
                </div>
            ) : (<form action="#" method="post" onSubmit={handleContactSubmit}>
                <div className="form-container">
                    <div className="name">
                        <label htmlFor="name">Name :</label>
                        <input type="text" value={names} onChange={nameChangeHandlar} />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone No.:</label>
                        <input type="number" value={phone} onChange={phoneChangeHandlar} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email ID :</label>
                        <input type="email" value={email} onChange={emailChangeHandlar} />
                    </div>
                    <button className="contact-button" type="submit">Submit</button>
                </div>
            </form>)}

        </div>
    )
}

export default Contact