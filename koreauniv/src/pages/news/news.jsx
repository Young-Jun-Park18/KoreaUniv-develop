import React from 'react';
import './news.css';

const News = () => {
  // 뉴스 데이터 (링크가 없는 항목들에 대한 처리 개선)
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
      id: 2,
      image: '/images/news1.avif',
      title: '대한민국 위치정보 우수 비즈니스모델 최우수상',
      description: '방송통신위원회가 주최한 대한민국 위치정보 우수 비즈니스모델 발굴 공모전 (2024 KOREA LBS DAY)에서 최우수상을 수상.',
      link: 'https://news.mt.co.kr/mtview.php?no=2025010313301049212',
      date: '2025.01'
    },
    {
      id: 3,
      image: '/images/news2.avif',
      title: '실내측위 원천기술로 딥테크 팁스 선정',
      description: '중소벤처기업부 주관 빅데이터·AI(인공지능) 분야 딥테크 팁스(TIPS)에 선정.',
      link: 'https://news.mt.co.kr/mtview.php?no=2025010217275166942',
      date: '2025.01'
    },
    {
      id: 4,
      image: '/images/news3.jpg',
      title: '스타필드 코엑스몰 3D 내비게이션 서비스 시범 운영',
      description: '대형 복합 시설에서 스마트폰을 활용한 정밀 위치 추적과 3D 내비게이션 서비스 "연이"의 상용화 가능성 실험.',
      link: 'https://www.venturesquare.net/948867',
      date: '2024.12'
    },
    {
      id: 5,
      image: '/images/news4.avif',
      title: '실내 측위·내비게이션으로 스타트업 분야 대상',
      description: '서울 중구 한국프레스센터에서 열린 머니투데이 주최의 2024 제10회 대한민국 기업대상 시상식에서 실내 측위 기술 부문 스타트업 분야 대상을 수상.',
      link: 'https://news.mt.co.kr/mtview.php?no=2024122017231192709',
      date: '2024.12'
    },
    {
      id: 6,
      image: '/images/news6.jpg',
      title: '경쟁사와 최대 10배 격차, 스마트폰으로 구현한 실내측위 기술',
      description: '한국인정기구(KOLAS) 공인시험에서 1000평(약 3305㎡) 규모 공간의 경우 74cm라는 정확도를 입증',
      link: 'https://news.mt.co.kr/mtview.php?no=2024102412584649042',
      date: '2024.10'
    },
    {
      id: 7,
      image: '/images/news5.avif',
      title: '세오, 핍스디멘션과 MOU 체결..공공조달 시장 공략 나서',
      description: '핍스디멘션 (대표 최 린)과 세오 (대표 김호군)가 전략적 제휴를 위한 MOU(양해각서)를 체결하고 공공 조달 시장 공략',
      link: 'https://news.mt.co.kr/mtview.php?no=2024071712273791057',
      date: '2024.07'
    },
    {
      id: 8,
      image: '/images/news7.png',
      title: '방송통신위원회 개인위치정보사업자 승인',
      description: '방송통신위원회로부터 승인받아 보안 및 개인정보 보호에 대한 체계적 시스템 구축',
      link: 'https://www.data.go.kr/data/15022357/fileData.do?recommendDataYn=Y',
      date: '2024.07'
    },
    {
      id: 9,
      image: '/images/news8.png',
      title: '16회 딥테크 스타트업 프론티어 선발전 대상',
      description: '창업입주경진대회에서 초정밀 측위 기술 기반의 3차원 실내 내비게이션을 통해 대상 수상',
      link: 'https://www.campustown.or.kr/biz.php',
      date: '2024.04'
    },
    {
      id: 10,
      image: '/images/main0_0.jpg',
      title: 'LG 화학 여수 플랜트, 제로맵 실내측위 시스템 구축',
      description: 'LG 화학 플랜트에서 1미터 이내 측위 오차의 세계 최고 수준 실내측위 시스템 구축 최린 교수팀, 독자적인 경량화 측위 엔진 기술 적용',
      link: 'https://www.asiatime.co.kr/article/20230615500331#_enliple#_mobwcvr',
      date: '2023.06'
    },
    {
      id: 11,
      image: '/images/main1_1.jpg',
      title: '대한민국 산업기술대전 산업기술진흥유공 대통령 표창',
      description: '전기전자공학부 최린 교수가 \'2022 대한민국 산업기술 R&D 대전\'에서 기술개발부문에서 산업기술진흥유공 정부포상자(훈격: 대통령표창)로 선정.',
      link: 'https://www.yna.co.kr/view/RPR20221208004100353',
      date: '2022.12'
    },
    {
      id: 12,
      image: '/images/main1_3.jpg',
      title: 'NET 신기술 인증',
      description: '딥러닝 기술 사용 자기장 기반 실내측위, NET 신기술 인증',
      link: '', // 빈 링크
      date: '2020.12'
    },
    {
      id: 13,
      image: '/images/main1_2.jpg',
      title: '세계 최초 수도권 지하철/KTX 역사 실내측위 시스템 및 실내 내비게이션 앱 개발 착수',
      description: '최린 교수 연구팀, 딥러닝 기반의 지자기 실내측위 기술을 이용 지하철 역사 내 교통약자 위한 맞춤형스마트 내비게이션 개발 계획',
      link: '', // 빈 링크
      date: '2022.11'
    },
    {
      id: 14,
      image: '/images/main555.jpeg',
      title: '스마트폰만으로 실내 공간 위치 정밀 확인',
      description: '최린 교수 연구팀은 \'딥러닝 기반 지구자기장(지자기) 실내 측위 기술\'을 개발, 산업통상자원부 산하 국가기술표준원의 NET 신기술 인증을 획득했다고 최근 밝혔다. 이 기술은 2020년 2차 신기술 인증 수여식에서 대표적 신기술로 소개되기도 했다.',
      link: 'http://www.koit.co.kr/news/articleView.html?idxno=79886',
      date: '2020.11'
    },
    {
      id: 15,
      image: '/images/main6.jpeg',
      title: '고려대 연구진 실내측위 기술 개발',
      description: '연구진은 딥러닝의 순환신경망(Recurrent Neural Networks) 기술을 사용해 실내 지구자기장의 분포 패턴을 기계학습했다. 이를 이용해 사람 또는 사물의 실내 위치를 추적하는 방식을 고안했다. 비콘이나 AP와 같은 추가적인 장비의 설치 없이 스마트폰만으로 대형 실내 공간에서 50~80 cm 수준의 측위가 가능하다.',
      link: 'https://www.joongang.co.kr/article/23892177#home',
      date: '2020.09'
    }
  ];

  // 개선된 링크 처리 함수
  const handleNewsClick = (link) => {
    if (link && link.trim() !== '') {
      // 디버깅을 위한 콘솔 로그 추가
      console.log('Opening link:', link);
      
      try {
        window.open(link, '_blank', 'noopener noreferrer');
      } catch (error) {
        console.error('링크 열기 실패:', error);
        // 대체 방법 시도
        window.location.href = link;
      }
    } else {
      console.log('링크가 없습니다.');
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
                  className={`news-item ${news.link && news.link.trim() !== '' ? 'clickable' : ''}`}
                >
                  <div 
                    className="news-image-container"
                    onClick={() => handleNewsClick(news.link)}
                    style={{
                      cursor: news.link && news.link.trim() !== '' ? 'pointer' : 'default'
                    }}
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
                      style={{
                        cursor: news.link && news.link.trim() !== '' ? 'pointer' : 'default'
                      }}
                    >
                      {news.title}
                    </h3>
                    
                    <p className="news-description">{news.description}</p>
                    
                    <div className="news-meta">
                      <time className="news-date">{news.date}</time>
                      {news.link && news.link.trim() !== '' ? (
                        <div 
                          className="news-link-indicator"
                          onClick={() => handleNewsClick(news.link)}
                          style={{ cursor: 'pointer' }}
                        >
                          <span>자세히 보기 →</span>
                        </div>
                      ) : (
                        <div className="news-link-indicator-disabled">
                          <span style={{ color: '#999' }}>링크 준비중</span>
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