import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-lime-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4x1 font-bold mb-5 text-gray-800">Contact Me</h2>
                <p className="text-x1 mb-4 text-gray-600">
                    Feel free to leave me a message 
                </p>
                <a href="niswikayla@gmail.com" className="bg-lime-900 hover:bg-lime-900 text-white font-bold py-2 rounded-lg px-6 shadow-md transition duration-300">
                    Send Email
                </a>
            </div>
        </section> 
    )
}

export default Contact;