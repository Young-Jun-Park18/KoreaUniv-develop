import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
  const [currentYear, setCurrentYear] = useState('Current');

  // 프로젝트 데이터 (태그 추가)
  const projectData = [
    {
      year: 'Current',
      items: [
        {
          title: '미래도전국방기술 연구개발사업 수행 중',
          date: '(2022.11 ~ 2025.10) 초정밀 실내측위 기반 해군 함정의 실시간 디지털 트윈 서비스 및 AR 글래스를 이용한 대테러 작전 수행 시스템 연구',
          link: '/project2',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '국방과학연구소', type: '' },
            { text: '대한민국 해군', type: '' }
          ]
        },
        {
          title: '디지털기반 건축시공 및 안전감리 기술개발 사업 수행 중',
          date: '(2022.04 ~ 2026.12) 건설 현장 내 작업자 안전을 위한 제로맵 실내 측위 기술 개발',
          link: '/project1',
          tags: [
            { text: '제로맵 기반(3세대)', type: 'warning' },
            { text: 'R&D', type: 'primary' },
            { text: '국토교통부', type: '' }
          ]
        },
      ]
    },
    {
      year: 'Past',
      items: [
        {
          title: '교통약자를 위한 도시철도 역사내 맞춤형 스마트 내비게이션 개발',
          date: '(2022.11 ~ 2024.02) 수원역 대합실 및 KTX, 지하철 1호선 플랫폼을 대상으로 실내측위 시스템을 구축하고 교통약자 맞춤형 실내 길안내 서비스 (2D) 개발',
          link: '/project3',
          tags: [
            { text: '지구자기장 기반 (3세대)', type: 'warning' },
            { text: 'R&D', type: 'primary' },
            { text: '산업통상자원부', type: '' },
            { text: '한국철도공사', type: '' }
          ]
        },
        {
          title: 'LG화학 여수 화학 단지 측위시스템 Pilot 구축',
          date: '2022.11.22 ~ 2022.12.31',
          tags: [
            { text: 'Pilot', type: 'primary' },
            { text: 'LG화학', type: '' }
          ]
        },
        {
          title: '위치기반 마케팅 플랫폼 개발을 위한 실내 측위 시스템 구축',
          date: '2021.08.13 ~ 2023.12.31',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '마케팅', type: '' }
          ]
        },
        {
          title: '블록체인 기반 KU Mobile ID 체계 수립 및 구축',
          date: '2019.03.01 ~ 2021.12.31',
          tags: [
            { text: '블록체인', type: 'warning' },
            { text: 'KU', type: '' }
          ]
        },
        {
          title: '스마트 공장 안전 및 관제 시스템을 위한 지구 자기장 기반 실내측위 기술의 포스코 현장 성능 검증',
          date: '2021.02.01 ~ 2021.11.26',
          tags: [
            { text: '포스코', type: '' },
            { text: '지구자기장 기반', type: 'warning' }
          ]
        },
        {
          title: '장애인 실내 길안내 내비게이션 서비스',
          date: '2020.07.01 ~ 2020.12.31',
          tags: [
            { text: '내비게이션', type: 'primary' },
            { text: '장애인', type: '' }
          ]
        },
        {
          title: '실내 측위를 위한 저전력 웨어러블 소형 태그 보드 설계 및 시작품 제작',
          date: '2019.06.01 ~ 2020.08.31',
          tags: [
            { text: '웨어러블', type: 'warning' },
            { text: '설계', type: '' }
          ]
        },
        {
          title: '미래창조과학부 정보통신산업진흥원',
          date: '2015.06.01 ~ 2020.12.31',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '미래창조과학부', type: '' }
          ]
        },
        {
          title: '원퍼스트, 현대 모비스',
          date: '2018.06.01 ~ 2019.05.31',
          tags: [
            { text: '현대 모비스', type: '' }
          ]
        },
        {
          title: '한국연구재단 선도연구과제',
          date: '2017.03.01 ~ 2020.02.28',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '한국연구재단', type: '' }
          ]
        },
        {
          title: '현대엘리베이터',
          date: '2016.08.01 ~ 2017.12.31',
          tags: [
            { text: '현대엘리베이터', type: '' }
          ]
        },
        {
          title: '미래창조과학부 X-Project',
          date: '2015.12.01 ~ 2016.11.31',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: 'X-Project', type: '' }
          ]
        },
        {
          title: '정보통신산업진흥원',
          date: '2015.06.01 ~ 2018.12.31',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '정보통신산업진흥원', type: '' }
          ]
        },
        {
          title: '정보통신산업진흥원',
          date: '2013.05.01 ~ 2014.04.30',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '정보통신산업진흥원', type: '' }
          ]
        },
        {
          title: '한국IT서비스산업협회',
          date: '2010.03.01 ~ 2014.02.28',
          tags: [
            { text: '협회', type: '' }
          ]
        },
        {
          title: '한국연구재단',
          date: '2010.05.01 ~ 2013.04.30',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '한국연구재단', type: '' }
          ]
        },
        {
          title: 'ETRI',
          date: '2009.10.01 ~ 2010.03.31',
          tags: [
            { text: 'ETRI', type: '' }
          ]
        },
        {
          title: '삼성전자',
          date: '2009.09.01 ~ 2009.12.31',
          tags: [
            { text: '삼성전자', type: '' }
          ]
        },
        {
          title: 'ETRI',
          date: '2008.12.05 ~ 2009.03.31',
          tags: [
            { text: 'ETRI', type: '' }
          ]
        },
        {
          title: '삼성전자',
          date: '2007.01.01 ~ 2007.12.31',
          tags: [
            { text: '삼성전자', type: '' }
          ]
        },
        {
          title: '한국과학재단',
          date: '2007.09.01 ~ 2012.08.31',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '한국과학재단', type: '' }
          ]
        },
        {
          title: 'ETRI',
          date: '2006.08.01 ~ 2007.03.01',
          tags: [
            { text: 'ETRI', type: '' }
          ]
        },
        {
          title: '한국소프트웨어진흥원',
          date: '2005.03.01 ~ 2006.02.01',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '한국소프트웨어진흥원', type: '' }
          ]
        },
        {
          title: '한국학술진흥재단',
          date: '2003.12.01 ~ 2005.11.01',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '한국학술진흥재단', type: '' }
          ]
        },
        {
          title: '한국학술진흥재단',
          date: '2003.12.01 ~ 2004.11.01',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '한국학술진흥재단', type: '' }
          ]
        },
        {
          title: '삼성종합연구소',
          date: '2003.07.01 ~ 2004.06.30',
          tags: [
            { text: '삼성종합연구소', type: '' }
          ]
        },
        {
          title: '시스템집적반도체기반기술 개발사업',
          date: '2001.07.01 ~ 2003.06.30',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '시스템집적', type: '' }
          ]
        },
        {
          title: '과학기술부',
          date: '2001.09.01 ~ 2004.08.30',
          tags: [
            { text: 'R&D', type: 'primary' },
            { text: '과학기술부', type: '' }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.projects-year-section');
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const triggerPoint = scrollTop + windowHeight * 0.4;

      let activeYear = 'Current';

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
        const yearDisplay = document.getElementById('projectsYearDisplay');
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

  return (
    <div className="page-wrapper">
      <div className="projects-page">
        {/* Hero Section with Background Image */}
        <section className="projects-hero-section">
          <div className="projects-hero-overlay">
            <h1 className="projects-hero-text">Projects</h1>
          </div>
        </section>

        {/* Projects Timeline Content */}
        <div className="projects-split-timeline-container">
          {/* Left Half - Year Display */}
          <div className="projects-left-year-section">
            <div className="projects-year-display" id="projectsYearDisplay">{currentYear}</div>
          </div>

          {/* Right Half - Project Cards */}
          <div className="projects-right-cards-section">
            <div className="projects-cards-container">
              {projectData.map((yearBlock) => (
                <div 
                  key={yearBlock.year} 
                  className="projects-year-section" 
                  data-year={yearBlock.year}
                >
                  <div className="projects-section-header">
                    {yearBlock.year === 'Current' ? '진행 중인 프로젝트' : '완료된 프로젝트'}
                  </div>
                  <div className="projects-cards-column">
                    {yearBlock.items.map((item, idx) => (
                      <div className="projects-card-item" key={idx}>
                        <a href={item.link} className="projects-card">
                          <div className="projects-card-tags">
                            {item.tags?.map((tag, tagIdx) => (
                              <span 
                                key={tagIdx} 
                                className={`projects-card-tag ${tag.type}`}
                              >
                                {tag.text}
                              </span>
                            ))}
                          </div>
                          <h3 className="projects-card-title">{item.title}</h3>
                          <p className="projects-card-date">{item.date}</p>
                          {yearBlock.year === 'Current' && (
                            <div className="projects-card-hover-indicator">자세히 보기 →</div>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top 버튼 */}
        <a href="#" className="projects-back-to-top">
          ↑
        </a>

        {/* Projects Footer - Full Width */}
        <footer className="projects-footer">
          <div className="projects-footer-content">
            <hr className="projects-footer-divider" />
            <h3 className="projects-footer-title">Indoor Positioning Laboratory</h3>
            <p className="projects-footer-text">
              Industry-Academy Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
              <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
              <br />Tel : +82-2-3290-3896
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Projects;