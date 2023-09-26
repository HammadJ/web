import React from 'react'
import Portfolio from './Portfolio'

const Main = () => {
    return (
        <>
            <main id="main">
                {/* Hero Section - Home Page */}
                <section id="hero" className="hero">
                    <img src="assets/img/hero-bg.webp" alt="bg img" data-aos="fade-in" />
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
                                >
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter email address"
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        defaultValue="Sign up"
                                    />
                                </form>
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
                                            <i className="bi bi-buildings" />
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
                                            <i className="bi bi-clipboard-pulse" />
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
                                            <i className="bi bi-graph-up-arrow" />
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
                                            <i className="bi bi-command" />
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
                                            <i className="bi bi-geo-alt" />
                                            <h3>Address</h3>
                                            <p>Phase 8, DHA</p>
                                            <p>Lahore</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={300}>
                                            <i className="bi bi-telephone" />
                                            <h3>Call Us</h3>
                                            <p>+92 334 7833977</p>
                                            <p>+92 323 4821848</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={400}>
                                            <i className="bi bi-envelope" />
                                            <h3>Email Us</h3>
                                            <p>interioArch0@gmail.com</p>
                                            <p>‎ </p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={500}>
                                            <i className="bi bi-clock" />
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