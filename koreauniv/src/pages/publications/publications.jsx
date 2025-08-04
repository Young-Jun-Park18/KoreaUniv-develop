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
          title: 'Dynamic directory table with victim cache: on‑demand allocation of directory entries for active shared cache blocks',
          desc: 'Han Jun Bae and Lynn Choi<br>INTERNATIONAL JOURNAL OF SENSOR NETWORKS AND DATA COMMUNICATIONS, Vol 7, No.4, Nov 2018',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'ZeroMAC: Toward a zero sleep delay and zero idle listening media access control protocol with ultralow power radio frequency wakeup sensor',
          desc: 'Sang Hoon Lee and Lynn Choi<br>International Journal of Distributed Sensor Networks, Vol 13, No.8, APR 2017',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'The Design of a Ultra-Low Power RF Wakeup Sensor for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee, Yong Soo Bae and Lynn Choi<br>Journal of Communications and Networks, Vol 18, No.2, pp 201-209, APR 2016',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Sleep Control Game for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee, Hyeokman Kim and Lynn Choi<br>MOBILE INFORMATION SYSTEMS, Article ID 3085408, DOI 10.1155/2016/3085408, 2016',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Starcast: Robust and Energy-Efficient Geometric Routing for Mobile Sensor Networks',
          desc: 'Jae Kyun Jung, Sang Hoon Lee and Lynn Choi<br>International Journal of Sensor Networks (IJSNET), Vol. 22, No. 3, 2016',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Introduction to the special issue on software technologies for embedded and ubiquitous systems',
          desc: 'Lynn Choi and Kirner, Raimund<br>Computing, Vol 97, No.3, pp 203-204, MAR 2015',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'On-Demand Radio Wave Sensor for Wireless Sensor Networks: Towards a Zero Idle Listening and Zero Sleep Delay MAC Protocol',
          desc: 'Sang Hoon Lee, Yong Soo Bae and Lynn Choi<br>Journal of Communications and Networks',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Influenza surveillance and forecast with smartphone Sensors',
          desc: 'Sang Hoon Lee, Yunmook Nah, Lynn Choi<br>Computing, Vol 97, No.3, pp 237-259, MAR 2015',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'SPEED-MAC: Sppedy and Energy Efficient Data Delivery MAC Protocol for Real-Time Sensor Network Applications',
          desc: 'Lynn Choi and Sang Hoon Lee<br>Wireless Networks: Volume 21, Issue 3 (2015), Page 883-898',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2010 - 2014',
      items: [
        {
          title: 'A+MAC A Streamlined Variable Duty-Cycle MAC Protocol for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee and Lynn Choi<br>International Journal of Distributed Sensor Networks, vol. 2013, Article ID 784509, 8 pages, 2013',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Traffic Adaptive Routing for Mobile Sensor Networks',
          desc: 'Ki Sup Hong, Sang Hoon Lee and Lynn Choi<br>To Appear in the IEICE Transactions on Communications, Vol.E96-B, No.05, 2013',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Transient Coordinator a Collision Resolution Algorithm for Asynchronous MAC protocols in Wireless Sensor Networks',
          desc: 'Sang Hoon Lee and Lynn Choi<br>KSII TRANSACTIONS ON INTERNET AND INFORMATIONS SYSTEMS VOL 6, No.12, Dec 2012, pp 3152-3165',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2005 - 2009',
      items: [
        {
          title: 'An effective tool for recommending opinion leaders in SNS',
          desc: 'Byung Joon Park, Seok-Won Hong and Lynn Choi<br>The INFORMATION-AN INTERNATIONAL INTERDISCIPLINARY JOURNAL',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'A+MAC: A Streamlined Variable Duty-Cycle MAC Protocol for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee, Byung Joon Park and Lynn Choi<br>The SENSOR LETTERS',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Stability and Cost: Path Quality Metrics for Mobile Adhoc Networks',
          desc: 'Sang Hoon Lee, Yong Soo Bae, Byung Joon Park, and Lynn Choi<br>The INFORMATION JOURNAL',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Scalable Packet Classification Through Rulebase Partitioning Using the Maximum Entropy Hashing',
          desc: 'Lynn Choi, Hyogon Kim, Sunil Kim, Moon Hae Kim<br>IEEE/ACM Transactions on Networking, Vol. 17, Issue 6, Dec. 2009, pp. 1926~1935',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'A High-Throughput System Architecture for Deep Packet Filtering in Network Intrusion Prevention',
          desc: 'Dae Y. Kim, Sunil Kim, Lynn Choi, and Hyogon Kim<br>ARCS 2006, LNCS 3894, pp. 407.421, 2006',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Searching Color Images by Emotional Concepts',
          desc: 'Sungyong Hong, Chulbum Ahn, Yunmook Nah, Lynn Choi<br>LNCS 3597, Springer Verlag 2005, pp.361-365. (Proc. HSI 2005, July 2005, Tokyo, Japan)',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Virtual Sink Rotation Low Energy Scalable Routing Protocol for Ubiquitous Sensor Networks',
          desc: 'Lynn Choi, Kwangseok Choi, Jungsun Kim, Byung Joon Park<br>The USN 2005 (LNCS), The 1st International Workshop on RFID and Ubiquitous Sensor Networks, Dec. 2005, Nagasaki, Japan',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2000 - 2004',
      items: [
        {
          title: 'Packet_Classification_through_Hierarchical_Rulebase Partitioning',
          desc: 'Lynn Choi, S.W. Kim, J. Joung<br>IEE Electronics Letters, Vol. 40, Issue. 18, Page(s):1158-1159, 2nd September, 2004',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Scalable Packet Classification Through Maximum Entropy Hashing',
          desc: 'Lynn Choi, Jaesung Heo, Hygon Kim, Sunil Kim (2004)<br>Lecture Notes in Computer Science, NETWORKING 2004: Networking Technologies, Services, and Protocols; Performance of Computer and Communication Networks; Mobile and Wireless Communications, vol. 3042, pages 296-307, Athens, Greece, May 2004',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Enforcement of Architectural Safety Guards to Deter Malicious Code Attacks Thorough Buffer Overflow Vulnerabilities',
          desc: 'Lynn Choi, Yong Shin (2004)<br>Lecture Notes in Computer Science, Organic and Pervasive Computing - ARCS 2004, vol. 2981, pages 47-60, Augsburg, Germany, March 2004',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Taming Large Classifiers with Rule Reference Locality',
          desc: 'Hyogon Kim, Jaesung Heo, Lynn Choi, Inhye Kang, Sunil Kim<br>Lecture Notes in Computer Science, Information Networking: Networking Technologies for Enhanced Internet Services, Vol. 2662, pages 928-937, Feb. 2003',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Characterization and Modeling of a New Via Structure in Multilayered Printed Circuit Boards',
          desc: 'D.H. Kwon, J.W. Kim, K.I. Kw, S.C. Choi, J.H. Lim, J.H Park, Lynn Choi, S. W. Hwang, S.H. Lee<br>IEEE Transactions on Components and Packaging Technologies, 26권 2호, 2003',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'WDM SCM Multiple Access Protocol with High Throughput and Low Packet Delay for Passive Double Star Networks',
          desc: 'Jintae Yu, Myungmoon Lee, Yongbum Kim, Yongwon Lee, Sangrok Lee, Lynn Choi, Jinwoo Park<br>Computer Networks, 39권 2호, 151 ~ 164, 2002',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Adaptive and Automatic Creation of Hierarchical WML Decks for Efficient Access of Wireless Internet under Wirless Application Protocol',
          desc: 'Lynn Choi, Dae Gun Kim, Seung Jin Lee, Chul Hee Kang<br>Lecture Notes in Computer Science, Vol. 2524, pages 453-460, Springer-Verlag Press, November 2002',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Efficient Access Using Hierarchical WML Decks for Multimedia Services under Wireless and Mobile networks',
          desc: 'D. K. Kim, S. J. Lee, L. Choi, C. H. Kang<br>Lecture Notes in Computer Science, Springer Press, Vol. 2496, pp.289-301, 2002',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Compiler Analysis for Cache Coherence Interprocedural Array Data-Flow Analysis',
          desc: 'Lynn Choi, P. C. Yew<br>IEEE Transactions on Parallel and Distributed Systems, Vol.11, No.9, September 2000',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Hardware and Compiler-Directed Cache_Coherence in Large Scale Multiprocessors: Design Considerations and Performance Study',
          desc: 'Lynn Choi, P. C. Yew<br>IEEE Transactions on Parallel and Distributes Systems, Vol.11, No.4, April 2000',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '1995 - 1999',
      items: [
        {
          title: 'Techniques for Compiler-Directed Cache Coherence',
          desc: 'Lynn Choi, Hock-Beng Lim, and Pen-Chung Yew<br>IEEE Parallel and Distributed Technology, Vol. 4, No. 4, pages 23-34, Winter 1996',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'The Design and Performance Evaluation of the DI-multicomputer',
          desc: 'Lynn Choi, Andrew A. Chien<br>Journal of Parallel and Distributed Computing,Vol. 36, No. 2, pages 119-143, 1996',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Interprocedural Array Data-Flow Analysis for Cache Coherence',
          desc: 'Lynn Choi, P. C. Yew<br>Languages and Compilers for Parallel Computing, Lecture Notes in Computer Science, Springer-Verlag Press, pages 81-95, 1995',
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