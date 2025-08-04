import React, { useState, useEffect } from 'react';
import './publications.css';

function Publications() {
  const [activeTab, setActiveTab] = useState('journal');
  const [currentYear, setCurrentYear] = useState('2015 - Present');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.publications-year-section');
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const triggerPoint = scrollTop + windowHeight * 0.4;

      let activeYear = '2015 - Present';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollTop + rect.top;

        if (triggerPoint >= sectionTop) {
          const year = section.getAttribute('data-year');
          if (year) activeYear = year;
        }
      });

      if (activeYear !== currentYear) {
        setCurrentYear(activeYear);
        const yearDisplay = document.getElementById('publicationsCurrentYearDisplay');
        if (yearDisplay) {
          yearDisplay.classList.add('active');
          setTimeout(() => {
            yearDisplay.classList.remove('active');
          }, 300);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentYear]);

  const journalPublications = [
    {
      year: '2015 - Present',
      items: [
        {
          title: 'Low-Memory Indoor Positioning System for Standalone Embedded Hardware',
          desc: 'Han Jun Bae and Lynn Choi<br>Electronics (Special Issue: Real-Time Control of Embedded Systems), Vol 10, No.9, 1059, 29 April 2021',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Filter cache: filtering useless cache blocks for a small but efficient shared last-level cache',
          desc: 'Han Jun Bae and Lynn Choi<br>The Journal of Supercomputing, Vol 76, No.10, pp 7521-7544, OCT 2020',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Dynamic directory table with victim cache: on-demand allocation of directory entries for active shared cache blocks',
          desc: 'Han Jun Bae and Lynn Choi<br>INTERNATIONAL JOURNAL OF SENSOR NETWORKS AND DATA COMMUNICATIONS, Vol 7, No.4, Nov 2018',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
  ];

  const conferencePublications = [
    {
      year: '2020 - Present',
      items: [
        {
          title: 'Magnetic Field-based Indoor Positioning using Deep Learning',
          desc: 'Conference on Indoor Positioning and Indoor Navigation (IPIN), 2021',
          lang: 'en',
          tags: [{ text: 'Conference', type: 'warning' }],
        },
      ],
    },
  ];

  const patents = [
    {
      year: '2019 - Present',
      items: [
        {
          title: '실내 위치 측정 방법 및 장치',
          desc: '대한민국 특허청, 출원번호: 10-2019-0123456',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'journal':
        return journalPublications;
      case 'conference':
        return conferencePublications;
      case 'patents':
        return patents;
      default:
        return journalPublications;
    }
  };

  const getHeroTitle = () => {
    switch (activeTab) {
      case 'journal':
        return 'Journal Publications';
      case 'conference':
        return 'Conference Papers';
      case 'patents':
        return 'Patents';
      default:
        return 'Publications';
    }
  };

  return (
    <div className="page-wrapper">
      <div className="publications-timeline-page">
        {/* Hero Section */}
        <section className="publications-hero-section">
          <div className="publications-hero-overlay">
            <h1 className="publications-hero-text">{getHeroTitle()}</h1>
            <h2 className="publications-hero-subtitle">Indoor Positioning Laboratory</h2>
            <p className="publications-hero-description">
              Explore our research contributions in indoor positioning, sensor networks, and related fields through our published journals, conference papers, and patents.
            </p>
          </div>
          <div className="publications-hero-button-container">
            <button
              className={`publications-hero-button ${activeTab === 'journal' ? 'active' : ''}`}
              onClick={() => setActiveTab('journal')}
            >
              <span>Journal</span>
            </button>
            <button
              className={`publications-hero-button ${activeTab === 'conference' ? 'active' : ''}`}
              onClick={() => setActiveTab('conference')}
            >
              <span>Conference</span>
            </button>
            <button
              className={`publications-hero-button ${activeTab === 'patents' ? 'active' : ''}`}
              onClick={() => setActiveTab('patents')}
            >
              <span>Patents</span>
            </button>
          </div>
        </section>

        {/* Content Area */}
        <div className="publications-split-timeline-container">
          {/* Left Half - Year Display */}
          <div className="publications-left-year-section">
            <div className="publications-year-display" id="publicationsCurrentYearDisplay">
              {currentYear}
            </div>
          </div>

          {/* Right Half - Cards */}
          <div className="publications-right-cards-section">
            <div className="publications-cards-container">
              {getCurrentData().map((yearBlock) => (
                <div
                  key={yearBlock.year}
                  className="publications-year-section"
                  data-year={yearBlock.year}
                >
                  <div className="publications-section-header">{yearBlock.year}</div>
                  <div className="publications-cards-column">
                    {yearBlock.items.map((item, idx) => (
                      <div className="publications-card-item" key={idx}>
                        <div className="publications-card-floating-category" lang={item.lang}>
                          <div className="publications-card-tags">
                            {item.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className={`publications-card-tag ${tag.type}`}
                              >
                                {tag.text}
                              </span>
                            ))}
                          </div>
                          <h3 className="publications-card-title">{item.title}</h3>
                          <p
                            className="publications-card-desc"
                            dangerouslySetInnerHTML={{ __html: item.desc }}
                          />
                          <div className="publications-card-hover-indicator">자세히 보기 →</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="publications-footer">
          <div className="publications-footer-content">
            <hr />
            <h3>Indoor Positioning Laboratory</h3>
            <p>
              Industry-Academy Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841<br />
              Professor: lchoi@korea.ac.kr · swj8905@korea.ac.kr<br />
              Tel: +82-2-3290-3896
            </p>
          </div>
        </footer>

        {/* Back to Top */}
        <a href="#" className="publications-back-to-top">
          ↑
        </a>
      </div>
    </div>
  );
}

export default Publications;