import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { useRouter } from 'next/router';
import portfolioItems from '../data/portfolioData.json';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
const PortfolioDetails = ({ portfolioItem }) => {


    const router = useRouter();

    return (
        <>
            <Head>
                <title>Interio Arch</title>
            </Head>
            <main id="main">
                {/* Portfolio Details Page Title & Breadcrumbs */}
                <div data-aos="fade" className="page-title">
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1>Portfolio Details</h1>
                                    <p className="mb-0">
                                        Our following work has successfully managed to gather appreciation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="current">Portfolio Details</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                {/* End Page Title */}

                {/* Portfolio-details Section - Portfolio Details Page */}
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container" data-aos="fade-up" >
                        <div className="align-items-center" style={{ position: 'relative' }}>
                            <Carousel
                                showArrows={true}
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={3000}
                                stopOnHover={true}
                                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                    hasPrev && (
                                        <div
                                            type="button"
                                            onClick={onClickHandler}
                                            title={label}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '0',
                                                transform: 'translateY(-50%)',
                                                zIndex: '1',
                                            }}
                                            className="carousel-arrow"
                                        >
                                            &lt;
                                        </div>
                                    )
                                }
                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    hasNext && (
                                        <div
                                            type="button"
                                            onClick={onClickHandler}
                                            title={label}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                right: '0',
                                                transform: 'translateY(-50%)',
                                                zIndex: '1',
                                            }}
                                            className="carousel-arrow"
                                        >
                                            &gt;
                                        </div>
                                    )
                                }
                            >
                                {portfolioItem.images.map((image, index) => (
                                    <div key={index}>
                                        <Image
                                            src={`/assets/img/${image.src}`}
                                            alt=""
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            style={{ height: '85vh', width: 'auto' }}
                                            height={image.height}
                                            responsive="true"
                                            width={image.width}
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="row justify-content-between gy-4 mt-4">
                            <div className="col-lg-8" data-aos="fade-up">
                                <div className="portfolio-description">
                                    <h2>{portfolioItem.title}</h2>
                                    <p>
                                        {portfolioItem.description}
                                    </p>

                                </div>
                            </div>
                            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li>
                                            <strong>Category</strong> {portfolioItem.category}
                                        </li>
                                        <li>
                                            <strong>Theme</strong> {portfolioItem.Theme}
                                        </li>
                                        <li>
                                            <strong>Location</strong> {portfolioItem.location}
                                        </li>
                                        <li>
                                            <strong>Project Date</strong> {portfolioItem.year}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Portfolio-details Section */}
            </main>
        </>
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