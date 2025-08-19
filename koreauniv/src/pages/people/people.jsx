import React, { useState } from 'react';
import './people.css';
import FadeInOnView from '../../components/fadeineffect/FadeInOnView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faEnvelopeOpenText, faFileLines } from '@fortawesome/free-solid-svg-icons';

/* Current Members (박사과정, 석사과정, 연구인턴) */
const researchStaff = [
  {
    name: '손원준',
    role: '연구원',
    email: 'swj8905@korea.ac.kr',
    position: 'Ph.D. Student',
    researchAreas: '제로맵 측위 엔진, 자기장 측위 엔진, Visual SLAM',
    image: '/images/WonJoonSon.jpg',
  },
  {
    name: '윤덕원',
    role: '연구원',
    email: 'ydw1007@korea.ac.kr',
    position: 'Ph.D. Student',
    researchAreas: '제로맵 측위 엔진, Visual SLAM',
    image: '/images/YoonDeokWon.jpeg',
  },
  {
    name: '이도훈',
    role: '연구원',
    email: 'luke0911@korea.ac.kr',
    position: 'M.S. / Ph.D. Student',
    researchAreas: '보행자 추측항법 엔진 (PDR)',
    image: '/images/LeeDoHun.jpg',
  },
  {
    name: '박가은',
    role: '연구원',
    email: 'maybday@korea.ac.kr',
    position: 'M.S. Student',
    researchAreas: '3D 실내 내비게이션 및 3D 디지털 트윈 구축 자동화',
    image: '/images/ParkGaEun.jpg',
  },
  {
    name: '윤동근',
    role: '연구원',
    email: 'hmhmind314@korea.ac.kr',
    position: 'M.S. Student',
    researchAreas: '보행자 추측항법 엔진 (PDR), Wi-Fi 기반 측위 엔진',
    image: '/images/YoonDongGeun.png',
  },
  {
    name: '김명권',
    role: '연구원',
    email: 'kmk00831@gmail.com',
    position: 'Research Intern',
    researchAreas: '3D 디지털 트윈 관제 서비스',
    image: '/images/KimMyungKwon.jpg',
  },
  {
    name: '이해원',
    role: '연구원',
    email: 'heewon9715@gmail.com',
    position: 'Research Intern',
    researchAreas: '3D 디지털 트윈 구축 자동화',
    image: '/images/LeeHaeWon.jpg',
  },
  {
    name: '주시원',
    role: '연구원',
    email: 'joosiwon19@naver.com',
    position: 'Research Intern',
    researchAreas: 'iOS 기반 실내측위 엔진',
    image: '/images/JooSiWon.png',
  },
  {
    name: '김준하',
    role: '연구원',
    email: 'jhjhkk1007@naver.com',
    position: 'Research Intern',
    researchAreas: '실내 위치 기반 서비스',
    image: '/images/KimJunHa.jpg',
  },
];

