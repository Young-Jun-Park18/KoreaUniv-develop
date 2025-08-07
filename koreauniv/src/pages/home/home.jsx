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
                <h2 className="popup-title">공과대학원 컴퓨터시스템 연구실 대학원생 & 연구원 모집</h2>
              </div>

              <div className="popup-body">
                <p className="popup-description">
                  고려대학교 컴퓨터시스템 연구실은 어떠한 장비 없이 휴대폰만으로 세계 최고의 측위 성능 (KOLAS 공인시험 성적 82cm) 을 갖는 실내 측위 기술을 독자적으로 개발 (2020년 산업자원부 NET 신기술 인증) 하여, 지하철 / KTX 역사 내비게이션, 스마트 공장의 작업자 안전, 백화점 / 쇼핑몰에서의 위치 기반 마케팅, 박물관 안내 및 내비게이션, 해군 함정에서의 lively 형태의 디지털 트윈 서비스, 병원에서의 환자 / 의료진 위치 추적, 건설 현장에서의 작업자 안전, 화재 / 재난 상황에서의 실시간 위치 추적 및 구조, 코로나 / 메르스 등 전염병 전파 경로 실시간 분석, 출입 및 보안 관제 등 다양한 위치 기반 서비스와 신기술에 대한 상용화를 추진 중에 있습니다.<br></br><br></br> 실내측위 기술과 LBS (위치 기반 서비스) 시장은 향후 반도체 시장에 버금가는 파급력을 가진 4차 산업의 핵심 플랫폼 기술로써 고려대학교 컴퓨터시스템 연구실은 실내측위 분야에서 세계 대회 1, 2, 3등 연구팀 대비 10배 이상의 측위 성능을 갖는 압도적인 기술력을 보유하고 있습니다. 세계 최고의 독자적인 신기술 개발에 참여를 원하는 우수한 대학원생과 Postdoc 연구원을 모집하고 있으니 적극적인 참여를 바랍니다.
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