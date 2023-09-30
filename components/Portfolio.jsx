import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import portfolioItems from '../data/portfolioData.json';
import Image from 'next/image';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleItems, setVisibleItems] = useState(8); // Number of initially visible items
  const tabs = ['All', 'Architecture', 'Interior', 'Construction', 'Furniture'];

  const filteredItems = activeTab === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeTab);

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 10); // Increase the number of visible items by 10
  };


  return (
    <section id="portfolio" className="portfolio">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Our following work has successfully managed to gather appreciation
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
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry columnsCount={3} gutter="1.5rem">
              {filteredItems.slice(0, visibleItems).map(item => (
                <div key={item.id} className="portfolio-item">

                  <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000} // Auto-play interval in milliseconds
                    stopOnHover={true}
                  >
                    {item.images.slice(0, 3).map((imageUrl, index) => (
                      <div key={index}>
                        <Image
                          src={`/assets/img/${imageUrl.src}`}
                          className="img-fluid"
                          alt=""
                          data-aos="fade-up"
                          data-aos-delay="200"
                          height={imageUrl.height}
                          width={imageUrl.width}
                          responsive="true"
                          as="image"
                        />
                      </div>
                    ))}
                  </Carousel>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.Theme}</p>
                    <a href={`/${item.id}`} title="More Details" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              ))}

            </Masonry>
          </ResponsiveMasonry>
        </div>
        {/* End Portfolio Container */}
        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="text-center mt-4">
            <button onClick={loadMoreItems} className="btn-loadMore">Load More</button>
          </div>
        )}

      </div>
    </section >
  );
};

export default Portfolio;