/* Alumni (졸업생들) */
const employees = [
  {
    name: '최 민 혁 (Min hyeok Choi)',
    course: 'M.S. 2023',
    email: 'chlrhalsgur@korea.ac.kr',
    affiliation: ''
  },
  {
    name: '윤 덕 원 (Deok Won Yoon)',
    course: 'M.S. 2023',
    email: 'ydw1007@korea.ac.kr',
    affiliation: ''
  },
  {
    name: '성 진 원 (Jin Won Seong)',
    course: 'M.S. 2023',
    email: 'jin1seong@korea.ac.kr',
    affiliation: '롯데 이노베이트'
  },
  {
    name: '임 바 다 (Ba Da Lim)',
    course: 'M.S. 2023',
    email: 'zzzxxx3166@korea.ac.kr',
    affiliation: ''
  },
  {
    name: '유 수 민 (Su Min Yu)',
    course: 'M.S. 2022',
    email: 'sue4869@korea.ac.kr',
    affiliation: ''
  },
  {
    name: '황 승 규 (Seung Kyu Hwang)',
    course: 'M.S. 2022',
    email: 'tvfxqmax200@gmail.com',
    affiliation: '삼성전자'
  },
  {
    name: '배 한 준 (Han Jun Bae)',
    course: 'Ph.D. 2022',
    email: 'qwerty2901@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '구 경 현 (Kyung Hyun Koo)',
    course: 'M.S. 2018',
    email: 'poyo062@korea.ac.kr',
    affiliation: ''
  },
  {
    name: '김 도 윤 (Do Yun Kim)',
    course: 'M.S. 2018',
    email: 'doyun880@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '김 정 원 (Jung Won Kim)',
    course: 'M.S. 2018',
    email: 'bse635@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '장 호 준 (Ho Jun Jang)',
    course: 'M.S. 2017',
    email: 'nametom@korea.ac.kr',
    affiliation: ''
  },
  {
    name: '안 재 형 (Jae Hyung An)',
    course: 'M.S. 2016',
    email: 'vovojh@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '김 민 지 (Min Ji Kim)',
    course: 'M.S. 2015',
    email: '777vvv@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '차 두 진 (Du Jin Cha)',
    course: 'M.S. 2015',
    email: 'twinsjjh@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '신 동 욱 (Dong Wook Shin)',
    course: 'M.S. 2014',
    email: 'shindw@korea.ac.kr',
    affiliation: '삼성 테크윈'
  },
  {
    name: '윤 창 현 (Chan Hyun Yun)',
    course: 'M.S. 2014',
    email: 'yunch@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '이 상 훈 (Sang Hoon Lee)',
    course: 'Ph.D 2013',
    email: 'smile97@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '홍 순 원 (Soon Won Hong)',
    course: 'M.S. 2012',
    email: 'aldig@korea.ac.kr',
    affiliation: 'LG 전자'
  },
  {
    name: '홍 기 섭 (Ki Sup Hong)',
    course: 'M.S. 2011',
    email: 'mastaks@korea.ac.kr',
    affiliation: 'LG 전자'
  },
  {
    name: '윤 원 기 (Won ki Yoon)',
    course: 'M.S. 2010',
    email: 'yoonpro@korea.ac.kr',
    affiliation: '솔루션박스'
  },
  {
    name: '장 재 혁 (Jae hyeok Chang)',
    course: 'M.S. 2008',
    email: 'twinsjjh@korea.ac.kr',
    affiliation: '삼성전자'
  },
  {
    name: '이 현 준 (Hyun jun Lee)',
    course: 'M.S. 2008',
    email: 'kelly1104@korea.ac.kr',
    affiliation: '삼성전기'
  },
  {
    name: '정 재 균 (Jae Kyun Jung)',
    course: 'M.S. 2008',
    email: 'kernel@korea.ac.kr',
    affiliation: 'LG전자'
  },
  {
    name: '신 상 훈 (Sang hoon Shin)',
    course: 'M.S. 2004',
    email: 'kaisshin@korea.ac.kr',
    affiliation: '박사진학(고려대)'
  },
  {
    name: '김 일 관 (Il kwan Kim)',
    course: 'M.S. 2004',
    email: 'bitinno@korea.ac.kr',
    affiliation: 'LG전자'
  },
  {
    name: '허 재 성 (Jae sung Heo)',
    course: 'M.S. 2003',
    email: 'jsheo@korea.ac.kr',
    affiliation: '삼성전자(DS총괄)'
  }
];

