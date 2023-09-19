import React, { useState } from 'react';

const Portfolio = () => {
  // Define state to manage active tab
  const [activeTab, setActiveTab] = useState('All');

  // Define data for tabs and portfolio items (you can fetch this data from an API or database)
  const tabs = ['All', 'App', 'Card', 'Web'];
  const portfolioItems = [
    { id: 1, category: 'App', title: 'App 1', image: 'image1.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 2, category: 'Card', title: 'Product 1', image: 'image2.jpg', description: 'Lorem ipsum, dolor sit' },
    { id: 3, category: 'Web', title: 'Branding 1', image: 'image3.jpg', description: 'Lorem ipsum, dolor sit' },
    // Add more portfolio items here
  ];

  // Filter portfolio items based on the active tab
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
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {/* Dynamic rendering of filter tabs */}
            {tabs.map(tab => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`filter ${activeTab === tab ? 'filter-active' : ''}`}
                data-filter={tab === 'All' ? '*' : `.${tab.toLowerCase()}`}
              >
                {tab}
              </li>
            ))}
          </ul>
          {/* End Portfolio Filters */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* Dynamic rendering of portfolio items */}
            {filteredItems.map(item => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category.toLowerCase()}`}
              >
                <img
                  src={`/assets/img/masonry-portfolio/${item.image}`}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a
                    href={`/assets/img/masonry-portfolio/${item.image}`}
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
      </div>
    </section>
  );
};

export default Portfolio;
