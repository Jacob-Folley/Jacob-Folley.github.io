import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { NavBar } from '../navBar/navbar'
import { send } from 'emailjs-com'
import 'animate.css';

export const ContactModule = () => {
    const history = useHistory()
    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        subject: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_6dwpabs',
            'template_aotsvyj',
            toSend,
            'GzMfl53KPJjAsqhyH'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                history.go(0)
            })
            .catch((err) => {
                console.log('FAILED...', err);
            })
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <NavBar />
            <div className="contactContainer">
                <h1 className="contactTitle">Contact</h1>
                <section className="contact">
                    <form id="contactForm" onSubmit={onSubmit}>
                        <div className="nameEmail">
                            <input type="text" id="name" name="from_name" placeholder="name" value={toSend.from_name} onChange={handleChange}></input>
                            <input type="text" id="email" name="reply_to" placeholder="email" value={toSend.reply_to} onChange={handleChange}></input>
                        </div>
                        <div className="subject"><input type="text" id="subject" name="subject" placeholder="subject" value={toSend.subject} onChange={handleChange}></input></div>
                        <textarea type="text" id="message" name="message" placeholder="message" value={toSend.message} onChange={handleChange}></textarea>
                        <div><button className="submitButton" type="submit" name="submit">send</button></div>
                    </form>
                </section>
            </div>
        </>
    )
}