import React from 'react';
import './projectDetail1.css';

const ProjectDetail1 = () => {
  return (
    <div className="project-detail-1-page">
      {/* Title Section */}
      <section className="project-detail-1-title-section">
        <div className="project-detail-1-container">
          <h1 className="project-detail-1-title">
            디지털기반 건축시공 및 안전감리 기술개발
          </h1>
          <p className="project-detail-1-period">2022.04.01~2026.12.31</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-detail-1-content">
        {/* Task System Section */}
        <section className="project-detail-1-task-system-section">
          <div className="project-detail-1-container">
            <div className="project-detail-1-section-header">
              <h2 className="project-detail-1-section-title">과제 체계</h2>
            </div>
            
            <div className="project-detail-1-images-container">
              <img 
                src="/images/pj04_1.png" 
                alt="과제 체계 이미지 1" 
                className="project-detail-1-section-image"
              />
              <img 
                src="/images/pj04_2.png" 
                alt="과제 체계 이미지 2" 
                className="project-detail-1-section-image"
              />
            </div>
          </div>
        </section>

        {/* Technology Overview Section */}
        <section className="project-detail-1-tech-overview-section">
          <div className="project-detail-1-container">
            <div className="project-detail-1-section-header">
              <h2 className="project-detail-1-section-title">기술 개요</h2>
            </div>
            
            <div className="project-detail-1-images-container">
              <img 
                src="/images/pj04_3.png" 
                alt="기술 개요 이미지 1" 
                className="project-detail-1-section-image"
              />
              <img 
                src="/images/pj04_4.png" 
                alt="기술 개요 이미지 2" 
                className="project-detail-1-section-image"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="project-detail-1-footer">
        <div className="project-detail-1-container">
          <hr className="project-detail-1-footer-divider" />
          <h3 className="project-detail-1-footer-title">Indoor Positioning Laboratory</h3>
          <p className="project-detail-1-footer-text">
            Industry-Academy Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
            <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
            <br />Tel : +82-2-3290-3896
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail1;