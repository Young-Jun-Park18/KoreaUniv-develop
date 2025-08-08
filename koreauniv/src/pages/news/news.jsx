import React from 'react';
import './news.css';

const News = () => {
  // 뉴스 데이터 (기존 home.jsx의 이미지 슬라이드에서 가져온 데이터)
  const newsData = [
    {
      id: 1,
      image: '/images/research2.png',
      title: '핍스디멘션, "도면만으로 3D 모델 생성" 디지털 트윈 新 패러다임',
      description: '현장 방문과 고가 장비 없이 도면 하나로 3D 모델을 생성, 기존 디지털 트윈 제작 방식의 상식을 뒤집는 새로운 패러다임을 제시.',
      link: 'https://news.mt.co.kr/mtview.php?no=2025080710252051714',
      date: '2025.08'
    },
    {
      id: 1,
      image: '/images/main0_0.jpg',
      title: 'LG 화학 여수 플랜트, 제로맵 실내측위 시스템 구축',
      description: 'LG 화학 플랜트에서 1미터 이내 측위 오차의 세계 최고 수준 실내측위 시스템 구축 최린 교수팀, 독자적인 경량화 측위 엔진 기술 적용',
      link: 'https://www.asiatime.co.kr/article/20230615500331#_enliple#_mobwcvr',
      date: '2023.06'
    },
    {
      id: 2,
      image: '/images/main1_1.jpg',
      title: '대한민국 산업기술대전 산업기술진흥유공 대통령 표창',
      description: '전기전자공학부 최린 교수가 \'2022 대한민국 산업기술 R&D 대전\'에서 기술개발부문에서 산업기술진흥유공 정부포상자(훈격: 대통령표창)로 선정.',
      link: 'https://www.yna.co.kr/view/RPR20221208004100353',
      date: '2022.12'
    },
    {
      id: 3,
      image: '/images/main1_2.jpg',
      title: '세계 최초 수도권 지하철/KTX 역사 실내측위 시스템 및 실내 내비게이션 앱 개발 착수',
      description: '최린 교수 연구팀, 딥러닝 기반의 지자기 실내측위 기술을 이용 지하철 역사 내 교통약자 위한 맞춤형스마트 내비게이션 개발 계획',
      date: '2022.11'
    },
    {
      id: 4,
      image: '/images/main1_3.jpg',
      title: 'NET 신기술 인증',
      description: '딥러닝 기술 사용 자기장 기반 실내측위, NET 신기술 인증',
      date: '2020.12'
    },
    {
      id: 5,
      image: '/images/main555.jpeg',
      title: '스마트폰만으로 실내 공간 위치 정밀 확인',
      description: '최린 교수 연구팀은 \'딥러닝 기반 지구자기장(지자기) 실내 측위 기술\'을 개발, 산업통상자원부 산하 국가기술표준원의 NET 신기술 인증을 획득했다고 최근 밝혔다. 이 기술은 2020년 2차 신기술 인증 수여식에서 대표적 신기술로 소개되기도 했다.',
      link: 'http://www.koit.co.kr/news/articleView.html?idxno=79886',
      date: '2020.11'
    },
    {
      id: 6,
      image: '/images/main6.jpeg',
      title: '고려대 연구진 실내측위 기술 개발',
      description: '연구진은 딥러닝의 순환신경망(Recurrent Neural Networks) 기술을 사용해 실내 지구자기장의 분포 패턴을 기계학습했다. 이를 이용해 사람 또는 사물의 실내 위치를 추적하는 방식을 고안했다. 비콘이나 AP와 같은 추가적인 장비의 설치 없이 스마트폰만으로 대형 실내 공간에서 50~80 cm 수준의 측위가 가능하다.',
      link: 'https://www.joongang.co.kr/article/23892177#home',
      date: '2020.09'
    }
  ];

  const handleNewsClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="news-page">
        {/* Hero Section */}
        <section className="news-hero-section">
          <div className="news-hero-overlay">
            <h1 className="news-hero-text">News</h1>
          </div>
        </section>

        {/* News Content */}
        <div className="news-content">
          <div className="news-container">
            <div className="news-header">
              <h2 className="news-section-title">Latest News</h2>
              <p className="news-section-subtitle">Indoor Positioning Laboratory News & Press</p>
            </div>

            <div className="news-list">
              {newsData.map((news) => (
                <article 
                  key={news.id} 
                  className={`news-item ${news.link ? 'clickable' : ''}`}
                >
                  <div 
                    className="news-image-container"
                    onClick={() => handleNewsClick(news.link)}
                  >
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="news-image"
                    />
                  </div>
                  
                  <div className="news-content-container">
                    <h3 
                      className="news-title"
                      onClick={() => handleNewsClick(news.link)}
                    >
                      {news.title}
                    </h3>
                    
                    <p className="news-description">{news.description}</p>
                    
                    <div className="news-meta">
                      <time className="news-date">{news.date}</time>
                      {news.link && (
                        <div className="news-link-indicator">
                          <span>기사 보기 →</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top 버튼 */}
        <a href="#" className="news-back-to-top">
          ↑
        </a>

        {/* News Footer */}
        <footer className="news-footer">
          <div className="news-footer-content">
            <hr className="news-footer-divider" />
            <h3 className="news-footer-title">Indoor Positioning Laboratory</h3>
            <p className="news-footer-text">
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

export default News;