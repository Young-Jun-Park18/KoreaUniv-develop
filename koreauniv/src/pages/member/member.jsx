import React, { useState } from 'react';
import './member.css';
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
    email: 'heewon9715@korea.ac.kr',
    position: 'Research Intern',
    researchAreas: '3D 디지털 트윈 구축 자동화',
    image: '/images/LeeHaeWon.jpg',
  },
  {
    name: '주시원',
    role: '연구원',
    email: 'swj8905@korea.ac.kr',
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

/* Alumni (일반 직원) */
const employees = [
  {
    name: '김형석',
    role: '3D 그래픽 디자이너',
    email: 'wellrice@nate.com',
    position: 'Alumnus',
    areaOfExpertise: '3D Graphic Design, Unity 엔진',
    image: '/images/KimHyungSeok.jpg',
  },
  {
    name: '최사라',
    role: 'UI/UX 디자이너',
    email: 'csl7776@naver.com',
    position: 'Alumnus',
    areaOfExpertise: '3D Graphic Design, UI/UX Design',
    image: '/images/ChoiSaRa.jpg',
  },
  {
    name: '박영준',
    role: '프론트엔드 개발자',
    email: 'dudwns4619@naver.com',
    position: 'Alumnus',
    areaOfExpertise: 'Web/App Front-end 개발',
    image: '/images/ParkYoungJun.jpg',
  },
];

function Member() {
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
    <div className="member-list">
      {members.map((member, idx) => (
        <FadeInOnView key={`${activeTab}-${idx}`}>
          <div className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-info">
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

  const renderCEOProfile = () => (
    <div className="ceo-content">
      <FadeInOnView>
        <div className="ceo-profile-section">
          <div className="ceo-member-card">
            <div className="ceo-left-part">
              <img 
                src="/images/ceo.jpg" 
                alt="교수" 
                className="ceo-member-image"
              />
              <div className="ceo-name-info">
                <p className="ceo-member-role">교수</p>
                <h3 className="ceo-member-name">최 린</h3>
              </div>
            </div>
            
            <div className="ceo-member-info">
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
                  <p>• <strong>Tel</strong>: 02-2088-2771</p>
                  <p>• <strong>Email</strong>: lchoi@korea.ac.kr</p>
                  <p>• <strong>KU</strong>: https://it.korea.ac.kr/</p>
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
    <div className="scroll-section section-member">
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

      <div className="member-content">
        {activeTab === 'ceo' && renderCEOProfile()}
        {activeTab === 'research' && renderMembers(researchStaff, false)}
        {activeTab === 'employee' && renderMembers(employees, true)}
      </div>
    </div>
  );
}

export default Member;