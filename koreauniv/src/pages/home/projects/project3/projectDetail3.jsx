import React from 'react';
import './projectDetail3.css';

const ProjectDetail3 = () => {
  return (
    <div className="project-detail-3-page">
      {/* Title Section */}
      <section className="project-detail-3-title-section">
        <div className="project-detail-3-container">
          <h1 className="project-detail-3-title">
            교통약자를 위한 도시철도 역사내 맞춤형 스마트 내비게이션 개발
          </h1>
          <p className="project-detail-3-period">2022.11 ~ 2024.02</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-detail-3-content">
        {/* Project Image Section */}
        <section className="project-detail-3-image-section">
          <div className="project-detail-3-container">
            <img 
              src="/images/pj_03.png" 
              alt="도시철도 역사내 맞춤형 스마트 내비게이션" 
              className="project-detail-3-main-image"
            />
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="project-detail-3-overview-section">
          <div className="project-detail-3-container">
            <div className="project-detail-3-section-header">
              <h2 className="project-detail-3-section-title">연구개발 개요</h2>
            </div>
            
            <div className="project-detail-3-overview-content">
              <p className="project-detail-3-overview-intro">
                교통 약자를 위한 역사 내 맞춤형 내비게이션 개발을 위해 다음의 2단계로 나누어 연구 개발을 진행한다.
              </p>
              
              <div className="project-detail-3-research-phases">
                {/* Phase 1 */}
                <div className="project-detail-3-phase-card">
                  <div className="project-detail-3-phase-header">
                    <h3 className="project-detail-3-phase-title">1단계</h3>
                    <h4 className="project-detail-3-phase-subtitle">지구 자기장 기반 실내 측위 테스트베드 구축 및 기본적인 내비게이션 앱 개발</h4>
                  </div>
                  <div className="project-detail-3-phase-content">
                    <p>
                      지하철 역사 테스트베드(한국철도공사 운영 역사) 내에서 연구팀의 딥러닝 기반 지자기 실내 측위 기술을 적용하여 
                      사용자의 위치 추적, 이동 경로 분석 및 다양한 보행 상태 등을 추정할 수 있는 실내 측위 시스템을 구축한다.
                    </p>
                    <p>
                      측위 시스템 구축을 위해 테스트베드 내 자기장 데이터를 수집하고, 수집한 자기장 맵을 딥러닝으로 학습한다. 
                      딥러닝 모듈 외에도 측위를 위한 instant localization 엔진, PDR 엔진 등을 현장에 맞게 최적화한다.
                    </p>
                    <p>
                      1단계에서는 기본적으로 테스트베드의 단층 환경에서 1미터 내외의 측위 성능을 제공하는 것을 목표로 하며 
                      다양한 보행 속도와 스마트폰 파지 자세에 모두 대응할 수 있도록 실시간 현장 테스트를 진행하고 성능을 검증한다.
                    </p>
                    <p>
                      휠체어 리프트, 엘리베이터, 에스컬레이터, 점자 블록, 장애인 화장실 등과 같은 교통 약자 편의 시설의 위치 정보를 
                      DB에 저장하고, 기본적인 목적지 탐색 및 경로 안내 기능을 탑재한 내비게이션을 개발한다.
                    </p>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="project-detail-3-phase-card">
                  <div className="project-detail-3-phase-header">
                    <h3 className="project-detail-3-phase-title">2단계</h3>
                    <h4 className="project-detail-3-phase-subtitle">시스템 통합 및 장애인 유형 별 안전한 길 안내 서비스 개발</h4>
                  </div>
                  <div className="project-detail-3-phase-content">
                    <p>
                      2단계에서는 1단계에서 개발된 측위 엔진(딥러닝, instant localization, PDR)들을 통합하고 
                      계단, 엘리베이터, 에스컬레이터를 포함한 복층 공간에서 실시간으로 층간 이동을 인식할 수 있도록 
                      층간 이동 인식 모듈을 추가하여 복층을 포함한 역사 전체에서 1미터 내외의 측위 성능을 제공하는 측위 시스템을 구축한다.
                    </p>
                    <p>
                      전동 휠체어 사용 지체장애인의 경우 전동 휠체어 전용 추측항법 엔진을 적용하여 
                      이동 속도와 이동 방향을 정확하게 추정할 수 있도록 한다.
                    </p>
                    <p>
                      내비게이션 앱에서는 장애인 유형을 시각 장애인, 휠체어 사용 장애인 등과 같이 세부적으로 나누어 
                      사용자 유형 별 내비게이션 화면 및 메뉴 구성을 다르게 디자인하고, 경로 안내 시 휠체어 사용자에게는 
                      엘리베이터나 휠체어 리프트가 있는 곳을 우선으로, 시각 장애인에게는 점자 블록이나 음성 유도기가 있는 곳을 
                      우선으로 안내하는 등 안전하고 편리한 경로 안내를 제공할 수 있도록 개발한다.
                    </p>
                    <p>
                      열차 승강장 진입 알림 기능과 시각 장애인을 위한 위험 구역 접근 알림 기능 등을 개발하여 
                      목적지 안내뿐만 아니라 위치 기반 다양한 부가 서비스를 통해 교통 약자들의 앱 사용 만족도를 높인다.
                    </p>
                    <p>
                      최종적으로 장애인 유형 별 다양한 시나리오를 가정하여 테스트를 진행하고, 장애인 협회의 협조를 통해 
                      시각 장애인, 휠체어 사용 장애인의 현장 체험 및 최종 검증을 진행하고, 
                      교통 약자를 위한 맞춤형 스마트 내비게이션 앱의 만족도 조사를 진행한다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="project-detail-3-footer">
        <div className="project-detail-3-container">
          <hr className="project-detail-3-footer-divider" />
          <h3 className="project-detail-3-footer-title">Indoor Positioning Laboratory</h3>
          <p className="project-detail-3-footer-text">
            Industry-Academy Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
            <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
            <br />Tel : +82-2-3290-3896
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail3;