import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // 페이지 로드시 팝업 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 100); // 0.1초 후 팝업 표시

    return () => clearTimeout(timer);
  }, []);

  // 슬라이드 데이터 (영상만)
  const slides = [
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Px0nIEo9l1k',
      title: '제로맵 실내측위 엔진 실시간 측위'
    },
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

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="page-wrapper">
      {/* 모집 팝업 */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="popup-close" onClick={closePopup}>×</button>
            
            <div className="popup-content">
              <div className="popup-header">
                <div className="popup-image-container">
                  <img 
                    src="/images/tiger.png"  // 기존에 잘 보이는 이미지로 임시 테스트
                    alt="Korea University Tiger" 
                    className="popup-image"
                    onError={(e) => {
                      console.log('Image failed to load:', e.target.src);
                      // tiger.png로 fallback 시도
                      if (e.target.src.includes('236_.png')) {
                        e.target.src = '/images/tiger.png';
                      } else {
                        e.target.style.display = 'none';
                      }
                    }}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                </div>
              </div>
              
              <div className="popup-title-section">
                <h2 className="popup-title">공과대학원 실내측위 연구실 대학원생 & 연구원 모집</h2>
              </div>

              <div className="popup-body">
                <p className="popup-description">
                  고려대학교 실내측위 연구실은 인프라 없이 (비콘, AP, 배선 공사 없이) 현장 방문 없이 (전파맵, 자기장맵 수집 없이) 스마트폰만을 사용하여 실내에서 1 미터 이내의 측위 오차를 갖는 세계 최고 수준의 실내측위 기술을 연구, 개발, 상용화하고 있습니다. 또한, 세계 최초로 건물의 설계 도면만을 입력으로 실내 측위, 3D 모델 생성, 디지털 트윈 관제 서비스, 3D 내비게이션 서비스를 모두 원격으로 자동 생성하는 제로맵 측위 기술, 제로맵 디지털 트윈 기술 등 원천 기술을 개발, 보유하고 있는 세계 최고의 실내측위 연구팀입니다.<br></br><br></br>이 제로맵 측위 기술의 측위 성능은 공인시험 기준, 고려대학교 창의관 (5천평)에서 층고를 포함한 3차원 측위 성능 82cm (2025년 5월), 또 1만평 규모의 해군 구축함에서는 3차원 측위 성능 65cm (2025년 7월), 또 3 천평 규모의 LG 화학 여수 플랜트 건물에서는 LG CNS와 자체 시험 기준 3차원 측위 성능 80cm (2023년 4월)의 측위 오차로 2024년 IPIN 세계 대회 입상팀 (1위 독일팀 5.5미터, 2위 중국팀 6.4미터, 3위 중국팀 30미터 이상) 대비 7배에서 30배 앞선 압도적인 측위 성능을 갖고 있습니다. 연구팀은 2020년 지구자기장 기반 측위 기술로 대학에서는 7년 만에 처음으로 산업자원부로부터 NET 신기술인증을 수여했고, 동 기술로 최린 교수는 2022년 대한민국 산업기술대전에서 대통령 표창을 수여했습니다.
                </p>

                <div className="popup-sections">
                  <div className="popup-section">
                    <h3 className="section-title">연구 분야</h3>
                    <ul>
                      <li>강화학습 기반 실내측위 신기술 개발</li>
                      <li>딥러닝 및 실내 지구자기장 기반 초정밀 실내측위 기술 개발</li>
                      <li>블루투스, Wi-Fi를 이용한 차세대 RF 실내측위 기술 개발</li>
                      <li>스마트폰 모션 센서 기반의 사물 및 보행자 추측 알고리즘 개발</li>
                      <li>자기장 센서를 이용한 주차 센서 개발</li>
                      <li>3D 실내 내비게이션 서비스 개발</li>
                      <li>위치 기반 서비스를 위한 안드로이드, 아이폰 App 개발</li>
                    </ul>
                  </div>

                  <div className="popup-section">
                    <h3 className="section-title">모집 분야</h3>
                    <ul>
                      <li>석사 / 박사 / 석박통합과정</li>
                      <li>Postdoc 연구원</li>
                      <li>석사 및 학사 연구원</li>
                      <li>Android 및 iOS 개발 경험자 : 1명</li>
                      <li>DB 및 서버 개발 경험자 : 1명</li>
                    </ul>
                  </div>

                  <div className="popup-section">
                    <h3 className="section-title">자격 요건</h3>
                    <ul>
                      <li>전 학년 평점 평균 3.0/4.5 이상</li>
                      <li>전자공학, 컴퓨터 공학 및 IT 관련 학과 전공자</li>
                      <li>연구원의 경우 군 병역 필 및 면제 혹은 그에 상응하는 자</li>
                    </ul>
                  </div>

                  <div className="popup-section">
                    <h3 className="section-title">대우 조건</h3>
                    <ul>
                      <li>석사 및 박사 과정 : 등록금 전액 및 연구실적에 따른 별도의 성과금 지급</li>
                      <li>Postdoc 연구원 및 개발 직원 : 연봉 4000 ~ 6000만 원에 상응하는 금액 지급</li>
                      <li>자율 출퇴근 - 주 1회 연구실 미팅 진행</li>
                      <li>국내 외 학회참가 및 교육 지원</li>
                      <li>행정담당 연구원 별도 근무 중</li>
                    </ul>
                  </div>

                  <div className="popup-section">
                    <h3 className="section-title">지원 방법</h3>
                    <ul>
                      <li>석사 / 박사 / 석박통합 과정 일정은 고려대학교 일반대학원 전형일정 참조</li>
                      <li>학위과정 진행 전 연구실에서 인턴 / 연구원 근무 가능 (상시)</li>
                      <li>연구원 / 직원 채용 지원 필요 서류 :<br/>
                        - 자기소개서<br/>
                        - 성적증명서<br/>
                        - 졸업증명서 (졸업예정 증명서)<br/>
                        - 별도의 서류제출 원할 시 추가 첨부
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="popup-contact">
                  <h3 className="section-title">담당자</h3>
                  <p>손원준</p>
                  <p>Email: swj8905@korea.ac.kr</p>
                  <p>Tel: +82-2-3290-3896</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  #236, Engineering Building, 145 Anam-ro, Korea University, Seongbuk-gu,
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
              #236, Engineering Building, 145 Anam-ro, Korea University, Seongbuk-gu,
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
            Engineering Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
            <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
            <br />Tel : +82-2-3290-3896
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;