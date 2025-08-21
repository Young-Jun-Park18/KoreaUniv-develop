import React from 'react';
import './research.css';

const Research = () => {
  // 연구 분야 데이터
  const researchAreas = [
    {
      id: 'section2',
      number: 1,
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
      number: 2,
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
      number: 3,
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
    <div className="page-wrapper">
      <div className="research-timeline-page">
        {/* Hero Section with Background Image */}
        <section className="research-hero-section">
          <div className="research-hero-overlay">
            <h1 className="research-hero-text">Research Area</h1>
          </div>
        </section>

        {/* Research Area Content */}
        <div className="research-content">
          {/* Zero Map Technology Section */}
          <section className="zeromap-section">
            <div className="zeromap-content">
              <h2 className="zeromap-title">1. 제로맵 실내측위 기술<span className="title-dot">.</span></h2>
              
              <div className="zeromap-image">
                <img src="/images/research1.png" alt="제로맵 실내측위 기술" />
              </div>
              
              <div className="zeromap-description">
                <p>
                  본 기술은 세계 최초로 <strong>사전 데이터 (자기장맵, 전파맵) 수집 없이</strong>, 또 비콘이나 AP와 같은 전파발생 <strong>장비나 전기 배선 공사 없이</strong> (인프라 프리), <strong>스마트폰만으로 실내에서 절대 측위 가능한 국내에서 개발된 독자적인 원천 기술</strong>이다.
                </p>
                <p>
                  본 제로맵 측위 기술은 건물의 CAD 설계 도면을 입력으로 건물의 구조와 사용자의 이동 가능 영역을 분석하고, 스마트폰의 실시간 센서 데이터 (자기장, 자이로스코프, 가속도, 기압 등)를 입력으로 사용자의 스마트폰 소지 위치 (손에 들고 있을 때, 주머니 속 등), 보행 및 경로 정보 등을 추정하여 실시간으로 실내에서 층고를 포함한 사용자의 절대 위치를 추정한다.
                </p>
                <p>
                  연구팀은 제로맵 엔진 기술을 적용하여 여수 산업단지에 있는 LG 화학 플랜트 건물 (3000평 규모)에서 LG CNS와 자체 시험 성적 (2023년 4월) 기준 <strong>3차원 측위 오차 80cm</strong> 수준의 측위 성능을 달성하였고, 대한민국 해군 구축함 (1만평 규모) 에서는 공인시험기관을 통한 일반성적 (2025년 7월) 기준, <strong>3차원 측위 오차 65cm</strong>, 또 고려대학교 공과대학 내 10층 규모의 창의관 건물에 적용하여 층고를 포함해서 공인시험 (2025년 5월) 기준 <strong>82cm 오차의 3차원 측위 성능</strong>을 달성하였다. 이는 <strong>세계 대회 입상팀</strong> (IPIN 2024 competition 1위팀 (독일) 5.5 미터, 2위팀 (중국) 6.6 미터, 3위팀 (중국) 30 미터 이상) <strong>대비 7 배에서 30 배 이상의 성능 격차를 갖는 세계 최고 수준의 측위 기술</strong>이다.
                </p>
              </div>
            </div>
          </section>

          {/* Zero Map Digital Twin Technology Section */}
          <section className="zeromap-section">
            <div className="zeromap-content">
              <h2 className="zeromap-title">2. 제로맵 디지털트윈 기술<span className="title-dot">.</span></h2>
               
              <div className="zeromap-description">
                <p>
                  디지털 트윈 기술은 현실의 물리적 객체나 시스템을 가상 공간에 재현하는 기술로서 실제 모습과 유사한 3차원 (3D) 모델을 생성하는 것이 가장 기본적인 작업이다. 3D 모델을 제작하기 위해서는 1단계로, 카메라와 라이다 센서 장비를 이용하여 현장을 물리적으로 스캔하는 작업이 필요하며, 이를 통해 획득한 포인트 클라우드 형태의 모델은 현장 표면의 미세한 굴곡마저 처리되어 수백 MB에서 수십 GB에 이르는 크고 무거운 3D 모델을 생성하게 된다. 따라서 Unity나 Unreal과 같은 3D 엔진에서 구동하기에는 메모리 용량과 계산량 부담으로 시스템 로드가 안되거나 구동 시 성능이 저하되는 문제점을 갖는다. 이러한 문제를 해결하기 위해 3단계로 디자이너의 수작업을 통해, 3D 모델의 품질은 유지하면서 면과 꼭지점 개수를 줄이기 위해 수개월 이상의 시간과 노력이 소요된다. 현재까지의 국내외 대부분의 디지털 트윈 업체들은 이러한 방식을 사용하고 있으며, 따라서 디지털 트윈 생성에는 많은 시간과 비용이 소모되는 문제점을 갖는다.
                </p>
                <p>
                  본 <strong>제로맵 디지털 트윈 기술은 현장 방문과 카메라 및 라이다 장비를 이용한 물리적 스캔 없이</strong> 또, <strong>디자이너의 수작업 없이</strong>, <strong>도면만을 입력으로</strong> 실제 현장의 3D 모델을 자동으로 생성한다. 건물의 외벽, 내벽, 문, 창문, 복도, 로비, 에스컬레이터, 엘리베이터, 계단의 배치 등 여러 다양한 형태의 설계 도면 양식을 분석하여 <strong>한 치의 오차도 없는 정밀하면서 고품질의 3D 모델을 자동으로 생성</strong>한다. 자동 생성된 3D 모델은 측위 앱, 실내 측위 시뮬레이션, 실내 3D 내비게이션, 3D 디지털 트윈 관제 서비스에 활용된다.
                </p>
              </div>

              <div className="zeromap-image-with-caption">
                <img src="/images/research2.png" alt="제로맵 디지털트윈 기술" />
                <p className="image-caption">자동 생성된 3D 디지털 트윈 (고려대학교 공학관)</p>
              </div>

            </div>
          </section>

          {/* Earth Magnetic Field Based Indoor Positioning Technology Section */}
          <section className="zeromap-section">
            <div className="zeromap-content">
              <h2 className="zeromap-title">3. 지구 자기장 기반 실내측위 기술<span className="title-dot">.</span></h2>
              
              <div className="zeromap-image">
                <img src="/images/research3.png" alt="지구 자기장 기반 실내측위 기술" />
              </div>
              
              <div className="zeromap-description">
                <p>
                  실내 지구 자기장의 분포 패턴을 딥러닝의 순환신경망 (Recurrent Neural Network, RNN) 기술을 사용하여 기계학습 함으로써 Wi-Fi AP나 블루투스 비콘 등과 같은 추가적인 장비 설치 없이 스마트폰만을 사용하여 실내에서 1 미터 내외의 측위 성능을 갖는 세계 최고 수준의 실내측위 기술이다 (KOLAS 인증 공인시험 성적 기준 73cm). 연구팀의 기술은 단일 지문이 아니라 보행자가 이동하면서 연속적으로 취득한 지문들의 시퀀스를 이용하기 때문에 이동 거리가 길어지면 지문의 시퀀스가 유니크해지는 특징을 이용하여 현재의 위치를 기존 단일 지문 방식에 비하여 보다 정확하게 추정할 수 있다.
                </p>
                <p>
                  본 기술에는 실시간 측위 성능을 향상시키고 안정적인 측위가 가능하게 하는 다양한 기술이 탑재되어 있다. Vector calibration 알고리즘은 3차원 자기장 벡터를 실시간으로 보정하여 실시간 측위 성능을 증가시키고, 사용자의 이동 방향이나 스마트폰 파지 자세에 상관없이 안정적인 성능이 나올 수 있게 한다. Bias normalization은 스마트폰 기종마다 존재하는 편차를 효과적으로 제거해 스마트폰 기종이 달라도 안정적인 측위 성능을 제공한다. 또한, 딥러닝 기반의 측위 엔진과 별개로 동작하는 instat localization 엔진은 초기 수렴 속도와 측위 성능 및 안정성을 크게 개선시키고 절대 이동 방향을 추정할 수 있게 한다.
                </p>
                <p>
                  본 기술을 통해 2020년 산업통상자원부로부터 NET 신기술인증을 취득하였고, 2022년에는 대한민국산업기술대전에서 대통령 표창을 수여했다.
                </p>
              </div>
            </div>
          </section>

          {/* Multi-floor Positioning Technology Section */}
          <section className="zeromap-section">
            <div className="zeromap-content">
              <h2 className="zeromap-title">4. 계단·엘리베이터·에스컬레이터 복층 측위 기술<span className="title-dot">.</span></h2>
              
              <div className="zeromap-image">
                <img src="/images/research4.png" alt="계단·엘리베이터·에스컬레이터 복층 측위 기술" />
              </div>
              
              <div className="zeromap-description">
                <p>
                  복잡한 복층 건물에서는 단층에서의 위치 뿐만 아니라 사용자의 정확한 수직 위치를 파악하는 것이 중요하다. Wi-Fi AP나 블루투스 비콘만을 활용해 층을 인식하는 기존의 기술은 신호의 잡음, 간섭, 반사, 회절 등으로 인해 다른 층에서 발생되는 전파 신호가 수신될 수 있으며 이는 정확한 층 인식을 어렵게 만든다.
                </p>
                <p>
                  본 연구팀이 개발한 기술은 가속도, 자이로스코프, 기압 센서 등을 복합적으로 활용해 사용자가 현재 위치한 층을 정확히 식별하고, 계단, 엘리베이터, 에스컬레이터를 이용해 층을 이동할 때 수직 이동을 실시간으로 감지하고 추정한다. 층을 올라가고 있는지, 내려가고 있는지, 엘리베이터를 타고 있다면 현재 몇 층을 지나치고 있는지까지 정밀하게 파악할 수 있다.
                </p>
                <p>
                  고려대학교 공과대학 내 10층 규모의 창의관 건물에서 공인시험 (2025년 5월) 기준 현재 층 및 층 이동 인식 정확도 100%를 달성하였고, 1.3층, 1.5층, 1.7층과 같이 더 복잡한 층 구조를 갖고 있는 LG 화학 플랜트 건물에서도 자체 시험에서 층 인식 성공률 100%를 달성하였다.
                </p>
              </div>
            </div>
          </section>

          {/* Research Details */}
          {researchAreas.map((area) => (
            <section key={area.id} id={area.id} className="research-detail">
              <div className="research-detail-content">
                <h4 className="research-detail-number">Previous Research.{area.number}</h4>
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

        {/* Back to Top 버튼 */}
        <a href="#" className="research-back-to-top">
          ↑
        </a>

        {/* Research Footer - Full Width */}
        <footer className="research-footer">
          <div className="research-footer-content">
            <hr className="research-footer-divider" />
            <h3 className="research-footer-title">Indoor Positioning Laboratory</h3>
            <p className="research-footer-text">
              Engineering Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
              <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
              <br />Tel : +82-2-3290-3896
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Research;