import React, { useState, useEffect } from 'react';
import './courses.css';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // 브라우저 뒤로가기 처리
  useEffect(() => {
    const handlePopState = () => {
      if (selectedCourse) {
        setSelectedCourse(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [selectedCourse]);

  // 학부 과목 데이터
  const undergraduateCourses = [
    {
      id: 'KECE207',
      code: 'KECE207(01)',
      title: 'Digital System Design',
      description: '디지털 시스템 설계의 기본 원리와 방법론을 학습합니다.',
      professor: '최린',
      materials: [
        // KECE207 실제 파일들 (원본 HTML 기준)
        '1.Digital_Systems_and_Binary_Numbers.ppt',
        '2.Boolean_Algebra_and_Logic_Gates.ppt',
        '3.Gate-Level_Minimization.ppt',
        '4.Combinational_Logic.ppt',
        '5.Synchronous_Sequential_Logic.ppt',
        '7.Memory_and_Programmable_Logic.ppt'
      ]
    },
    {
      id: 'KECE208',
      code: 'KECE208(03)',
      title: 'Data Structure and Algorithm',
      description: '데이터의 기본 구조, data abstraction 개념 및 알고리즘 등을 학습합니다.',
      professor: '최린',
      materials: [
        // KECE208 자료들 (필요에 따라 실제 파일명으로 수정)
        'Chapter_1.pdf'
      ]
    },
    {
      id: 'KECE343',
      code: 'KECE343(00)',
      title: 'Computer Architecture',
      description: '컴퓨터 구조의 기본 개념과 설계 원리를 학습합니다.',
      professor: '최린',
      materials: [
        // KECE343 실제 파일들 (원본 HTML 기준)
        '1-Introduction.ppt',
        '1-Introduction_추가.ppt',
        '2-ISA.ppt',
        '3-Linking.ppt',
        '4-Computer_Arithmetic.ppt',
        '5-Pipeline.ppt',
        '6-Memory_Hierarchy.ppt',
        '7-Exception and Interrupt.ppt',
        '8-IO.ppt'
      ]
    },
    {
      id: 'KECE340',
      code: 'KECE340(00)',
      title: 'Operating System',
      description: '운영체제의 구조와 동작 원리를 학습합니다.',
      professor: '최린',
      materials: [
        // KECE340 실제 파일들 (원본 HTML 기준)
        '1.OS_Overview.ppt',
        '10_IO_Disk_Scheduling.ppt',
        '11_File_Management.ppt',
        '12_Virtual_Machine.ppt',
        '2.Process.ppt',
        '3.Threads.ppt',
        '4.Mutual_Exclusion_and_Synchronization.ppt',
        '5_Deadlock_and_Starvation.ppt',
        '7_Virtual_Memory.ppt',
        '8_Uniprocessor_Scheduling.ppt',
        '9_MP_RT_Scheduling.ppt'
      ]
    }
  ];

  // 대학원 과목 데이터
  const graduateCourses = [
    {
      id: 'ECE519',
      code: 'ECE519(00)',
      title: 'Microprocessor Microarchitecture',
      description: '마이크로프로세서의 마이크로아키텍처 설계 및 최적화 기법을 학습합니다.',
      professor: '최린',
      materials: [
        // ECE519 실제 파일들 (원본 HTML 기준)
        'Microarchitecture_-_1._Branch_Prediction.ppt',
        'Microarchitecture_-_2._Instruction_Fetch.ppt',
        'Microarchitecture_-_3._Dynamic_Pipeline.ppt',
        'Microarchitecture_-_4._Interrupt_and_Precise_Exception.ppt',
        'Microarchitecture_-_5._Memory_Hierarchy_Optimization.ppt',
        'Microarchitecture_-_6._Limits_of_ILP.ppt',
        'Microarchitecture_-_7._Thread_Level_Parallelism.ppt',
        'Microarchitecture_0_Introduction.ppt'
      ]
    },
    {
      id: 'ECE656',
      code: 'ECE656(00)',
      title: 'Ubiquitous Networks',
      description: '유비쿼터스 환경에서의 네트워크 기술과 응용을 연구합니다.',
      professor: '최린',
      materials: [
        // ECE656 실제 파일들 (원본 HTML 기준)
        '1.OS_Overview.ppt'
      ]
    }
  ];

  const getCurrentCourses = () => {
    return activeTab === 'undergraduate' ? undergraduateCourses : graduateCourses;
  };

  const getTabTitle = () => {
    return activeTab === 'undergraduate' ? 'Undergraduate Courses' : 'Graduate Courses';
  };

  // Hero 섹션의 텍스트를 탭에 따라 동적으로 반환하는 함수
  const getHeroContent = () => {
    if (activeTab === 'undergraduate') {
      return {
        title: 'Undergraduate Courses',
        subtitle: '학부 교과목',
        description: '컴퓨터 과학의 기초부터 응용까지 체계적으로 학습할 수 있는 학부 교과목들입니다.'
      };
    } else {
      return {
        title: 'Graduate Courses',
        subtitle: '대학원 교과목',
        description: '최신 연구 동향과 고급 주제를 다루는 대학원 교과목들입니다.'
      };
    }
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    // 히스토리에 상태 추가 (뒤로가기 가능하게)
    window.history.pushState({ courseSelected: true }, '', window.location.href);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    // 히스토리 뒤로 이동
    window.history.back();
  };

  const handleDownload = (filename, courseId) => {
    // 정적 파일 경로로 다운로드
    const downloadUrl = `/course_materials/${courseId}/${filename}`;
    
    // 새 창에서 파일 열기
    window.open(downloadUrl, '_blank');
    
    console.log(`Opening: ${downloadUrl}`);
  };

  const heroContent = getHeroContent();

  return (
    <div className="page-wrapper">
      <div className="courses-page">
        {/* Hero Section with Background Image and Tabs */}
        <section className="courses-hero-section">
          <div className="courses-hero-overlay">
            <h1 className="courses-hero-text">Courses</h1>
          </div>
          <div className="courses-hero-button-container">
            <button
              className={`courses-hero-button ${activeTab === 'undergraduate' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('undergraduate');
                setSelectedCourse(null); // 탭 변경시 상세 페이지에서 나가기
              }}
            >
              <span>Undergraduate Courses</span>
            </button>
            <button
              className={`courses-hero-button ${activeTab === 'graduate' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('graduate');
                setSelectedCourse(null); // 탭 변경시 상세 페이지에서 나가기
              }}
            >
              <span>Graduate Courses</span>
            </button>
          </div>
        </section>

        {/* Courses Content */}
        <div className="courses-content">
          {!selectedCourse ? (
            <>
              <section className="courses-intro-section">
                <div className="courses-intro-content">
                  <h2 className="courses-intro-title">{getTabTitle()}</h2>
                  <h3 className="courses-intro-subtitle">
                    {activeTab === 'undergraduate' ? '학부 교과목' : '대학원 교과목'}
                  </h3>
                  <p className="courses-intro-description">
                    {activeTab === 'undergraduate' 
                      ? '컴퓨터 과학의 기초부터 응용까지 체계적으로 학습할 수 있는 학부 교과목들입니다.'
                      : '최신 연구 동향과 고급 주제를 다루는 대학원 교과목들입니다.'
                    }
                  </p>
                </div>
              </section>

              {/* Courses Grid */}
              <section className="courses-grid-section">
                <div className="courses-grid-container">
                  {getCurrentCourses().map((course) => (
                    <div key={course.id} className="course-card" onClick={() => handleCourseSelect(course)}>
                      <div className="course-card-header">
                        <div className="course-code">{course.code}</div>
                      </div>
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-description">{course.description}</p>
                      <div className="course-card-footer">
                        <div className="course-professor">담당교수: {course.professor}</div>
                        <div className="course-materials-count">자료 {course.materials.length}개</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            /* Course Detail Page */
            <section className="course-detail-section">
              <div className="course-detail-container">
                <button 
                  type="button"
                  className="back-button" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleBackToCourses();
                  }}
                >
                  ← 과목 목록으로 돌아가기
                </button>
                
                <div className="course-detail-header">
                  <h1 className="course-detail-title">
                    [ {selectedCourse.code} ] {selectedCourse.title}
                  </h1>
                  <hr className="course-detail-divider" />
                </div>

                <div className="course-detail-content">
                  <div className="course-section">
                    <h5 className="course-section-title">공지사항</h5>
                    <div className="course-section-card">
                      <div className="course-section-body">
                        <p>현재 공지사항이 없습니다.</p>
                      </div>
                    </div>
                  </div>

                  <div className="course-section">
                    <h5 className="course-section-title">수업자료</h5>
                    <div className="course-section-card">
                      <div className="course-section-body">
                        {selectedCourse.materials.map((filename, index) => (
                          <p key={index}>
                            <button 
                              className="download-link" 
                              onClick={() => handleDownload(filename, selectedCourse.id)}
                            >
                              {filename}
                            </button>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Courses Footer - Full Width */}
      <footer className="courses-footer">
        <div className="courses-footer-content">
          <hr className="courses-footer-divider" />
          <h3 className="courses-footer-title">Indoor Positioning Laboratory</h3>
          <p className="courses-footer-text">
            Engineering Building 236, Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, Republic of Korea. 02841
            <br />Professor : lchoi@korea.ac.kr · swj8905@korea.ac.kr
            <br />Tel : +82-2-3290-3896
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;