import Image from 'next/image'
import React, { useState } from 'react'
import Portfolio from './Portfolio'


const Main = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Perform your form submission logic here (e.g., send the email)

        // Show the modal popup on form submit
        if(email != '')
            setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <main id="main">
                {/* Hero Section - Home Page */}
                <section id="hero" className="hero">
                    <Image src="/assets/img/hero-bg.webp" alt="bg img" data-aos="fade-in" height={752} width={1600} responsive="true" priority />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <h2 data-aos="fade-up" data-aos-delay={100}>
                                    Welcome to Interio Arch
                                </h2>
                                <p data-aos="fade-up" data-aos-delay={200}>
                                    We are team of talented designers turning your dreams into reality
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <form
                                    className="sign-up-form d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        defaultValue="Sign up"
                                    />
                                </form>
                                {showModal && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <h2>Email Submitted Successfully</h2>
                                            {/* Content for the popup screen */}
                                            {/* Add your content here */}
                                        </div>
                                        <button className="modal-close" onClick={closeModal}>
                                            Close
                                        </button>
                                    </div>
                                )}

                                <style jsx>{`
                                  /* Styles for the modal overlay (background) */
                                  .modal {
                                    display: ${showModal ? 'block' : 'none'};
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background-color: rgba(0, 0, 0, 0.5);
                                    backdrop-filter: blur(5px);
                                    z-index: 1;
                                    display: flex;
                                    flex-direction: column; /* Ensure button is below content */
                                    justify-content: center;
                                    align-items: center;
                                  }

                                  /* Styles for the modal content */
                                  .modal-content {
                                    padding: 20px;
                                    text-align: center;
                                    margin-bottom: 20px; /* Add margin to separate content and button */
                                  }

                                  /* Style for the close button */
                                  .modal-close {
                                    background-color: #f44336;
                                    color: #fff;
                                    border: none;
                                    padding: 10px 20px;
                                    cursor: pointer;
                                  }

                                  /* Style for the close button on hover */
                                  .modal-close:hover {
                                    background-color: #d32f2f;
                                  }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Hero Section */}
                {/* About Section - Home Page */}
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row align-items-xl-center gy-5">
                            <div className="col-xl-5 content">
                                <h3>About Us</h3>
                                <h2>Where Dreams becomes Reality</h2>
                                <p>
                                    Join us to experience the enthralling journey beginning from your ethereal random thoughts
                                    to the creation of the heaven of the architectural world. Our aim strongly emphasizes on the
                                    contentment of our clients while providing elite services including the quality and aesthetics
                                    in the finest forecast.
                                </p>

                            </div>
                            <div className="col-xl-7">
                                <div className="row gy-4 icon-boxes">
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon-box">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-houses" viewBox="0 0 16 16">
                                                    <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
                                                </svg>
                                            </i>

                                            <h3>INTERIOR DESIGNING</h3>
                                            <p>
                                                We don’t only provide you with the colors but also make sure
                                                to paint your home in the most pleasing way. Our interior design
                                                services varies from modern to classical or to be more precise,
                                                according to your taste.
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* End Icon Box */}
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon-box">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-easel2" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z" />
                                                </svg>
                                            </i>
                                            <h3>FURNITURE MAKING</h3>
                                            <p>
                                                We have got you covered when it comes to furniture items too.
                                                We offer an exquisite range of high-quality furniture which can
                                                be amended or made exactly according to your demands.
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* End Icon Box */}
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                                        <div className="icon-box">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-bricks" viewBox="0 0 16 16">
                                                    <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" />
                                                </svg>
                                            </i>
                                            <h3>CONSTRUCTION FITOUTS</h3>
                                            <p>
                                                In order to ensure perfect and safe execution of our designs,
                                                we will be facilitating our clients with the service of providing
                                                labors as well along with making sure that the work is accomplished on its due time.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon-box">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                                                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                                                    <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                                                </svg>
                                            </i>
                                            <h3>ARCHITECTURAL DESIGNING</h3>
                                            <p>
                                                InterioArch provides you with the most unique and secure architectural
                                                designs and plans when it comes to your home. From fulfilling your needs
                                                & wants to coming up with extra elements to make sure that your home is extra special.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Section */}
                {/* Portfolio Section - Home Page */}
                <Portfolio />
                {/* End Portfolio Section */}

                {/* Contact Section - Home Page */}
                <section id="contact" className="contact">
                    {/*  Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Contact</h2>
                    </div>
                    {/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-12">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={200}>
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </i>
                                            <h3>Address</h3>
                                            <p>Phase 8, DHA</p>
                                            <p>Lahore</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={300}>
                                            <i className="" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                            </i>
                                            <h3>Call Us</h3>
                                            <p>+92 334 7833977</p>
                                            <p>+92 323 4821848</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={400}>
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                </svg>
                                            </i>
                                            <h3>Email Us</h3>
                                            <p>interioArch0@gmail.com</p>
                                            <p>‎ </p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={500}>
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                </svg>
                                            </i>
                                            <h3>Open Hours</h3>
                                            <p>Monday - Friday</p>
                                            <p>10:00AM - 06:00PM</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* End Contact Section */}
            </main>
        </>

    )
}

export default Main