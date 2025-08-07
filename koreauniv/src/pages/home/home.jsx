import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 데이터
  const slides = [
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/-lI_BdjyUqY?si=kDU6XSvLLeBZ1g4r',
      title: '제로맵 엔진 기반 실시간 3D 디지털 트윈 관제'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Z_yduvIs0ss?si=kDU6XSvLLeBZ1g4r',
      title: '도면 기반 3D 디지털 트윈 자동 생성'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/k-OBdaatTNc?si=kDU6XSvLLeBZ1g4r&start=28',
      title: '지구자기장 기반 실내 3D 내비게이션'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/_a3YOjTsJnI?si=POClzdmv06MaqcXu',
      title: '수원역 실내 3D 내비게이션'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/_2ag0gWkJLc?si=PKKeH9IlWAGxgqbP',
      title: 'SK미래관 실시간 3D 디지털 트윈 관제 데모'
    },
    {
      type: 'image',
      src: '/images/main0_0.png',
      title: 'LG 화학 여수 플랜트, 제로맵 실내측위 시스템 구축',
      description: 'LG 화학 플랜트에서 1미터 이내 측위 오차의 세계 최고 수준 실내측위 시스템 구축 최린 교수팀, 독자적인 경량화 측위 엔진 기술 적용',
      link: 'https://www.asiatime.co.kr/article/20230615500331#_enliple#_mobwcvr'
    },
    {
      type: 'image',
      src: '/images/main1_1.jpg',
      title: '대한민국 산업기술대전 산업기술진흥유공 대통령 표창',
      description: '전기전자공학부 최린 교수가 \'2022 대한민국 산업기술 R&D 대전\'에서 기술개발부문에서 산업기술진흥유공 정부포상자(훈격: 대통령표창)로 선정.',
      link: 'https://www.yna.co.kr/view/RPR20221208004100353'
    },
    {
      type: 'image',
      src: '/images/main1_2.jpg',
      title: '세계 최초 수도권 지하철/KTX 역사 실내측위 시스템 및 실내 내비게이션 앱 개발 착수',
      description: '최린 교수 연구팀, 딥러닝 기반의 지자기 실내측위 기술을 이용 지하철 역사 내 교통약자 위한 맞춤형스마트 내비게이션 개발 계획'
    },
    {
      type: 'image',
      src: '/images/main1_3.jpg',
      title: 'NET 신기술 인증',
      description: '딥러닝 기술 사용 자기장 기반 실내측위, NET 신기술 인증',
    },
    {
      type: 'image',
      src: '/images/main555.jpeg',
      title: '스마트폰만으로 실내 공간 위치 정밀 확인',
      description: '최린 교수 연구팀은 \'딥러닝 기반 지구자기장(지자기) 실내 측위 기술\'을 개발, 산업통상자원부 산하 국가기술표준원의 NET 신기술 인증을 획득했다고 최근 밝혔다. 이 기술은 2020년 2차 신기술 인증 수여식에서 대표적 신기술로 소개되기도 했다.',
      link: 'http://www.koit.co.kr/news/articleView.html?idxno=79886'
    },
    {
      type: 'image',
      src: '/images/main6.jpeg',
      title: '[ 중앙 일보 ] 고려대 연구진 실내측위 기술 개발',
      description: '연구진은 딥러닝의 순환신경망(Recurrent Neural Networks) 기술을 사용해 실내 지구자기장의 분포 패턴을 기계학습했다. 이를 이용해 사람 또는 사물의 실내 위치를 추적하는 방식을 고안했다. 비콘이나 AP와 같은 추가적인 장비의 설치 없이 스마트폰만으로 대형 실내 공간에서 50~80 cm 수준의 측위가 가능하다.',
      link: 'https://www.joongang.co.kr/article/23892177#home'
    }
  ];

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: '디지털기반 건축 시공 및 안전감리 기술 개발',
      client: '국토교통부',
      period: '2022.04.01~2026.12.31',
      image: '/images/transportBg.jpg',
      link: '/project1'
    },
    {
      id: 2,
      title: '산학연 주관 미래도전 국방기술 연구개발',
      client: '국방 과학 연구소',
      period: '2022.11.25 ~ 2025.10.31',
      image: '/images/labBg2.png',
      link: '/project2'
    },
    {
      id: 3,
      title: '도시철도 역사내 맞춤형 스마트 내비게이션 개발',
      client: '산업자원부',
      period: '2022.05.01~2023.12.31',
      image: '/images/ktxBg.jpg',
      link: '/project3'
    },
    {
      id: 4,
      title: 'LG화학 여수 화학 단지 측위시스템 Pilot 구축',
      client: 'LG CNS',
      period: '2022.11.22 ~ 2022.12.31',
      image: '/images/lgBg.jpg',
      link: 'https://www.asiatime.co.kr/article/20230615500331#_enliple#_mobwcvr',
      external: true // 외부 링크임을 표시
    },
    {
      id: 5,
      title: '위치기반 마케팅 플랫폼 개발을 위한 실내 측위 시스템 구축',
      client: 'TA9',
      period: '2021.08.13~2023~12.31',
      image: '/images/ta9Bg.png',
    },
    {
      id: 6,
      title: '자기장 기반 실내측위 기술의 포스코 현장 성능 검증',
      client: '포스코',
      period: '2021.02.01~2021.11.26',
      image: '/images/poscoBg.png',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="page-wrapper">
      <div className="home-page">
        {/* Hero Carousel Section */}
        <section className="home-hero-section">
          <div className="home-hero-overlay">
            <p className="home-hero-subtitle">Korea University</p>
            <h1 className="home-hero-text">Indoor Positioning Laboratory</h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="home-content">
          {/* Featured Carousel Section */}
          <section className="featured-carousel-section">
            <div className="carousel-container">
              <div className="carousel-inner">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                  >
                    {slide.type === 'video' ? (
                      <div className="video-container">
                        <div className="slide-header">
                          <h3 className="slide-title">{slide.title}</h3>
                        </div>
                        <iframe
                          src={slide.src}
                          title={slide.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="image-container" onClick={() => slide.link && window.open(slide.link, '_blank')}>
                        <div className="slide-header">
                          <h3 className="slide-title">{slide.title}</h3>
                        </div>
                        <img src={slide.src} alt={slide.title} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    id={`slide-indicator-${index}`}
                    name={`slide-indicator-${index}`}
                    className={index === currentSlide ? 'active' : ''}
                    onClick={() => goToSlide(index)}
                    aria-label={`슬라이드 ${index + 1}로 이동: ${slide.title}`}
                    title={`슬라이드 ${index + 1}: ${slide.title}`}
                  />
                ))}
              </div>

              {/* Carousel Controls */}
              <button 
                className="carousel-control prev" 
                onClick={prevSlide}
                aria-label="이전 슬라이드"
                title="이전 슬라이드"
              >
                <span>&lt;</span>
              </button>
              <button 
                className="carousel-control next" 
                onClick={nextSlide}
                aria-label="다음 슬라이드"
                title="다음 슬라이드"
              >
                <span>&gt;</span>
              </button>
            </div>
          </section>

          {/* Projects Section */}
          <section className="projects-section">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
            </div>
            
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <h6 className="project-client">{project.client}</h6>
                    <h6 className="project-period">{project.period}</h6>
                    {/* 외부 링크는 새창으로, 내부 링크는 같은 탭에서 열기 */}
                    <a 
                      href={project.link} 
                      className="project-btn"
                      target={project.external ? "_blank" : "_self"}
                      rel={project.external ? "noopener noreferrer" : undefined}
                    >
                      View Details &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Information Section */}
          <section className="info-section">
            <div className="section-header">
              <h2 className="section-title">Information</h2>
            </div>
            
            <div className="info-grid">
              <div className="info-card">
                <h3 className="info-title">Research</h3>
                <a href="/research" className="info-btn">Indoor Localization</a>
                <a href="/research" className="info-btn">Internet of Things</a>
                <a href="/research" className="info-btn">Computer Architecture</a>
                <a href="/research" className="info-btn">Internet Security</a>
              </div>
              
              <div className="info-card">
                <h3 className="info-title">Notice</h3>
                <img src="/images/236_.png" alt="Location" className="location-image" />
                <h6 className="contact-info">
                  #236, Industry-Academy Building, 145 Anam-ro, Korea University, Seongbuk-gu,
                  Seoul 136-713, Republic of Korea<br /><br />
                  Tel: +82-2-3290-3896<br />
                  E-Mail: swj8905@korea.ac.kr
                </h6>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <div className="section-header">
              <h2 className="section-title">Contact</h2>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.8931278067341!2d127.02288467028194!3d37.583650573217895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbcb11f445687%3A0xba9f0bcf185144c4!2z7ISc7Jq47Yq567OE7IucIOyViOyVlOuPmDPqsIAg6rOg66Ck64yA7ZWZ6rWQIOqzt-2VheuvvOyLmg!5e0!3m2!1sko!2skr!4v1685691831690!5m2!1sko!2skr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Korea University Location"
              />
            </div>
            
            <h6 className="contact-details">
              #236, Industry-Academy Building, 145 Anam-ro, Korea University, Seongbuk-gu,
              Seoul 136-713, Republic of Korea<br /><br />
              Tel: +82-2-3290-3896<br />
              E-Mail: swj8905@korea.ac.kr
            </h6>
          </section>
        </div>
      </div>
            
      {/* Back to Top 버튼 */}
      <a href="#" className="home-back-to-top">
        ↑
      </a>
      
      {/* Home Footer */}
      <footer className="home-footer">
        <div className="home-footer-content">
          <hr className="home-footer-divider" />
          <h3 className="home-footer-title">Indoor Positioning Laboratory</h3>
          <p className="home-footer-text">
            Industry-Academy Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
            <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
            <br />Tel : +82-2-3290-3896
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;