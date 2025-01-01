import React from 'react'

const ContactUs = () => {
  return (

    <>
        <div className="contact">
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1 className="text-center mb-4">Get in Touch</h1>
                    <p className="text-center">
                        We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.  
                    </p>

                    <form className="mt-4 shadow p-4 rounded bg-white">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="John Doe" 
                                required 
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="johndoe@example.com" 
                                required 
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                className="form-control" 
                                id="message" 
                                rows="5" 
                                placeholder="Write your message here..." 
                                required 
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6 mx-auto text-center">
                    <h3>Contact Information</h3>
                    <p><strong>Email:</strong> support@postit.com</p>
                    <p><strong>Phone:</strong> +91 9876546543</p>
                    <p><strong>Address:</strong> 123 Post IT office, White Field, Bengaluru, 560123</p>
                </div>
            </div>
        </div>
        </div>
    </>
)
}

export default ContactUs