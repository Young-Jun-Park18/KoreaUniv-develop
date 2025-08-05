import React, { useState } from 'react'; // useEffect 제거
import './home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 데이터 - 맨 앞과 두 번째에 새 영상 추가
  const slides = [
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/-lI_BdjyUqY?si=kDU6XSvLLeBZ1g4r',
      title: '새로운 실내 측위 기술 소개 영상'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Z_yduvIs0ss?si=kDU6XSvLLeBZ1g4r',
      title: '실내 측위 기술 데모 영상'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/k-OBdaatTNc?si=kDU6XSvLLeBZ1g4r&start=28',
      title: '교통약자를 위한 실내 측위 기술 소개'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/_a3YOjTsJnI?si=POClzdmv06MaqcXu',
      title: '실내 측위 기술 데모'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/_2ag0gWkJLc?si=PKKeH9IlWAGxgqbP',
      title: '실내 측위 시스템 소개'
    },
    {
      type: 'image',
      src: '/images/main0_0.png',
      title: '[ 고려대 뉴스 ] LG 화학 플랜트에서 1미터 이내 측위 오차의 세계 최고 수준 실내측위 시스템 구축',
      description: 'LG 화학 플랜트에서 1미터 이내 측위 오차의 세계 최고 수준 실내측위 시스템 구축 최린 교수팀, 독자적인 경량화 측위 엔진 기술 적용',
      link: 'https://www.korea.ac.kr/user/boardList.do?boardId=474633&command=albumView&page=1&boardSeq=495709&id=university_060108000000'
    },
    {
      type: 'image',
      src: '/images/main1_1.jpg',
      title: '[ 고려대 뉴스 ] 최린 교수님, 2022 대한민국 산업기술진흥 유공자 선정',
      description: '전기전자공학부 최린 교수가 \'2022 대한민국 산업기술 R&D 대전\'에서 기술개발부문에서 산업기술진흥유공 정부포상자(훈격: 대통령표창)로 선정.',
      link: 'https://www.korea.ac.kr/user/boardList.do?boardId=474633&siteId=university&page=2&search=&column=&boardType=02&listType=&id=university_060108000000&parent=&boardSeq=494187&command=albumView'
    },
    {
      type: 'image',
      src: '/images/main1_2.jpg',
      title: '[ 고려대 뉴스 ] 세계 최초 수도권 지하철/KTX 역사 실내측위 시스템 및 실내 내비게이션 앱 개발 착수',
      description: '최린 교수 연구팀, 딥러닝 기반의 지자기 실내측위 기술을 이용 지하철 역사 내 교통약자 위한 맞춤형스마트 내비게이션 개발 계획',
      link: 'https://www.korea.ac.kr/user/boardList.do?boardId=474633&siteId=university&page=1&boardType=02&listType=&id=university_060108000000&parent=&boardSeq=493672&command=albumView&totalYn='
    },
    {
      type: 'image',
      src: '/images/main1_3.jpg',
      title: '[ 고려대 뉴스 ] NET 신기술 인증',
      description: '딥러닝 기술 사용 자기장 기반 실내측위, NET 신기술 인증',
      link: '/news1'
    },
    {
      type: 'image',
      src: '/images/main1_4.jpg',
      title: '[ 고려대 뉴스 ] 스마트폰만으로 대형 실내 공간에서 실내 측위 가능',
      description: '최린 교수팀 "딥러닝 기반 지자기 기반 실내측위 기술" NET 신기술인증받아 공항, 쇼핑몰, 박물관, 공장 등 다양한 실내 공간에서 시범 사이트 구축 추진',
      link: 'https://www.korea.ac.kr/user/boardList.do?boardId=474633&siteId=university&page=1&search=&column=&boardType=02&listType=&id=university_060108000000&parent=&boardSeq=489015&command=albumView'
    },
    {
      type: 'image',
      src: '/images/main555.jpeg',
      title: '[ 정보 통신 신문 ] 스마트폰만으로 실내 공간 위치 정밀 확인',
      description: '최린 교수 연구팀은 \'딥러닝 기반 지구자기장(지자기) 실내 측위 기술\'을 개발, 산업통상자원부 산하 국가기술표준원의 NET 신기술 인증을 획득했다고 최근 밝혔다. 이 기술은 2020년 2차 신기술 인증 수여식에서 대표적 신기술로 소개되기도 했다.',
      link: 'http://www.koit.co.kr/news/articleView.html?idxno=79886'
    },
    {
      type: 'image',
      src: '/images/main6.jpeg',
      title: '[ 중앙 일보 ] 실내에서 3D 네비게이션을?…고려대 연구진 실내측위 기술 개발',
      description: '연구진은 딥러닝의 순환신경망(Recurrent Neural Networks) 기술을 사용해 실내 지구자기장의 분포 패턴을 기계학습했다. 이를 이용해 사람 또는 사물의 실내 위치를 추적하는 방식을 고안했다. 비콘이나 AP와 같은 추가적인 장비의 설치 없이 스마트폰만으로 대형 실내 공간에서 50~80 cm 수준의 측위가 가능하다.',
      link: 'https://www.joongang.co.kr/article/23892177#home'
    }
  ];

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: 'LG화학 여수 화학 단지 측위시스템 Pilot 구축',
      client: 'LG CNS',
      period: '2022.11.22 ~ 2022.12.31',
      image: '/images/main2_1.png',
      link: '/project'
    },
    {
      id: 2,
      title: '산학연 주관 미래도전 국방기술 연구개발',
      client: '국방 과학 연구소',
      period: '2022.11.25 ~ 2025.10.31',
      image: '/images/main2_2.jpg',
      link: '/project_2'
    },
    {
      id: 3,
      title: '도시철도 역사내 맞춤형 스마트 내비게이션 개발',
      client: '산업자원부',
      period: '2022.05.01~2023.12.31',
      image: '/images/main2_3.png',
      link: '/project_3'
    },
    {
      id: 4,
      title: '디지털기반 건축 시공 및 안전감리 기술 개발',
      client: '국토교통부',
      period: '2022.04.01~2026.12.31',
      image: '/images/main2_4.png',
      link: '/project_4'
    },
    {
      id: 5,
      title: '위치기반 마케팅 플랫폼 개발을 위한 실내 측위 시스템 구축',
      client: 'TA9',
      period: '2021.08.13~2023~12.31',
      image: '/images/main2_5.jpg',
      link: '/project'
    },
    {
      id: 6,
      title: '자기장 기반 실내측위 기술의 포스코 현장 성능 검증',
      client: '포스코',
      period: '2021.02.01~2021.11.26',
      image: '/images/main2_6.jpg',
      link: '/project'
    }
  ];

  // 자동 슬라이드 useEffect 제거됨

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
    <div className="home-wrapper">
      {/* Hero Carousel Section - Full Width */}
      <section className="hero-carousel-section">
        <div className="carousel-container">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                {slide.type === 'video' ? (
                  <div className="video-container">
                    <h3 className="slide-title">{slide.title}</h3>
                    <iframe
                      src={slide.src}
                      title={slide.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="image-container">
                    <h3 className="slide-title">{slide.title}</h3>
                    <img src={slide.src} alt={slide.title} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Carousel Indicators - 막대 모양으로 변경 */}
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

          {/* Carousel Controls - 접근성 개선 */}
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

      {/* Content Sections with Container */}
      <div className="content-container">
        {/* Projects Section */}
        <section className="projects-section">
          <h1 className="section-title">Projects</h1>
          <h4 className="section-subtitle">Indoor Positioning Laboratory Projects</h4>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <h6 className="project-client">{project.client}</h6>
                  <h6 className="project-period">{project.period}</h6>
                  <a href={project.link} className="project-btn">
                    View Details &gt;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Information Section */}
        <section className="info-section">
          <h1 className="section-title">Information</h1>
          <h4 className="section-subtitle">Indoor Positioning Laboratory Information</h4>
          
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
          <h1 className="section-title">Contact</h1>
          <h4 className="section-subtitle">Indoor Positioning Laboratory Information</h4>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.8931278067341!2d127.02288467028194!3d37.583650573217895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbcb11f445687%3A0xba9f0bcf185144c4!2z7ISc7Jq47Yq567OE7IucIOyViOyVlOuPmDPqsIAg6rOg66Ck64yA7ZWZ6rWQIOqzte2Vkeq0gA!5e0!3m2!1sko!2skr!4v1685691831690!5m2!1sko!2skr"
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
            
      {/* Back to Top 버튼 */}
      <a href="#" className="home-back-to-top">
        ↑
      </a>
      
      {/* Home Footer - Full Width */}
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