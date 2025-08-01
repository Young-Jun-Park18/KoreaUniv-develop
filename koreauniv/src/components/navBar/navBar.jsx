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
        <div className="leftGroup">
          <img src={fdIcon} alt="logo" className="icon" />
          <div className="pgName">
            <Link to="/">Fifth Dimension</Link>
          </div>
        </div>
        <div className="navBar">
          <ul className="navList">
            <li className="navElement"><Link to="/services">Services</Link></li>
            <li className="navElement"><Link to="/quotation">Quote</Link></li>
            <li className="navElement"><Link to="/member">Members</Link></li>
            <li className="navElement"><Link to="/news">News</Link></li>
            <li className="navElement"><Link to="/about">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* 모바일용 */}
      <div className="mobileNav">
        <Link to="/" className="mobileHome" onClick={handleLinkClick}>
          <img src={fdIcon} alt="logo" className="icon" />
          <span className="mobileTitle">Fifth Dimension</span>
        </Link>
        <button
          ref={buttonRef} // ✅ 버튼 ref 지정
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)} // ✅ 토글
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* 모바일 메뉴 영역 */}
      <div ref={menuRef} className={`mobileMenu ${menuOpen ? "show" : ""}`}>
        <Link to="/services" onClick={handleLinkClick}>Services</Link>
        <Link to="/quotation" onClick={handleLinkClick}>Quote</Link>
        <Link to="/member" onClick={handleLinkClick}>Members</Link>
        <Link to="/news" onClick={handleLinkClick}>News</Link>
        <Link to="/about" onClick={handleLinkClick}>About Us</Link>
      </div>
    </div>
  );
};

export default NavBar;