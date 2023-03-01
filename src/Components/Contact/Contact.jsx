import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
    const [names, setNames] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

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
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='contact-container'>
            <div className="contact-header">
                <p>Contact Us</p>
            </div>
            <form action="#" method="post" onSubmit={handleContactSubmit}>
                <div className="form-container">
                    <div className="name">
                        <label htmlFor="name">Name :</label>
                        <input type="text" value={names} onChange={(e) => setNames(e.target.value)} />
                      </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone No.:</label>
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email ID :</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className ="contact-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact