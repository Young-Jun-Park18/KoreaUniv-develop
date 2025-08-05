import React, { useState, useEffect } from 'react';
import './publications.css';

function Publications() {
  const [activeTab, setActiveTab] = useState('journals');
  const [currentYear, setCurrentYear] = useState('2015 - Present');

  // 탭이 변경될 때 즉시 년도 업데이트
  useEffect(() => {
    const newData = getCurrentData();
    if (newData.length > 0) {
      const firstYear = newData[0].year;
      setCurrentYear(firstYear);
      
      // 애니메이션 효과
      const yearDisplay = document.getElementById('publicationsCurrentYearDisplay');
      if (yearDisplay) {
        yearDisplay.classList.add('active');
        setTimeout(() => {
          yearDisplay.classList.remove('active');
        }, 300);
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.publications-year-section');
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const triggerPoint = scrollTop + windowHeight * 0.4;

      let activeYear = getCurrentData()[0]?.year || '2015 - Present';

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
  }, [currentYear, activeTab]);





  
  const journalPublications = [
    {
      year: '2021',
      items: [
        {
          title: 'Low-Memory Indoor Positioning System for Standalone Embedded Hardware',
          desc: 'Han Jun Bae and Lynn Choi<br>Electronics (Special Issue: Real-Time Control of Embedded Systems), Vol 10, No.9, 1059, 29 April 2021',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
      {
      year: '2020',
      items: [
        {
          title: 'Filter cache: filtering useless cache blocks for a small but efficient shared last-level cache',
          desc: 'Han Jun Bae and Lynn Choi<br>The Journal of Supercomputing, Vol 76, No.10, pp 7521-7544, OCT 2020',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2018',
      items: [
        {
          title: '순환신경망을 이용한 자기장 기반 실내측위시스템',
          desc: '배한준, 최 린, 박병준<br>한국차세대컴퓨팅학회 논문지 2018년 12월, 페이지 57-65, 2018년',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: 'Dynamic directory table with victim cache: on‑demand allocation of directory entries for active shared cache blocks',
          desc: 'Han Jun Bae and Lynn Choi<br>INTERNATIONAL JOURNAL OF SENSOR NETWORKS AND DATA COMMUNICATIONS, Vol 7, No.4, Nov 2018',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2017',
      items: [
        {
          title: 'ZeroMAC: Toward a zero sleep delay and zero idle listening media access control protocol with ultralow power radio frequency wakeup sensor',
          desc: 'Sang Hoon Lee and Lynn Choi<br>International Journal of Distributed Sensor Networks, Vol 13, No.8, APR 2017',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '동적 디렉터리 테이블 : 공유 캐시 블록의 디렉터리 엔트리 동적 할당',
          desc: '배한준, 최 린<br>정보과학회논문지, 제44권 12호, 페이지 1245-1251, 2017년',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '지구 자기장 기반 지문인식 및 추측항법을 결합한 실시간 실내 위치정보 서비스',
          desc: '장호준, 최린<br>정보과학회 컴퓨팅의 실제 논문지, 제23권 4호, 페이지 210-216, 2017년',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '보행자 추측 항법 성능 향상을 위한 스마트폰 전용 모션 센서 보정 알고리즘',
          desc: '김도윤, 최린<br>정보과학회 컴퓨팅의 실제 논문지, 제23권 3호, 페이지 148-155, 2017년',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2016',
      items: [
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
      ],
    },
    {
      year: '2015',
      items: [
        {
          title: 'Introduction to the special issue on software technologies for embedded and ubiquitous systems',
          desc: 'Lynn Choi and Kirner, Raimund<br>Computing, Vol 97, No.3, pp 203-204, MAR 2015',
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
      year: '2013',
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
          title: '센서 네트워크 환경에서 비동기식 MAC 프로토콜을 위한 충돌해결 알고리즘',
          desc: '이상훈, 배용수, 최 린<br>정보과학회논문지, 제 19권 제 1호, 페이지 41-45, 2013년 1월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2012',
      items: [
        {
          title: 'Transient Coordinator a Collision Resolution Algorithm for Asynchronous MAC protocols in Wireless Sensor Networks',
          desc: 'Sang Hoon Lee and Lynn Choi<br>KSII TRANSACTIONS ON INTERNET AND INFORMATIONS SYSTEMS VOL 6, No.12, Dec 2012, pp 3152-3165',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2011',
      items: [
        {
          title: '모바일 센서 네트워크를 위한 트래픽 적응형 라우팅 프로토콜',
          desc: '홍기섭, 이상훈, 최 린<br>정보과학회논문지: 컴퓨팅의 실제 및 레터, 제 17권 제 1호, 페이지 46-50, 2011년 1월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2009',
      items: [
        {
          title: 'Scalable Packet Classification Through Rulebase Partitioning Using the Maximum Entropy Hashing',
          desc: 'Lynn Choi, Hyogon Kim, Sunil Kim, Moon Hae Kim<br>IEEE/ACM Transactions on Networking, Vol. 17, Issue 6, Dec. 2009, pp. 1926~1935',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2008',
      items: [
        {
          title: '링 연결구조 기반의 멀티코어 프로세서를 위한 캐시 일관성 유지 기법',
          desc: '박진영, 최 린<br>정보과학회논문지, 제 14권 제 8호, 페이지 768-772, 2008년 11월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2006',
      items: [
        {
          title: 'A High-Throughput System Architecture for Deep Packet Filtering in Network Intrusion Prevention',
          desc: 'Dae Y. Kim, Sunil Kim, Lynn Choi, and Hyogon Kim<br>ARCS 2006, LNCS 3894, pp. 407.421, 2006',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '다수 혹은 긴 워드 연산을 위한 레지스터 파일 확장을 통한 대칭 및 비대칭 암호화 알고리즘의 가속화',
          desc: '이상훈, 최 린<br>2006년 3월 전자공학회 논문지 제 43권 CI 편 제 2호',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '버퍼 오버플로우 공격에 대한 마이크로구조적 방어 및 복구 기법',
          desc: '최 린, 신 용, 이상훈<br>정보과학회논문지: 시스템 및 이론 제 33권 제 3호(2006.4)',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2005',
      items: [
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
      year: '2004',
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
      ],
    },
    {
      year: '2003',
      items: [
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
      ],
    },
    {
      year: '2002',
      items: [
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
      ],
    },
    {
      year: '2001',
      items: [
        {
          title: '차세대 마이크로프로세서 기술 동향',
          desc: '최린<br>대한전자공학회, 대한전자공학회지 Vol.28, No.7, pp.750-758, 2001',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2000',
      items: [
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
      year: '1996',
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
      ],
    },
    {
      year: '1995',
      items: [
        {
          title: 'Interprocedural Array Data-Flow Analysis for Cache Coherence',
          desc: 'Lynn Choi, P. C. Yew<br>Languages and Compilers for Parallel Computing, Lecture Notes in Computer Science, Springer-Verlag Press, pages 81-95, 1995',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2021',
      items: [
        {
          title: 'Low-Memory Indoor Positioning System for Standalone Embedded Hardware',
          desc: 'Han Jun Bae and Lynn Choi<br>Electronics (Special Issue: Real-Time Control of Embedded Systems), Vol 10, No.9, 1059, 29 April 2021',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2020',
      items: [
        {
          title: 'Filter cache: filtering useless cache blocks for a small but efficient shared last-level cache',
          desc: 'Han Jun Bae and Lynn Choi<br>The Journal of Supercomputing, Vol 76, No.10, pp 7521-7544, OCT 2020',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    // 누락된 논문들 추가
    {
      year: 'undated',
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
          title: 'On-Demand Radio Wave Sensor for Wireless Sensor Networks: Towards a Zero Idle Listening and Zero Sleep Delay MAC Protocol',
          desc: 'Sang Hoon Lee, Yong Soo Bae and Lynn Choi<br>Journal of Communications and Networks',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
  ];







  // -----------------conferencePublications --------------
  const conferencePublications = [
    {
      year: '2021',
      items: [
        {
          title: '다양한 사용자의 실제 이동을 반영하기 위한 LSTM을 이용한 자기장 기반 실내 위치인식 시스템',
          desc: '배한준, 최 린<br>한국차세대컴퓨팅학회 2021 한국차세대컴퓨팅학회 춘계학술대회 2021년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2020',
      items: [
        {
          title: 'Fingerprint data map construction using Pedestrian Dead Reckoning for smartphone-based indoor Localization',
          desc: 'Young Woong Ko and Lynn Choi<br>In the Proceedings of 2020 International Conference on Next Generation Computing (ICNGC), 17-19 Dec 2020, Busan, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Low-Memory Embedded Hardware Design for Indoor Positioning System That Can Replace Smart Devices',
          desc: 'Han Jun Bae and Lynn Choi<br>In the Proceedings of 2020 International Conference on Next Generation Computing (ICNGC), 17-19 Dec 2020, Busan, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '3D Indoor Navigation and Monitoring System Using Geomagnetic Field Based Indoor Localization',
          desc: 'Won Joon Son and Lynn Choi<br>In the Proceedings of 2020 International Conference on Next Generation Computing (ICNGC), 17-19 Dec 2020, Busan, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'A New Indoor Monitoring System Using Geomagnetic Field Based Indoor Localization',
          desc: 'Seungkyu Hwang and Lynn Choi<br>In the Proceedings of 2020 International Conference on Next Generation Computing (ICNGC), 17-19 Dec 2020, Busan, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Developing Navigation System for Using Indoor localization',
          desc: 'Hankyeol Kyung and Lynn Choi<br>In the Proceedings of 2020 International Conference on Next Generation Computing (ICNGC), 17-19 Dec 2020, Busan, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Magnetic Vector Calibration for Real-Time Indoor Positioning',
          desc: 'Won Joon Son and Lynn Choi<br>To Appear in 2020 IEEE International Conference on Communications (ICC), 7-11 Jun 2020, Dublin, Ireland',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '지구 자기장 기반 실내측위 기술을 활용한 3D 실내 내비게이션',
          desc: '손원준, 최 린<br>한국차세대컴퓨팅학회 2020 한국차세대컴퓨팅학회 하계학술대회 2020년 8월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '실내 측위 시스템을 위한 스마트 기기 대체 태그 보드 개발',
          desc: '배한준, 최 린<br>한국차세대컴퓨팅학회 2020 한국차세대컴퓨팅학회 하계학술대회 2020년 8월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '스마트폰 기반 실내 위치 인식을 위한 보행자 추측 항법 기반의 지문 데이터 맵 자동 수집',
          desc: '고영웅, 최 린<br>한국차세대컴퓨팅학회 2020 한국차세대컴퓨팅학회 하계학술대회 2020년 8월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2019',
      items: [
        {
          title: 'Fast Magnetic Field Map Collection for Indoor Localization',
          desc: 'Won Joon Son and Lynn Choi<br>In the Proceedings of 2019 International Conference on Next Generation Computing (ICNGC), 19-21 Dec 2019, Chiang Mai, Thailand',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Vector Calibration for Magnetic Field Based Indoor Positioning',
          desc: 'Won Joon Son and Lynn Choi<br>In the Proceedings of 2019 Indoor Positioning and Indoor Localization (IPIN), 30 Sep - 3 Oct 2019, Pisa, Italy',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Large-Scale Indoor Positioning using Geomagnetic Field with Deep Neural Networks',
          desc: 'Han Jun Bae and Lynn Choi<br>In the Proceedings of 2019 IEEE International Conference on Communications (ICC), 20-24 May 2019, China',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Environment Aware Localization with BLE Fingerprinting for the Next Generation PEPS system',
          desc: 'Han Jun Bae and Lynn Choi<br>In the Proceedings of 2019 IEEE Wireless Communications and Networking Conference (WCNC), 15-19 April 2019, Morocco',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '지자기 기반 실내 위치 추정에 사용할 수 있는 지자기 벡터 보정법',
          desc: '손원준, 최 린<br>한국차세대컴퓨팅학회 2019 한국차세대컴퓨팅학회 춘계학술대회 2019년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '순환신경망을 이용한 BLE 실내 위치 추정 향상',
          desc: '김희수, 최 린<br>한국차세대컴퓨팅학회 2019 한국차세대컴퓨팅학회 춘계학술대회 2019년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '스마트폰 기반 보행자 추측 항법을 위한 3축 가속도 센서의 축 보정',
          desc: '고영웅, 최 린<br>한국차세대컴퓨팅학회 2019 한국차세대컴퓨팅학회 춘계학술대회 2019년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '스마트폰 가속도 센서를 사용한 보폭 추정',
          desc: '민태산, 최 린<br>한국통신학회 2019 동계종합학술발표회, 2019년 1월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '실내 위치추정 성능 향상을 위한 지자기 센서 보정법',
          desc: '손원준, 최 린<br>한국통신학회 2019 동계종합학술발표회, 2019년 1월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: 'RNN을 활용한 BLE 실내 위치 인식',
          desc: '김희수, 최 린<br>한국통신학회 2019 동계종합학술발표회, 2019년 1월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2018',
      items: [
        {
          title: 'Semi-Automatic Construction of Field Maps for Fingerprint-based Indoor Positioning System',
          desc: 'Ho Jun Jang, Jae Min Shin and Lynn Choi<br>In the Proceedings of the 4th International Conference on Next Generation Computing (ICNGC 2018), 20-23 December 2018, Vietnam',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'BLE 지문인식을 사용한 차량용 스마트키 위치 인식',
          desc: '구경현, 최 린<br>한국정보과학회 2018 한국컴퓨터종합학술대회 2018, 2018년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: 'LSTM을 이용한 자기장 기반 실내위치인식시스템',
          desc: '배한준, 최 린<br>한국차세대컴퓨팅학회 춘계학술대회 2018, 2018년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2017',
      items: [
        {
          title: 'Geomagnetic Field Based Indoor Localization Using Recurrent Neural Network',
          desc: 'Ho Jun Jang, Jae Min Shin and Lynn Choi<br>In the Proceedings of the 2017 IEEE Global Communications Conference (GLOBECOM), 4-8 December 2017, Singapore',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '동적 디렉터리 테이블 : 공유 캐시 블록의 디렉터리 엔트리 동적 할당',
          desc: '배한준, 최 린<br>한국정보과학회 2017 한국컴퓨터종합학술대회 2017년 6월 [우수논문선정]',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '순환 신경망을 이용한 지구 자기장 기반 실내 위치인식',
          desc: '장호준, 최 린<br>한국정보과학회 2017 한국컴퓨터종합학술대회 2017년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '보행자 추측 항법과 저전력 블루투스 지문인식을 이용한 실내 내비게이션 시스템',
          desc: '김도윤, 구경현, 최 린<br>2017년도 한국차세대컴퓨팅학회 춘계학술대회 2017년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '경로 추정을 이용한 자기장 기반 실내 위치 인식',
          desc: '신재민, 최 린<br>2017년도 한국차세대컴퓨팅학회 하계학술대회 2017년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2016',
      items: [
        {
          title: 'Inverse Fingerprinting : Server side Indoor Localization with Bluetooth Low Energy',
          desc: 'Jae Hyung An and Lynn Choi<br>In the Proceedings of the 2016 IEEE 27th Annual IEEE International Symposium on Personal, Indoor and Mobile Radio Communications - (PIMRC): Mobile and Wireless Networks (IEEE PIMRC2016 Mobile and Wireless), September 4-7, 2016, Valencia, Spain',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Implementation of Sensor-Based 3D Virtual Keyboard for Wearable Devices',
          desc: 'Ji Su Leem and Lynn Choi<br>In the Proceedings of the 1st International Conference on Next Generation Computing 2016(ICNGC 2016), January 28-30, 2016, Bangkok, Thailand',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'BLE RSSI 특성을 이용한 실내 접촉 탐지 알고리즘',
          desc: '구경현, 최 린<br>2016년도 한국차세대컴퓨팅학회 추계학술대회 2016년 10월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '실내 위치 인식 신뢰성 개선을 위한 공간별 전파 특성 분석',
          desc: '김정원, 최 린<br>2016년도 한국차세대컴퓨팅학회 추계학술대회 2016년 10월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '블루투스 v4.0 스캐너 기반 실내 위치 인식 시스템',
          desc: '안재형, 김정원, 최 린<br>한국정보과학회 2016 한국컴퓨터종합학술대회 2016년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '지구 자기장 Finger-Print 및 추측 항법을 결합한 실시간 실내 위치정보 서비스 연구',
          desc: '장호준, 최 린<br>한국정보과학회 2016 한국컴퓨터종합학술대회 2016년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '스마트폰 내 모션 센서를 이용한 걸음 수 추출',
          desc: '김도윤, 최 린<br>한국정보과학회 2016 한국컴퓨터종합학술대회 2016년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '병원 내 전염병 확산 방지를 위한 실내 추적 시스템',
          desc: '안재형, 최 린<br>한국차세대컴퓨팅학회 2016 춘계학술대회 2016년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2014',
      items: [
        {
          title: '기계학습 알고리즘을 이용한 안드로이드 악성코드 탐지',
          desc: '차두진, 최 린<br>한국정보과학회 2014년 동계학술발표회 2014년 12월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '그놈 프로젝트 인적 네트워크의 포괄적 분석',
          desc: '조성호, 최 린<br>한국정보과학회 2014년 동계학술발표회 2014년 12월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '웨어러블 장치를 위한 3d 온라인 필기인식 시스템',
          desc: '김민지, 최 린<br>한국정보처리학회 2014년 추계학술발표대회 2014년 11월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2013',
      items: [
        {
          title: 'Cross-Layer Route Optimization using MAC overhearing for Reactive Routing Protocols in MANETs',
          desc: 'Sang Hoon Lee and Lynn Choi<br>In the Proceedings of the International Conference on ICT Convergence 2013(ICTC 2013), October 14-16, 2013, Jeju, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Influenza Surveillance and Forecast with Smartphone Sensors',
          desc: 'Sang Hoon Lee, Yunmook Nah and Lynn Choi<br>In the Proceedings of the 9th Workshop on Software Technologies for Future Embedded and Ubiquitous Systems(SEUS 2013), June 17-18, 2013, Paderborn, Germany',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Proxy Clock Synchronization Energy-Efficient and Accurate Clock Synchronization for Large-scale Wireless Sensor Networks',
          desc: 'Sang Hoon Lee and Lynn Choi<br>In the Proceedings of the 2013 FTRA International Conference on Advanced IT, engineering and Management(FTRA AIM-13), February 21-23, 2013, Seoul, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Policy-based Automatic Energy Monitoring and Control for Green IDCs',
          desc: 'Sang Hoon Lee, Dong-wook Shin and Lynn Choi<br>In the Proceedings of the 2013 FTRA International Conference on Advanced IT, engineering and Management(FTRA AIM-13), February 21-23, 2013, Seoul, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Starcast: Robust and Energy-Efficient Geometric Routing for Mobile Sensor Networks',
          desc: 'Jae Kyun Jung, Sang Hoon Lee and Lynn Choi<br>In the Proceedings of the 2013 FTRA International Conference on Advanced IT, engineering and Management(FTRA AIM-13), February 21-23, 2013, Seoul, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '이동 애드혹 네트워크의 반응형 라우팅 프로토콜을 위한 오버히어링을 이용한 경로 최적화 방법',
          desc: '배용수, 이상훈, 최 린<br>한국정보과학회 2013 한국컴퓨터종합학술대회 2013년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '무선 센서 네트워크에서의 동적 듀티 사이클 기법 설계 방안 연구',
          desc: '이상훈, 최 린<br>한국정보과학회 2013 한국컴퓨터종합학술대회 2013년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: 'CILS RSSI 가중치를 활용한 협동형 실내 측위 시스템',
          desc: '윤창현, 최 린<br>한국정보과학회 2013 한국컴퓨터종합학술대회 2013년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2012',
      items: [
        {
          title: 'On-Demand Radio Wave Sensor for Wireless Sensor Networks : Towards a Zero Idle Listening and Zero Sleep Delay MAC Protocol',
          desc: 'Sang Hoon Lee, Yong Soo Bae and Lynn Choi<br>In the Proceedings of the Global Communications Conference(Globecom 2012), December 3-7, 2012, California, USA',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Automatic Recognition of Flowers through Color and Edge Based Contour Detection',
          desc: 'Soon Won Hong and Lynn Choi<br>In the Proceedings of the International Conference on Image Processing Theory, Tools and Applications(IPTA 2012), October 15-18, 2012, Istanbul, Turkey',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'The Design of a Ultra-Low Power RF Wakeup Sensor for Wireless Sensor Networks',
          desc: 'Yong Soo Bae, Sang Hoon Lee, and Lynn Choi<br>In the Proceedings of the 18th Asia-Pacific Conference on Communications (APCC 2012), October 15-17, 2012, Jeju, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Stability and Cost Path Quality Metrics for Mobile Adhoc Networks',
          desc: 'Sang Hoon Lee, Yong Soo Bae and Lynn Choi<br>In the Proceedings of the 2012 FTRA International Conference on Advanced IT, engineering and management(FTRA AIM Summer 2012), July 10-12, 2012, Jeju, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'On-Demand RF Wakeup Sensor for Wireless Sensor Networks',
          desc: 'Yong Soo Bae, Sang Hoon Lee, Byung Joon Park and Lynn Choi<br>In the Proceedings of the 2012 International Conference on Information Science and Technology(IST 2012), April 28-30, 2012, Shanghai, China',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Power Control for Web-based Services on Multi-core Server Systems',
          desc: 'Minjoong Kim, Moonju Park, Jinseok Chae, Junsgun Kim and Lynn Choi<br>In the Proceedings of the International Conference on Cloud Computing and Social networking(ICCCSN 2012), April 26-27, 2012, Bandung, Indonesia',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Automatic Flower Recognition using Smartphone',
          desc: 'Soon-Won Hong, Byung Joon Park and Lynn Choi<br>In the Proceedings of the International Conference on Advanced Signal Processing 2012(ASP 2012), March 30-31, 2012, Seoul, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'A+MAC A Streamlined Variable Duty-Cycle MAC Protocol for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee, Byung Joon Park and Lynn Choi<br>In the Proceedings of the International Conference on Computer and Applications (CCA), March 30-31, 2012, Seoul, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'An effective tool for recommending opinion leaders in SNS',
          desc: 'Byung Joon Park, Seok-Won Hong and Lynn Choi<br>In the Proceedings of The 2012 FTRA International Conference on Advanced IT, engineering and Management(FTRA AIM 2012), February 06-08, 2012, Seoul, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '센서 네트워크 환경에서 비동기식 MAC 프로토콜을 위한 충돌해결 알고리즘',
          desc: '이상훈, 배용수, 최 린<br>한국정보과학회 2012 한국컴퓨터종합학술대회 2012년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2011',
      items: [
        {
          title: 'DAG-based Multipath Routing for Mobile Sensor Networks',
          desc: 'Ki-Sup Hong and Lynn Choi<br>In the Proceedings of the International Conference on ICT Convergence 2011 (ICTC 2011), September 28-30, 2011, Seoul, Korea',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '스마트폰을 이용한 꽃 자동 인식 시스템',
          desc: '홍순원, 최 린<br>한국정보과학회 2011 한국컴퓨터종합학술대회 논문집 Vol.38, No.1(A), pp 462~465, 2011년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '모바일 센서 네트워크를 위한 방향성 비순환 그래프 기반의 다중경로 라우팅 프로토콜',
          desc: '홍기섭, 최 린<br>대한전자공학회 2011 하계종합학술대회 논문집 Vol.34, No.1, pp 1441~1444, 2011년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '센서 네트워크를 위한 저전력 RF Wakeup 회로 설계',
          desc: '배용수, 최 린<br>제 21회 통신정보 합동학술대회 (JCCI 2011) 논문집, 2011년 5월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2010',
      items: [
        {
          title: 'Reactive Clock Synchronization for Wireless Sensor Networks with Asynchronous Wakeup Scheduling',
          desc: 'Sang Hoon Lee, Yunmook Nah and Lynn Choi<br>In the Proceedings of the 8th IFIP Workshop on Software Technologies for Future Embedded and Ubiquitous Systems (SEUS 2010), October 13-15, 2010, Waidhofen/Ybbs, Austria',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'SPEED-MAC_Speedy and Energy Efficient Data Delivery MAC Protocol for Real-Time Sensor Network Applications',
          desc: 'Lynn Choi, Sang Hoon Lee<br>In the Proceedings of the 8th IFIP Workshop on Software Technologies for Future Embedded and Ubiquitous Systems (SEUS 2010), October 13-15, 2010, Waidhofen/Ybbs, Austria',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Policy-Based Reprogramming for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee, Lynn Choi, Yunmook Nah, Seungki Hong, Jong-Arm jun<br>In the Proceedings of the IEEE International Workshop on Object/component/service-oriented Real-time Networked Ultra-dependable Systems (WORNUS 2010), May 2010, Spain',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: '비동기식 스케줄링 기반 센서 네트워크를 위한 반응형 클록 동기화 기법',
          desc: '이상훈, 최 린<br>한국정보과학회 2010 한국컴퓨터종합학술대회 논문집 Vol.37, No.1(A), pp 228~229, 2010년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '모바일 센서 네트워크를 위한 트래픽 적응형 라우팅 프로토콜',
          desc: '홍기섭, 이상훈, 최 린<br>한국정보과학회 2010 한국컴퓨터종합학술대회 논문집 Vol.37, No.1(A), pp 202~203, 2010년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2009',
      items: [
        {
          title: 'Chaining Clock Synchronization_an Energy-Efficient Clock Synchronization Scheme for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee, Lynn Choi<br>In the Proceedings of the 10th International Symposium on Pervasive Systems, Algorithms and Networks (ISPAN 2009), pp. 172-177, December 2009, Taiwan',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'RING-DATA ORDER_A New Cache Coherence Protocol for Ring-based Multicores',
          desc: 'Lynn Choi, Jin Young Park<br>In the Proceedings of the 2009 International Conference on High Performance Computing & Simulation (HPCS 2009), pp. 82-88, June 2009, Germany',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'M-MAC_Mobility-Based Link Management Protocol for Mobile Sensor Networks',
          desc: 'Lynn Choi, Sang Hoon Lee, Hyohyun Choi<br>In the Proceedings of the 2009 Software Technologies for Future Dependable Distributed Systems, pp. 210-214, March 2009, Japan',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2008',
      items: [
        {
          title: 'M-Geocast_Robust and Energy-Efficient Geometric Routing for Mobile Sensor Networks',
          desc: 'Lynn Choi, Jae Kyun Jung, Byong-Ha Cho, Hyohyun Choi<br>In the Proceedings of the 6th IFIP Workshop on Software Technologies for Future Embedded & Ubiquitous Systems (SEUS 2008), pp. 304 - 316, Oct. 2008, Italy',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Accelerating Symmetric and Asymmetric Ciphers with Register File Extension for Multi-word and Long-word Operation',
          desc: 'Sang Hoon Lee, Lynn Choi<br>In the Proceedings of the International Conference on Information Science and Information Security (ICISS 2008), pp. 102-107, Jan. 2008, Korea [Invited paper]',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'A Preliminary Study on a Cache Coherence Protocol for Multi-Core Processors with Ring Interconnects',
          desc: '박진영, 최 린<br>한국정보과학회 2008 한국컴퓨터종합학술대회 논문집 Vol.35, No.1(A), pp 303~304, 2008년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: 'Preliminary Study on On-Chip Interconnect Architecture for Multi-Core Processors',
          desc: '최재영, 최 린<br>한국정보과학회 2008 한국컴퓨터종합학술대회 논문집 Vol.35, No.1(B), pp 405~410, 2008년 6월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2007',
      items: [
        {
          title: 'Event-Driven Power Management for Wireless Sensor Networks',
          desc: 'Sang Hoon Lee, Byong-Ha Cho, Lynn Choi, Sun-Joong Kim<br>In the Proceedings of the 5th IFIP Workshop on Software Technologies for Embedded & Ubiquitous Systems (SEUS 2007), pp. 419-428, May 2007, Greece [Invited paper]',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'AMAC_Traffic-Adaptive Sensor Network Mac Protocol through Variable Duty-Cycle Operations',
          desc: 'SangHoon Lee, Joon Ho Park, and Lynn Choi<br>In the Proceedings of the IEEE International Conference on Communications 2007,(ICC 2007), pp. 3259-3264, June 2007, Scotland',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'A Performance Analysis of AODV in Sensor Network',
          desc: '장재혁, 최 린<br>2007년도 한국정보과학회 가을 학술발표논문집 Vol.34, No.2(B), pp 423~428, 2007년 10월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: 'GPS-based V-Geocast Routing Protocol for Mobile Sensor Networks',
          desc: '정재균, 최 린<br>2007년도 한국정보과학회 가을 학술발표논문집 Vol.34, No.2(D), pp 372~375, 2007년 10월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: 'SPEED-MAC Speedy and Energy Efficient Data Delivery MAC Protocol for Wireless Sensor Network',
          desc: '이현준, 이상훈, 최 린<br>2007년도 한국정보과학회 가을 학술발표논문집 Vol.34, No.2(D), pp 597~601, 2007년 10월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2004',
      items: [
        {
          title: 'Scalable_Packet_Classification_Through_Maximum_Entropy_Hashing',
          desc: 'Lynn Choi, Jaesung Heo, Hygon Kim, Sunil Kim<br>In the Proceedings of NETWORKING 2004: Networking Technologies, Services, and Protocols; Performance of Computer and Communication Networks; Mobile and Wireless Communications, vol. 3042, pages 296-307, Athens, Greece, May 2004',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Enforcement_of_Architectural_Safety_Guards_to_Deter_Malicious_Code_Attacks through Buffer Overflow Vulnerabilities',
          desc: 'Lynn Choi, Yong Shin<br>In the Proceedings of ARCS 2004, International Conference on. Architecture of Computing Systems. - Organic and Pervasive Computing vol. 2981, pages 47-60, Augsburg, Germany, March 2004',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '2003',
      items: [
        {
          title: 'Taming_Large_Classifiers_with_Rule_Reference_Locality',
          desc: 'Hyogon Kim, Jaesung Heo, Lynn Choi, Inhye Kang, Sunil Kim<br>In the Proceedings of Information Networking: Networking Technologies for Enhanced Internet Services, Vol. 2662, pages 928-937, Feb. 2003',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Branch_Predictor_Design_and_Performance_Estimation for a High Performance Embedded Microprocessor',
          desc: 'S. H. Lee, I. K. Kim, L. Choi<br>In the Proceedings of Asia and South Pacific Design Automation Conference (ASP-DAC 2003) Tokyo, Japan, 2003',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Instruction Set Extension and Hardware Support for Symmetric and Asymmetric Key Ciphers',
          desc: '김일관, 최 린<br>IEEE Seoul Section 2003 학생 논문 경진 대회, 2003년 12월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '고성능 내장형 마이크로프로세서의 분기 예측기 구현 및 성능 대비 비용 분석',
          desc: '신상훈, 최 린<br>한국정보과학회 2003 추계 학술발표회 논문집, 2003년 10월',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '대칭 및 비대칭 암호화 알고리즘 가속을 위한 명령어 집합 구조의 설계',
          desc: '김일관, 최 린<br>대한전자공학회 2003 하계 종합학술대회 논문집 Vol 26, No 1, pp 1343- 1346',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2002',
      items: [
        {
          title: 'Intelligent and Automatic Creation of Hierarchical WML Decks for Efficient Access of Wireless Internet under Wireless Application Protocol',
          desc: 'L. Choi, D. K. Kim, S. J. Lee, C. H. Kang<br>In the Proceedings of CIC 2002 (The 7th CDMA International Conference) Oct. 29 - Nov. 1, Seoul, Korea, 2002',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Efficient_Access_Using_Hierarchical_WML_Decks_for_Multimedia_Services under Wireless and Mobile Networks',
          desc: 'D. K. Kim, S. J. Lee, L. Choi, C. H. Kang<br>In the Proceedings of 5th IFIP/IEEE International Conference on Management of Multimedia Networks and Services, MMNS, Santa Barbara, CA, Oct.2002',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Multi-level hashing을 사용한 Scalable Packet Classification 알고리듬 연구',
          desc: '허재성, 최 린<br>대한전자공학회 2002 하계 종합학술대회 논문집 Vol 25, No 1, pp 113- 116',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '고성능 내장형 마이크로프로세서를 위한 분기예측기의 설계 및 성능평가',
          desc: '이상혁, 김일관, 최 린<br>대한전자공학회 2002 하계 종합학술대회 논문집 Vol 25, No 1, pp 129- 132',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2001',
      items: [
        {
          title: '계층적 룰베이스 분할을 통한 패킷 분류 방법',
          desc: '김대건, 이승진, 강경용, 최린, 강철희<br>대한전자공학회, 대한전자공학회 2001 하계 종합학술대회',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
        {
          title: '확장성 있는 웹 서비스를 위한 무선 응용 프로토콜 기반의 HTML Filter 구현',
          desc: '이승진, 김대건, 최린, 강철희<br>한국정보과학회 봄 학술발표 논문집, Vol.28, No.1, pp.391-393, 2001',
          lang: 'ko',
          tags: [{ text: 'Domestic', type: 'warning' }],
        },
      ],
    },
    {
      year: '2000',
      items: [
        {
          title: 'Issues_in_Realization_of_an_Execution_Time_Analyzer_for_Distributed_Real-Time_Objects',
          desc: 'Kane Kim, Lynn Choi and Moon H. Kim<br>In the Proceedings of the 3rd IEEE Symposium on Application-Specific Systems and Software Engineering Technology (ASSET 2000), Richardson, Texas, March 2000',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '1996',
      items: [
        {
          title: 'Program_Analysis_for_Cache_Coherence_Beyond_Procedural_Boundaries',
          desc: 'Lynn Choi, Pen-Chung Yew<br>In the Proceedings of the 1996 International Conference on Parallel Processing, Vol. III, pages 103-113, Bloomingdale, IL, Aug. 1996. Also available as CSRD Tech. Report 1483',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Eliminating_Stale_Data_References_through_Array_Data-Flow_Analysis',
          desc: 'Lynn Choi, Pen-Chung Yew<br>In the Proceedings of the 10th IEEE International Parallel Processing Symposium \'96, pages 4-13, Honolulu, Hawaii, Also an early extended version available as a CSRD Technical Report No. 1425',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Compiler_and_Hardware_Support_Cache_Coherence_in_Large-Scale_Multiprocessors Design Considerations and Performance study',
          desc: 'Lynn Choi, Pen-Chung Yew<br>In the Proceedings of the 23rd ACM/IEEE Annual International Symposium on Computer Architecture, pages 283-294, Philadelphia, PA, May 1996. Also an early extended version available as CSRD Tech. Report 1459, Nov. 1995',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
    {
      year: '1994',
      items: [
        {
          title: 'A_Compiler-Directed_Cache_Coherence_Scheme_with_Improved_Intertask_Locality',
          desc: 'Lynn Choi, Pen-Chung Yew<br>In the Proceedings of ACM/IEEE Supercomputing \'94, pages 773-782, Washington, D.C., Nov. 1994. Also available as CSRD Tech. Report No. 1325',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
        {
          title: 'Integrating_Networks_and_Memory_Hierarchies_in_a_Multicomputer_Node_Architecture',
          desc: 'Lynn Choi, Andrew A. Chien<br>In the Proceedings of the 8th IEEE International Parallel Processing Symposium \'94, pages 10-17, Cancun, Mexico, April 1994, Also available as CSRD Tech. Report No. 1477',
          lang: 'en',
          tags: [{ text: 'International', type: 'primary' }],
        },
      ],
    },
  ];
    


  // ----------------- patents -----------------
  const patents = [
    {
      year: '2021',
      items: [
        {
          title: '자기장 지도 획득 시스템, 장치 및 방법',
          desc: '출원번호: 10-2021-0003463 (KR)<br>Inventors: 최린, 황승규<br>출원일: 2021년 1월 11일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '기압과 자기장을 이용한 사용자가 위치한 층 식별 장치 및 방법',
          desc: '출원번호: 10-2021-0003480 (KR)<br>Inventors: 최린, 배한준, 황승규<br>출원일: 2021년 1월 11일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '인공 신경망을 이용한 자기장 기반 위치 추정 모델 생성 장치 및 방법',
          desc: '등록번호: 10-2243917 (KR)<br>Inventors: 최린, 장호준<br>등록일: 2021년 4월 19일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2020',
      items: [
        {
          title: '자기장 기반 위치측정방법 및 위치측정장치',
          desc: '출원번호: 10-2020-0043282 (KR)<br>Inventors: 최린, 손원준<br>출원일: 2020년 4월 9일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2016',
      items: [
        {
          title: '3차원 동작인식 정보입력 장치 및 방법, 이를 구현하기 위한 프로그램이 저장된 기록매체',
          desc: '등록번호: 10-1609553 (KR)<br>Inventors: 최린, 김민지, 배한준<br>등록일: 2016년 3월 31일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '심화 학습을 이용한 지구자기장 기반 실내 위치 인식 방법',
          desc: '출원번호: 10-2016-0092260 (KR)<br>Inventors: 최린<br>출원일: 2016년 7월 20일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2015',
      items: [
        {
          title: '전염병 예방과 확산 방지를 위한 전염병 추적 관리 시스템',
          desc: '출원번호: 10-2015-0155296 (KR)<br>Inventors: 최린, 배한준, 안재형<br>출원일: 2015년 11월 5일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2014',
      items: [
        {
          title: '손가락을 움직임을 이용한 정보 입력 시스템 및 그 입력 방법',
          desc: '출원번호: 10-2014-0044139 (KR)<br>Inventors: 최린, 김민지, 배한준<br>출원일: 2014년 4월 14일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2013',
      items: [
        {
          title: '센서 네트워크를 위한 통신 방법 및 시스템',
          desc: '등록번호: 10-2009-0082617 (KR)<br>Inventors: 홍승기, 전종암, 표철식, 최린, 이상훈<br>등록일: 2013년 5월 24일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2010',
      items: [
        {
          title: 'Sensor network system and communication method thereof',
          desc: 'Application No.: 12/874,856 (US)<br>Inventors: Seung Ki Hong, Jong Arm Jun, Cheol Sig Pyo, Sang Hun Lee, Lynn Choi<br>Filing Date: Sep 2, 2010',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: 'Method for sensing and recovery against buffer overflow attacks and apparatus thereof',
          desc: 'Patent No.: 7,814,333 B2 (US)<br>Inventors: 최린, 신용<br>Date of Patent: Oct 12, 2010',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '센서 네트워크의 네트워크 노드들의 프로그램 방법 및 센서 네트워크의 동작 방법',
          desc: '출원번호: 12/952,664 (US)<br>Inventors: 이상훈, 최린<br>출원일: 2010년 11월 23일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2009',
      items: [
        {
          title: 'Packet classification method through hierarchical rulebase partitioning',
          desc: 'Patent No.: 07480302 B2 (US)<br>Inventors: 최린<br>Date of Patent: Jan 20, 2009',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: 'Communication method in the sensor network using variable duty-cycle scheme',
          desc: '등록번호: 10-0892321 (KR)<br>Inventors: 최린, 이상훈<br>등록일: 2009년 4월 1일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '사건에 따른 센서 네트워크 전원 관리 방법 및 센서네트워크 전원 관리 시스템',
          desc: '등록번호: 10-0911210 (KR)<br>Inventors: 홍승기, 최연준, 김선중, 최린, 이상훈<br>등록일: 2009년 7월 31일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '센서 네트워크의 네트워크 노드들의 프로그램 방법 및 센서 네트워크의 동작 방법',
          desc: '출원번호: 10-2009-0121662 (KR)<br>Inventors: 홍승기, 전종암, 표철식, 이상훈, 최린<br>출원일: 2009년 12월 9일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2008',
      items: [
        {
          title: '신호 강도를 이용한 무선 센서 네트워크의 통신 방법 및 장치',
          desc: '출원번호: 10-2008-0013470 (KR)<br>Inventors: 최효현, 김선기, 최린, 이상훈<br>출원일: 2008년 2월 14일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '무선 센서 네트워크의 가상 싱크 노드를 이용한 통신 방법 및 장치',
          desc: '출원번호: 10-2008-0013469 (KR)<br>Inventors: 최효현, 김선기, 최린, 정재균<br>출원일: 2008년 2월 14일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2007',
      items: [
        {
          title: '사건에 따른 센서 네트워크 전원 관리 방법 및 센서네트워크 전원 관리 시스템',
          desc: '출원번호: 10-2007-0126065 (KR)<br>Inventors: 홍승기, 최연준, 김선중, 최린, 이상훈<br>출원일: 2007년 12월 6일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2006',
      items: [
        {
          title: 'METHOD FOR SENSING AND RECOVERY AGAINST BUFFER OVERFLOW ATTACKS AND APPARATUS THEREOF',
          desc: '출원번호: 10/598,970 (US)<br>Inventors: 최린, 신용<br>출원일: 2006년 6월 22일',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: 'METHOD FOR SENSING AND RECOVERY AGAINST BUFFER OVERFLOW ATTACKS AND APPARATUS THEREOF',
          desc: '출원번호: 05789355.4 (EU)<br>Inventors: 최린, 신용<br>출원일: 2006년 6월 22일',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: 'METHOD FOR SENSING AND RECOVERY AGAINST BUFFER OVERFLOW ATTACKS AND APPARATUS THEREOF',
          desc: '출원번호: 2007-503839 (JP)<br>Inventors: 최린, 신용<br>출원일: 2006년 9월 19일',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '계층적 룰베이스 분할을 통한 패킷 분류 방법',
          desc: '등록번호: 10-0594755 (KR)<br>Inventors: 최린<br>등록일: 2006년 6월 22일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '버퍼 오버플로우 공격들을 감지하고 복구하는 방법 및 그장치',
          desc: '등록번호: 10-0586500 (KR)<br>Inventors: 최린, 신용<br>등록일: 2006년 5월 26일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2005',
      items: [
        {
          title: 'PACKET CLASSIFICATION METHOD THROUGH HIERARCHICAL RULEBASE PARTITIONING',
          desc: 'Patent No.: 11/118,326 (US)<br>Inventors: 최린<br>Filed: 2005년 5월 2일',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '무선 센서 네트워크에서 가상 싱크와 로테이션을 사용한 라우팅 경로 설정 방법',
          desc: 'Patent No.: 10-2005-52257 (KR)<br>Inventors: 최린, 최광석<br>Filed: 2005년 6월 17일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: 'Method for sensing and recovery against buffer overflow attacks and apparatus thereof',
          desc: 'Patent No.: PCT/KR2005/000776<br>Inventors: 최린, 신용<br>Filed: 2005년 3월 18일',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2004',
      items: [
        {
          title: '계층적 룰베이스 분할을 통한 패킷 분류 방법',
          desc: 'Patent No.: P2004-0059058 (KR)<br>Inventors: 최린, 허재성, 정진우<br>Filed: 2004년 7월 28일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
        {
          title: '버퍼 오버플로우 공격들을 감지하고 복구하는 방법 및 그 장치',
          desc: 'Patent No.: 2004-0018279 (KR)<br>Inventors: 최린, 신용<br>Filed: 2004년 3월 18일',
          lang: 'ko',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
    {
      year: '2001',
      items: [
        {
          title: 'Mechanism for saving power on long latency stalls',
          desc: 'Patent No.: 6,233,690 (US)<br>Inventors: Lynn Choi, Harshvardhan Sharangpani<br>Assignee: Intel Corporation<br>Filed: September 17, 1998<br>Approved: May 15, 2001',
          lang: 'en',
          tags: [{ text: 'Patent', type: 'success' }],
        },
      ],
    },
  ];

const getCurrentData = () => {
  switch (activeTab) {
    case 'journals':  // 'journal' → 'journals'
      return journalPublications;
    case 'conferences':  // 'conference' → 'conferences'
      return conferencePublications;
    case 'patents':
      return patents;
    default:
      return journalPublications;
  }
};

  const getHeroTitle = () => {
    switch (activeTab) {
      case 'journals':  // 'journal' → 'journals'
        return 'Journals';  // 'Journal Publications' → 'Journals'
      case 'conferences':  // 'conference' → 'conferences'
        return 'Conferences';  // 'Conference Papers' → 'Conferences'
      case 'patents':
        return 'Patents';
      default:
        return 'Publications';
    }
  };

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div className="page-wrapper">
      <div className="publications-timeline-page">
        {/* Hero Section */}
        <section className="publications-hero-section">
          <div className="publications-hero-overlay">
            <h1 className="publications-hero-text">{getHeroTitle()}</h1>
          </div>
          <div className="publications-hero-button-container">
            <button
              className={`publications-hero-button ${activeTab === 'journals' ? 'active' : ''}`}  // 'journal' → 'journals'
              onClick={() => handleTabChange('journals')}  // 'journal' → 'journals'
            >
              <span>Journals</span>  {/* Journal → Journals */}
            </button>
            <button
              className={`publications-hero-button ${activeTab === 'conferences' ? 'active' : ''}`}  // 'conference' → 'conferences'
              onClick={() => handleTabChange('conferences')}  // 'conference' → 'conferences'
            >
              <span>Conferences</span>  {/* Conference → Conferences */}
            </button>
            <button
              className={`publications-hero-button ${activeTab === 'patents' ? 'active' : ''}`}
              onClick={() => handleTabChange('patents')}
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