function People() {
  const [activeTab, setActiveTab] = useState('research');

  const getHeroTitle = () => {
    switch (activeTab) {
      case 'ceo':
        return 'Professor';
      case 'research':
        return 'Current Members';
      case 'employee':
        return 'Alumni';
      default:
        return 'Current Members';
    }
  };

  const renderMembers = (members, isEmployee = false) => (
    <div className="people-list">
      {members.map((member, idx) => (
        <FadeInOnView key={`${activeTab}-${idx}`}>
          <div className="people-card">
            <img src={member.image} alt={member.name} className="people-image" />
            <div className="people-info">
              <p className="role">{member.role}</p>
              <h3>{member.name}</h3>
              <p className="contact">
                <FontAwesomeIcon icon={faGraduationCap} fixedWidth style={{ marginRight: '2px' }} />
                <span className="label">Position: </span>{member.position}
              </p>
              <p className="contact">
                <FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth style={{ marginRight: '3px' }} />
                <span className="label">Email: </span>{member.email}
              </p>
              <p className="contact">
                <FontAwesomeIcon icon={faFileLines} fixedWidth style={{ marginRight: '2px' }} />
                <span className="label">
                  {isEmployee ? 'Previous Area of Expertise: ' : 'Research Areas: '}
                </span>
                {isEmployee ? member.areaOfExpertise : member.researchAreas}
              </p>
            </div>
          </div>
        </FadeInOnView>
      ))}
    </div>
  );

  const renderAlumni = (alumni) => (
    <div className="alumni-list">
      {alumni.map((person, idx) => (
        <FadeInOnView key={`alumni-${idx}`}>
          <div className="alumni-card">
            <div className="alumni-info">
              <h3 className="alumni-name">{person.name}</h3>
              <div className="alumni-details">
                <p className="alumni-course">
                  <FontAwesomeIcon icon={faGraduationCap} fixedWidth style={{ marginRight: '8px' }} />
                  <span className="label">Course: </span>{person.course}
                </p>
                <p className="alumni-email">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth style={{ marginRight: '8px' }} />
                  <span className="label">Contact: </span>{person.email}
                </p>
                {person.affiliation && (
                  <p className="alumni-affiliation">
                    <FontAwesomeIcon icon={faFileLines} fixedWidth style={{ marginRight: '8px' }} />
                    <span className="label">Affiliation: </span>{person.affiliation}
                  </p>
                )}
              </div>
            </div>
          </div>
        </FadeInOnView>
      ))}
    </div>
  );

  const renderCEOProfile = () => (
    <div className="ceo-content">
      <FadeInOnView>
        <div className="ceo-profile-section">
          <div className="ceo-people-card">
            <div className="ceo-left-part">
              <img 
                src="/images/ceo.jpg" 
                alt="교수" 
                className="ceo-people-image"
              />
              <div className="ceo-name-info">
                <p className="ceo-people-role">교수</p>
                <h3 className="ceo-people-name">최 린</h3>
              </div>
            </div>
            
            <div className="ceo-people-info">
              <div className="ceo-education">
                <h4 className="ceo-education-title">학력</h4>
                <div className="ceo-education-content">
                  <p>• University of Illinois Urbana-Champaign PhD (Computer Science)</p>
                  <p>• Seoul National University, Computer Engineering, M.S.</p>
                  <p>• Seoul National University, Computer Engineering, B.S.</p>
                </div>
              </div>
              
              <div className="ceo-contact-section">
                <h4 className="ceo-contact-title">연락처</h4>
                <div className="ceo-contact-content">
                  <p>• Tel: 02-2088-2771</p>
                  <p>• Email: lchoi@korea.ac.kr</p>
                  <p>• KU: https://it.korea.ac.kr/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnView>

      <FadeInOnView>
        <div className="ceo-timeline-section">
          <h2 className="ceo-timeline-title">경력</h2>
          <p className="ceo-timeline-subtitle">
            30년 이상의 연구 개발 경험을 통해 축적된 전문성과 글로벌 네트워크
          </p>
          
          <div className="ceo-timeline-grid">
            {[
              { period: 'FEB.2024 - PRESENT', institution: 'Fifth Dimension', position: 'Lynn Choi, Professor', highlight: true },
              { period: 'SEP.2000 - PRESENT', institution: 'Korea University', position: 'School of Electrical Engineering, Professor', highlight: true },
              { period: '1998 ~ 2000', institution: 'University of California at Irvine', position: '컴퓨터공학 조교수' },
              { period: '1996 ~ 1998', institution: 'Intel Corporation', position: 'Itanium 64비트 CPU 설계팀 선임 연구원' },
              { period: 'MAR.1996', institution: 'University of Illinois Urbana - Champaign', position: 'Computer Science, PhD' },
              { period: '1988 ~ 1990', institution: '한국통신', position: '연구개발단 전임 연구원' },
              { period: '1988', institution: 'Seoul National University', position: 'Computer Engineering, M.S.' },
              { period: 'FEB.1986', institution: 'Seoul National University', position: 'Computer Engineering, B.S.' }
            ].map((item, index) => (
              <FadeInOnView key={index}>
                <div className={`ceo-timeline-item ${item.highlight ? 'highlight' : ''}`}>
                  <div className="ceo-timeline-content">
                    <div className="ceo-timeline-period">
                      {item.period}
                    </div>
                    <div className="ceo-timeline-details">
                      <h3 className="ceo-timeline-institution">
                        {item.institution}
                      </h3>
                      <p className="ceo-timeline-position">
                        {item.position}
                      </p>
                    </div>
                    {item.highlight && (
                      <div className="ceo-timeline-star">
                        ⭐
                      </div>
                    )}
                  </div>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </FadeInOnView>
    </div>
  );

  return (
    <div className="scroll-section section-people">
      <div className="section-hero">
        <div className="hero-overlay">
          <h1 className="hero-text">
            {getHeroTitle()}
          </h1>
        </div>
        <div className="hero-button-container">
          <button
            className={`hero-button ${activeTab === 'ceo' ? 'active' : ''}`}
            onClick={() => setActiveTab('ceo')}
          >
            <span>Professor</span>
          </button>
          <button
            className={`hero-button ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            <span>Current Members</span>
          </button>
          <button
            className={`hero-button ${activeTab === 'employee' ? 'active' : ''}`}
            onClick={() => setActiveTab('employee')}
          >
            <span>Alumni</span>
          </button>
        </div>
      </div>

      <div className="people-content">
        {activeTab === 'ceo' && renderCEOProfile()}
        {activeTab === 'research' && renderMembers(researchStaff, false)}
        {activeTab === 'employee' && renderAlumni(employees)}
      </div>

      {/* Back to Top */}
      <a href="#" className="people-back-to-top">
        ↑
      </a>
      
      {/* People Footer - Full Width */}
      <footer className="people-footer">
        <div className="people-footer-content">
          <hr className="people-footer-divider" />
          <h3 className="people-footer-title">Indoor Positioning Laboratory</h3>
          <p className="people-footer-text">
            Industry-Academy Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
            <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
            <br />Tel : +82-2-3290-3896
          </p>
        </div>
      </footer>
    </div>
  );
}

export default People;