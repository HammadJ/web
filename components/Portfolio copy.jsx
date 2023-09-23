import React, { useState } from 'react';
import Masonry from 'react-masonry-css';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Architecture', 'Interior', 'CONSTRUCTION', 'FURNITURE'];
  const portfolioItems = [
    { id: 1, category: 'Architecture', title: 'name', image: 'ARCHITECTURE/img1.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 2, category: 'Architecture', title: 'name2', image: 'ARCHITECTURE/img2.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 3, category: 'Interior', title: 'Product 1', image: 'INTERIOR/PROJECT_1_FAISALABD/IMG-20230910-WA0032.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 4, category: 'Interior', title: 'Product 1', image: 'img1.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 5, category: 'Interior', title: 'Product 1', image: 'img1.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 6, category: 'CONSTRUCTION', title: 'Branding 1', image: 'image3.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 7, category: 'FURNITURE', title: 'Branding 1', image: 'image3.jpg', description: 'Lorem ipsum, dolor sit' },
    // Add more portfolio items here
  ];

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
        <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay={100}>
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
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 portfolio-item"
            >
              <img
                src={`/assets/img/${item.image}`}
                className="img-fluid"
                alt=""
                data-aos="fade-up"
                data-aos-delay="200"
              />
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
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* End Portfolio Container */}
      </div>
    </section>
  );
};

export default Portfolio;
