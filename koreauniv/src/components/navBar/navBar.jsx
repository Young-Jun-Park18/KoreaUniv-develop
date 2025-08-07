import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import fdIcon from "../../assets/fd_icon.avif";
import "./navBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();       // 메뉴 DOM 참조
  const buttonRef = useRef();     // 햄버거 버튼 참조

  // 메뉴 외부 클릭 시 닫힘 (버튼 제외)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // 메뉴 항목 클릭 시 닫힘
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div id="header">
      {/* PC/태블릿용 */}
      <div className="headerInner">
        {/* 좌측 그룹 */}
        <div className="leftGroup">
          <img src="/images/mark_.png" alt="Logo" className="logo-img" />
          <div className="pgName">
            <Link to="/" className="logo-link">
              <h4 className="lab-title">Indoor Positioning Laboratory</h4>
              <h6 className="lab-subtitle">Indoor Positioning Laboratory</h6>
            </Link>
          </div>
        </div>

        {/* 중앙 내비게이션 */}
        <div className="navBar">
          <ul className="navList">
            <li className="navElement"><Link to="/">Home</Link></li>
            <li className="navElement"><Link to="/research">Research</Link></li>
            <li className="navElement"><Link to="/projects">Projects</Link></li>
            <li className="navElement"><Link to="/people">People</Link></li>
            <li className="navElement"><Link to="/publications">Publications</Link></li>
            <li className="navElement"><Link to="/courses">Courses</Link></li>
          </ul>
        </div>

        {/* 우측 그룹 - Fifth Dimension */}
        <div className="rightGroup">
          <a href="https://fifthdimension.co.kr/" target="_blank" rel="noopener noreferrer" className="fd-link">
            <img src={fdIcon} alt="Fifth Dimension" className="fd-icon" />
            <div className="fd-name">Fifth Dimension</div>
          </a>
        </div>
      </div>

      {/* 모바일용 */}
      <div className="mobileNav">
        <Link to="/" className="mobileHome" onClick={handleLinkClick}>
          <img src="/images/mark_.png" alt="Logo" className="mobile-logo-img" />
          <div className="mobile-text">
            <span className="mobile-title">Indoor Positioning Laboratory</span>
          </div>
        </Link>
        <button
          ref={buttonRef}
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* 모바일 메뉴 영역 */}
      <div ref={menuRef} className={`mobileMenu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/research" onClick={handleLinkClick}>Research</Link>
        <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
        <Link to="/people" onClick={handleLinkClick}>People</Link>
        <Link to="/publications" onClick={handleLinkClick}>Publications</Link>
        <Link to="/courses" onClick={handleLinkClick}>Courses</Link>
        <a 
          href="https://fifthdimension.co.kr/" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={handleLinkClick}
          className="fd-mobile-link"
        >
          Fifth Dimension
        </a>
      </div>
    </div>
  );
};

export default NavBar;