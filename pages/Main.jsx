import React from 'react'
import Portfolio from '../components/Portfolio'

const Main = () => {
    return (
        <>
            <main id="main">
                {/* Hero Section - Home Page */}
                <section id="hero" className="hero">
                    <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <h2 data-aos="fade-up" data-aos-delay={100}>
                                    Welcome to Our Website
                                </h2>
                                <p data-aos="fade-up" data-aos-delay={200}>
                                    We are team of talented designers making websites with Bootstrap
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <form
                                    action="#"
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
                                <h2>Ducimus rerum libero reprehenderit cumque</h2>
                                <p>
                                    Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor
                                    cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta
                                    quas cum quia maiores iure. Quidem nulla qui assumenda incidunt
                                    voluptatem tempora deleniti soluta.
                                </p>
                                <a href="#" className="read-more">
                                    <span>Read More</span>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            <div className="col-xl-7">
                                <div className="row gy-4 icon-boxes">
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon-box">
                                            <i className="bi bi-buildings" />
                                            <h3>Eius provident</h3>
                                            <p>
                                                Magni repellendus vel ullam hic officia accusantium ipsa
                                                dolor omnis dolor voluptatem
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* End Icon Box */}
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon-box">
                                            <i className="bi bi-clipboard-pulse" />
                                            <h3>Rerum aperiam</h3>
                                            <p>
                                                Autem saepe animi et aut aspernatur culpa facere. Rerum
                                                saepe rerum voluptates quia
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* End Icon Box */}
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon-box">
                                            <i className="bi bi-command" />
                                            <h3>Veniam omnis</h3>
                                            <p>
                                                Omnis perferendis molestias culpa sed. Recusandae quas
                                                possimus. Quod consequatur corrupti
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* End Icon Box */}
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                                        <div className="icon-box">
                                            <i className="bi bi-graph-up-arrow" />
                                            <h3>Delares sapiente</h3>
                                            <p>
                                                Sint et dolor voluptas minus possimus nostrum. Reiciendis
                                                commodi eligendi omnis quideme lorenda
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* End Icon Box */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Section */}
                {/* Services Section - Home Page */}
                <section id="services" className="services">
                    {/*  Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                            consectetur velit
                        </p>
                    </div>
                    {/* End Section Title */}
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={100}>
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-briefcase" />
                                    </div>
                                    <div>
                                        <h4 className="title">
                                            <a href="services-details.html" className="stretched-link">
                                                Lorem Ipsum
                                            </a>
                                        </h4>
                                        <p className="description">
                                            Voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non provident
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Service Item */}
                            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={200}>
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-card-checklist" />
                                    </div>
                                    <div>
                                        <h4 className="title">
                                            <a href="services-details.html" className="stretched-link">
                                                Dolor Sitema
                                            </a>
                                        </h4>
                                        <p className="description">
                                            Minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat tarad limino ata
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Service Item */}
                            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={300}>
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-bar-chart" />
                                    </div>
                                    <div>
                                        <h4 className="title">
                                            <a href="services-details.html" className="stretched-link">
                                                Sed ut perspiciatis
                                            </a>
                                        </h4>
                                        <p className="description">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Service Item */}
                            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={400}>
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-binoculars" />
                                    </div>
                                    <div>
                                        <h4 className="title">
                                            <a href="services-details.html" className="stretched-link">
                                                Magni Dolores
                                            </a>
                                        </h4>
                                        <p className="description">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt mollit anim id est laborum
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Service Item */}
                            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={500}>
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-brightness-high" />
                                    </div>
                                    <div>
                                        <h4 className="title">
                                            <a href="services-details.html" className="stretched-link">
                                                Nemo Enim
                                            </a>
                                        </h4>
                                        <p className="description">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum deleniti atque
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Service Item */}
                            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={600}>
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-calendar4-week" />
                                    </div>
                                    <div>
                                        <h4 className="title">
                                            <a href="services-details.html" className="stretched-link">
                                                Eiusmod Tempor
                                            </a>
                                        </h4>
                                        <p className="description">
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Service Item */}
                        </div>
                    </div>
                </section>
                {/* End Services Section */}
                {/* Portfolio Section - Home Page */}
                
                <Portfolio />

                {/* End Portfolio Section */}
             
                {/* Contact Section - Home Page */}
                <section id="contact" className="contact">
                    {/*  Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Contact</h2>
                        <p>
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                            consectetur velit
                        </p>
                    </div>
                    {/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={200}>
                                            <i className="bi bi-geo-alt" />
                                            <h3>Address</h3>
                                            <p>A108 Adam Street</p>
                                            <p>New York, NY 535022</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={300}>
                                            <i className="bi bi-telephone" />
                                            <h3>Call Us</h3>
                                            <p>+1 5589 55488 55</p>
                                            <p>+1 6678 254445 41</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={400}>
                                            <i className="bi bi-envelope" />
                                            <h3>Email Us</h3>
                                            <p>info@example.com</p>
                                            <p>contact@example.com</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay={500}>
                                            <i className="bi bi-clock" />
                                            <h3>Open Hours</h3>
                                            <p>Monday - Friday</p>
                                            <p>9:00AM - 05:00PM</p>
                                        </div>
                                    </div>
                                    {/* End Info Item */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form
                                    action="forms/contact.php"
                                    method="post"
                                    className="php-email-form"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-md-6 ">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Your Email"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                placeholder="Subject"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows={6}
                                                placeholder="Message"
                                                required=""
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message" />
                                            <div className="sent-message">
                                                Your message has been sent. Thank you!
                                            </div>
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Contact Form */}
                        </div>
                    </div>
                </section>
                {/* End Contact Section */}
            </main>
        </>

    )
}

export default Main