import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import portfolioItems from '../data/portfolioData.json';
import Image from 'next/image';
Image

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Architecture', 'Interior', 'CONSTRUCTION', 'FURNITURE'];

  const filteredItems = activeTab === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="portfolio">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">



        <ul className="portfolio-filters" data-layout="masonry" data-aos="fade-up" data-aos-delay={100}>
          {tabs.map(tab => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`filter ${activeTab === tab ? 'filter-active' : ''}`}
            >
              {tab}
            </li>
          ))}
        </ul>
        {/* End Portfolio Filters */}

        <div className="row gy-4">

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >

            <Masonry
              columnsCount={3}
              gutter="1.5rem"
            >
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="portfolio-item"
                >
                  <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000} // Auto-play interval in milliseconds
                    stopOnHover={true}
                  >
                    {item.images.map((imageUrl, index) => (
                      <div key={index}>
                        <Image
                          src={`/assets/img/${imageUrl}`}
                          className="img-fluid"
                          alt=""
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </div>
                    ))}


                  </Carousel>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={`/assets/img/${item.image}`}
                      title={item.title}
                      data-gallery={`portfolio-gallery-${item.category.toLowerCase()}`}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href={`/${item.id}`}
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        {/* End Portfolio Container */}

      </div>
    </section >
  );
};

export default Portfolio;