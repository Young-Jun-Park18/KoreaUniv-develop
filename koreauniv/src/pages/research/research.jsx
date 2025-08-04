import React, { useState } from 'react';
import './research.css';

const Research = () => {
  const [activeTab, setActiveTab] = useState('area');

  const getHeroTitle = () => {
    switch (activeTab) {
      case 'area':
        return 'Research Area';
      case 'projects':
        return 'Projects';
      default:
        return 'Research Area';
    }
  };

  // 연구 분야 데이터
  const researchAreas = [
    {
      id: 'section1',
      number: 1,
      title: '실내 위치 인식 알고리즘',
      icon: '/images/icon1.png',
      description: [
        '실외 환경과는 달리 실내 환경에서는 GPS 수신이 불가능하여 위치 기반 서비스가 아직 상용화되지 못 하고 있습니다. 현재 실내 위치 인식에는 WiFi AP나 블루투스 비콘의 전파 신호 세기를 활용한 지문인식과 삼각 측량 방법이 주로 사용되며, 스마트폰의 모션 센서를 이용한 보행자 추측 항법(PDR), 지자기 센서를 활용하여 자기장 세기를 측정하고 자기장 맵을 구성하여 위치를 추정하는 자기장 기반 위치 인식 등 다양한 방법이 시도되고 있습니다. 그러나 RF 신호의 불안정성으로 인해 전파 신호 기반 위치 인식의 오차가 여전히 상당하게 나타나고 있습니다.',
        '따라서 본 연구실은 실내 위치 인식과 관련하여 기존의 지문인식 기술과, PDR, 그리고 자기 장 기반 위치 인식은 물론, 서버 중심의 서비스를 위해 \'역 지문인식\'이라는 새로운 알고리즘을 제안하고 있습니다. 지문인식 기술, PDR, 자기장 기반 위치 인식과 함께 이 알고리즘을 활용하여 인식 오차를 줄이기 위한 다양한 알고리즘과 실험을 진행하고 있습니다. 이러한 위치 인식 알고리즘은 연구재단의 X 프로젝트와 현대엘리베이터의 실내 위치 인식 시스템 구현에 적용되고 있으며, 앞으로 1~2년 이내에 상용화 수준의 실내 위치 인식 시스템을 개발하고 구현하는 데 주력하고 있다.'
      ]
    },
    {
      id: 'section2',
      number: 2,
      title: '무선 센서 네트워크에서의 저전력 고성능 통신 프로토콜 연구',
      icon: '/images/icon2.png',
      image: '/images/2_11.png',
      description: [
        '미래의 IoT 및 유비쿼터스 컴퓨팅 시대에는 저렴한 센서 노드들이 협력하여 자율적인 무선 네트워크를 구축하고 정보를 교환하여 군사, 교통, 의료, 산악, 해양 등 다양한 환경에서 새로운 응용 서비스를 제공할 것으로 예측됩니다. 센서 노드들은 일반적으로 배터리를 전력 공급원으로 사용하며 전체 에너지 소비 중 무선 통신이 가장 큰 비중을 차지하기 때문에 효율적인 통신 방법에 대한 연구가 활발히 진행되고 있습니다. 본 연구팀은 이러한 문제를 해결하기 위해 기존의 센서 네트워크 프로토콜과 비교하여 2배 이상의 성능 향상과 2배에서 10배 이상의 에너지 절감을 가능하게 하는 VSR, TAR, AMAC, SPEEDMAC, ZEROMAC 등의 새로운 무선 MAC 및 라우팅 통신 프로토콜을 제안하였습니다.',
        'VSR은 Virtual Sink Rotation의 약자로 이동 싱크 노드를 가진 센서 네트워크에서 전체 네트워크의 에너지 소비를 줄이고 싱크 노드 주위의 에너지 집중 현상을 해결하기 위한 라우팅 프로토콜입니다. VSR은 일반 센서 노드를 싱크 노드 대신하는 가상 싱크로 지정함으로써 싱크 노드의 이동을 효과적으로 지원하며 가상 싱크 회전 기술을 통해 네트워크 내의 에너지 소비를 분산시킬 수 있습니다. AMAC은 기존의 센서 네트워크 MAC 사이클 시간 기법을 활용하여 전송 경로상의 노드들이 고-duty 사이클과 저-duty 사이클을 가지도록 하여 저전력 고성능 MAC 프로토콜을 구현합니다. SPEEDMAC은 전력 소비를 최소화하고 실시간 통신을 가능하게 하는 고속 WSN 데이터 전송 프로토콜로, 노드 간의 wake up 시간을 왜곡시켜 다중 홉 네트워크에서의 전송 지연을 최소화합니다. ZEROMAC은 RF watchdog 센서를 사용하여 휴면 상태에서도 통신 유무를 확인하여 유휴 청취와 휴면 지연 문제를 해결합니다. 이를 기반으로 zero idle listening 및 zero sleep delay 성능을 제공하는 저전력/고성능 비동기식 무선 센서 네트워크 프로토콜인 ZEROMAC이 개발되었습니다.'
      ]
    },
    {
      id: 'section3',
      number: 3,
      title: '방화벽 및 라우터에서의 고속 패킷 분류 알고리즘 연구',
      icon: '/images/icon3.png',
      image: '/images/3_1.png',
      description: [
        '인터넷에서의 모든 트래픽은 라우팅, 보안, 서비스 품질 개선 등을 이유로 개개의 패킷 별로 감시되고 통제된다. 이를 위해 학교나 회사 등 기관은 물론, 개인용 컴퓨터에 이르기까지 자체 네트워크로 출입되는 모든 패킷을 검사하여 정의된 규칙에 따라 패킷의 출입을 통제하는 알고리즘을 패킷 분류 알고리즘이라 하며 이는 방화벽은 물론 라우터, 스위치, 가상 사설 망 (VPN) 등 다양한 네트워크장비에 필수적인 기능이다. 10 Gbps 급 이상의 고속의 인터넷 장비에서 출입되는 모든 패킷을 실시간으로 분류 하기 위해서는 고속의 패킷 분류 알고리즘이 필수적이다.',
        '본 연구팀은 "Entropy Hashing을 이용한 확장 가능한 패킷 분류 알고리즘"을 발명하 였으며 이 기술은 분류 규칙의 수가 약 2만개 정도에서 머물러 있던 기존 패킷 분류 알고리즘의 성능을 100배 이상 향상시켜 100 만개 이상의 분류 규칙을 지닌 초대형 룰 베이스에서도 효과적으로 동작할 수 있게 하는 기술이다. 본 연구팀은 이 기술과 관련하여 (주)삼성전자 종합기술원과 국내 및 국제 특허 공동 출원 계약을 체결하였 고 현재 국내 및 미국 특허를 출원하였다.'
      ]
    },
    {
      id: 'section4',
      number: 4,
      title: '버퍼 오버플로우 공격의 차단 및 복구를 위한 안전한 프로세서 마이크로구조 연구',
      icon: '/images/icon4.png',
      description: [
        '버퍼 오버플로우 취약성을 통한 악성 코드 공격은 1988년 모리스 웜을 시작으로 최근의 Code Red I, II, SQL Slammer, W32 Blaster에 이르기까지 가장 자주 발생하는 유형의 악성 코드 공격이다. 또한, 컴퓨터 사용자와의 상호작용 없이 독립적으로 시스템에 침입할 수 있고 SQL Slammer의 예와 같이 30분 이내에 전 세계의 인터넷 망을 마비시킬 수 있는 매우 빠른 전파 속도를 가지기 때문에 기존의 Anti-Virus 소프트웨어로의 처리가 불가능한 가장 치명적인 형태의 보안 위협이다.',
        '본 연구팀은 기존의 알려진 Worm 뿐만 아니라 새로운 형태의 악성 코드 공격까지 프로세서 하드웨어가 자체적으로 시스템을 진단하여 공격을 감지, 악성코드의 실행을 저지시키고 더 나아가서 버퍼 오버플로우 공격으로 훼손된 데이터를 복구하여 주는 안전한 프로세서 마이크로 구조를 제안하였다. 또 이 연구와 관련하여 국내 특허는 물론 대학 산업기술지원단 (UNITEF)의 지원을 받아 미국, 일본 및 유럽 등 해외 29개 국에 특허 출원 중이며 2005년 대한민국기술이전박람회에 출품되어 전시되었고 2006년 KOTRA에서 주관하는 해외기술수출입 사업에 선정되어 해외 기술이전 및 상용화를 진행 중에 있다. 최린 교수는 본 연구와 관련하여 2006년도 정보과학회 가헌학술상을 수상하였다.'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="research-scroll-section research-section">
      {/* Hero Section with Background Image and Tabs */}
      <div className="research-hero-section">
        <div className="research-hero-overlay">
          <h1 className="research-hero-text">Introduction</h1>
          <h3 className="research-hero-subtitle">고려대학교 실내측위 연구실</h3>
          <p className="research-hero-description">
            고려대학교 컴퓨터시스템 연구실은 IoT, 실내 위치 인식, 무선 애드 혹 저전력 통신 프로토콜, 멀티코어 CPU 칩 설계 등 컴퓨터 시스템
            전반에서의 다양한 아키텍처 및 알고리즘 분야를 폭넓게 연구하고 있다.<br /><br />
            본 연구실의 지도 교수인 최린 교수는 Intel 사에서 고성능 64 비트 마이크로프로세서인 Itanium 프로세서 개발 팀에서 코어 파이프라인의
            설계 및 검증을 다 년간 수행한 개발 경험이 있으며 University of Illinois at Urbana-Champaign 대학 및
            University of California at Irvine 대학에서 슈퍼컴퓨터, 병렬 프로세서 구조, 병렬 컴파일러, 고성능 마이크로프로세서
            구조 연구 등 컴퓨터 시스템 분야에서의 연구 및 개발 경험을 바탕으로 연구를 지도해 나가고 있다. 본 연구실에서 현재 수행하고 있는 연구 내용은
            다음과 같다.
          </p>
        </div>
        <div className="research-hero-button-container">
          <button
            className={`research-hero-button ${activeTab === 'area' ? 'active' : ''}`}
            onClick={() => setActiveTab('area')}
          >
            <span>Research Area</span>
          </button>
          <button
            className={`research-hero-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span>Projects</span>
          </button>
        </div>
      </div>

      {/* Research Area Content */}
      {activeTab === 'area' && (
        <div className="research-content">
          {/* Introduction Section */}
          <section className="research-intro-section">
            <div className="research-intro-content">
              <h2 className="research-intro-title">Introduction</h2>
              <h3 className="research-intro-subtitle">고려대학교 실내측위 연구실</h3>
              <p className="research-intro-description">
                고려대학교 컴퓨터시스템 연구실은 IoT, 실내 위치 인식, 무선 애드 혹 저전력 통신 프로토콜, 멀티코어 CPU 칩 설계 등 컴퓨터 시스템
                전반에서의 다양한 아키텍처 및 알고리즘 분야를 폭넓게 연구하고 있다.<br /><br />
                본 연구실의 지도 교수인 최린 교수는 Intel 사에서 고성능 64 비트 마이크로프로세서인 Itanium 프로세서 개발 팀에서 코어 파이프라인의
                설계 및 검증을 다 년간 수행한 개발 경험이 있으며 University of Illinois at Urbana-Champaign 대학 및
                University of California at Irvine 대학에서 슈퍼컴퓨터, 병렬 프로세서 구조, 병렬 컴파일러, 고성능 마이크로프로세서
                구조 연구 등 컴퓨터 시스템 분야에서의 연구 및 개발 경험을 바탕으로 연구를 지도해 나가고 있다. 본 연구실에서 현재 수행하고 있는 연구 내용은
                다음과 같다.
              </p>
            </div>
          </section>

          {/* Research Overview */}
          <section className="research-overview">
            <div className="research-overview-content">
              <h2 className="research-section-title">Research</h2>
              <h4 className="research-section-subtitle">Indoor Positioning Laboratory Research</h4>
              
              <div className="research-buttons">
                <div className="research-button-row">
                  <div className="research-button-col">
                    <button 
                      className="research-button"
                      onClick={() => scrollToSection('section1')}
                    >
                      <div className="research-button-icon">
                        <img src="/images/icon1.png" alt="Research Icon 1" />
                      </div>
                      <div className="research-button-text">
                        실내 위치 인식 <br />알고리즘
                      </div>
                    </button>
                  </div>
                  <div className="research-button-col">
                    <button 
                      className="research-button"
                      onClick={() => scrollToSection('section2')}
                    >
                      <div className="research-button-icon">
                        <img src="/images/icon2.png" alt="Research Icon 2" />
                      </div>
                      <div className="research-button-text">
                        무선 센서 네트워크에서의<br />저전력 고성능 통신 프로토콜 연구
                      </div>
                    </button>
                  </div>
                </div>
                <div className="research-button-row">
                  <div className="research-button-col">
                    <button 
                      className="research-button"
                      onClick={() => scrollToSection('section3')}
                    >
                      <div className="research-button-icon">
                        <img src="/images/icon3.png" alt="Research Icon 3" />
                      </div>
                      <div className="research-button-text">
                        방화벽 및 라우터에서의<br />고속 패킷 분류 알고리즘 연구
                      </div>
                    </button>
                  </div>
                  <div className="research-button-col">
                    <button 
                      className="research-button"
                      onClick={() => scrollToSection('section4')}
                    >
                      <div className="research-button-icon">
                        <img src="/images/icon4.png" alt="Research Icon 4" />
                      </div>
                      <div className="research-button-text">
                        버퍼 오버플로우 공격 차단 및 복구를 위한<br />안전한 프로세서 마이크로구조 연구
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Details */}
          {researchAreas.map((area) => (
            <section key={area.id} id={area.id} className="research-detail">
              <div className="research-detail-content">
                <h4 className="research-detail-number">Research.{area.number}</h4>
                <h3 className="research-detail-title">{area.title}</h3>
                
                {area.image && (
                  <div className="research-detail-image">
                    <img src={area.image} alt={`Research ${area.number} Image`} />
                  </div>
                )}
                
                <div className="research-detail-description">
                  {area.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Projects Content (placeholder) */}
      {activeTab === 'projects' && (
        <div className="research-projects-content">
          <div className="research-projects-placeholder">
            <h2>Projects</h2>
            <p>프로젝트 내용이 여기에 표시됩니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Research;