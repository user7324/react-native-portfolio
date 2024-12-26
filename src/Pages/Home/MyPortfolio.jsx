import React, { useState } from 'react';
import data from "../../data/index.json";
import Modal from './Modal'; // Assuming Modal component file path

export default function MyPortfolio() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio (Click each one to see more!)</h2>
        </div>
        <div></div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index, array) => (
          <div key={index} className={`portfolio--section--card ${index === array.length - 1 ? 'last-item' : ''}`} onClick={() => toggleExpanded(index)}>
            <div className="portfolio--section--img">
              <img src={item.cardSrc} alt="portfolio-project" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                
              </div>
              <Modal isOpen={expandedIndex === index} onClose={() => toggleExpanded(index)}>
                <div className="modal--content-2">
                  <h2 className='modal--title'>{item.title}</h2>
                  <p className='modal--title'>{item.description}</p>
                  <div className="modal--images">
                    {/* Render multiple images here */}
                    <img src={item.src} alt="Image 1"/>
                    {item.src2 && <img src={item.src2} alt="Image 2"/>}
                    {item.src3 && <img src={item.src3} alt="Image 3"/>}
                    {item.src4 && <img src={item.src4} alt="Image 4"/>}
                    {item.src5 && <img src={item.src5} alt="Image 5"/>}
                    {item.src6 && <img src={item.src6} alt="Image 6"/>}
                    {item.src7 && <img src={item.src7} alt="Image 7"/>}
                    {/* Add more images as needed */}
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


