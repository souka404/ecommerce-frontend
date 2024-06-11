import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [user, setUser] = useState({
        Name: "",
        email: "",
        subject: "",
        Message: "",
    });

    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const send = async (e) => {
        e.preventDefault();
        const { Name, email, subject, Message } = user;

        // Check if any field is empty
        if (!Name || !email || !subject || !Message) {
            alert("You should write something first");
            return;
        }

        // Define options for the POST request
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Name, email, subject, Message }),
        };

        // Send the request to the API
        const response = await fetch(
            "https://e-commerce-stage-c2d8b-default-rtdb.firebaseio.com/Message.json",
            option
        );

        // Check the response
        if (response.ok) {
            alert("Message Sent");
            // Reset the user state to clear the form
            setUser({ Name: "", email: "", subject: "", Message: "" });
        } else {
            alert("Error Occurred: Message Sent failed");
        }
    };

    return (
        <div className="contact">
            <div className="container">
                <div className="form">
                    <h2>#contact us</h2>
                    <form method="POST">
                        <div className="box">
                            <div className="label">
                                <h4>Name</h4>
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={user.Name}
                                    name="Name"
                                    onChange={data}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>E-mail</h4>
                            </div>
                            <div className="input">
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    value={user.email}
                                    name="email"
                                    onChange={data}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Subject</h4>
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    value={user.subject}
                                    name="subject"
                                    onChange={data}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Message</h4>
                            </div>
                            <div className="input">
                                <textarea
                                    placeholder="Message !"
                                    value={user.Message}
                                    name="Message"
                                    onChange={data}
                                />
                            </div>
                        </div>
                        <button type="submit" onClick={send}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
