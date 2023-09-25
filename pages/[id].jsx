import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { useRouter } from 'next/router';
import portfolioItems from '../data/portfolioData.json';

const PortfolioDetails = ({ portfolioItem }) => {


    const router = useRouter();

    // const id = router.query.id;
    // const portfolioItem = portfolioItems.find(portfolioItem => portfolioItem.id == id);
    // console.log(portfolioItem);
    return (
        <main id="main">
            {/* Portfolio Details Page Title & Breadcrumbs */}
            <div data-aos="fade" className="page-title">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Portfolio Details</h1>
                                <p className="mb-0">
                                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a
                                    odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
                                    dolorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="current">Portfolio Details</li>
                        </ol>
                    </div>
                </nav>
            </div>
            {/* End Page Title */}

            {/* Portfolio-details Section - Portfolio Details Page */}
            <section id="portfolio-details" className="portfolio-details">
                <div className="container" data-aos="fade-up">
                    <div className="align-items-center">
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={3000}
                            stopOnHover={true}
                        >
                            {portfolioItem.images.map((image, index) => (
                                <div key={index} >
                                    <img
                                        src={`/assets/img/${image}`}
                                        className="img-fluid"
                                        alt=""
                                        style={{ height: '90vh' }}
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="row justify-content-between gy-4 mt-4">
                        <div className="col-lg-8" data-aos="fade-up">
                            <div className="portfolio-description">
                                <h2>This is an example of portfolio details</h2>
                                <p>
                                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
                                    Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia
                                    accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                                    eius.
                                </p>
                                <p>
                                    Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et.
                                    Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt
                                    molestiae laboriosam.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li>
                                        <strong>Category</strong> Web design
                                    </li>
                                    <li>
                                        <strong>Client</strong> ASU Company
                                    </li>
                                    <li>
                                        <strong>Project date</strong> 01 March, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Portfolio-details Section */}
        </main>
    );
};

export default PortfolioDetails;

export async function getStaticPaths() {
    // Generate paths based on the ids in your portfolio data
    const paths = portfolioItems.map((item) => ({
        params: { id: item.id.toString() }, // Ensure id is a string
    }));

    return {
        paths,
        fallback: false, // Set to true if you want to enable fallback behavior
    };
}

export async function getStaticProps(context) {
    // Fetch the data for the specific portfolio item based on context.params.id
    const id = context.params.id;
    const portfolioItem = portfolioItems.find((item) => item.id === parseInt(id));

    return {
        props: {
            portfolioItem,
        },
    };
}