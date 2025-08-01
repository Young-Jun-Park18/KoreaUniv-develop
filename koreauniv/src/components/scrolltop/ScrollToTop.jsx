import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 모든 스크롤 관련 스타일을 강제로 초기화
    const elements = [document.documentElement, document.body];
    const originalStyles = elements.map(el => ({
      scrollBehavior: el.style.scrollBehavior,
      overflow: el.style.overflow,
      overflowX: el.style.overflowX,
      overflowY: el.style.overflowY
    }));
    
    // 강제로 auto 설정
    elements.forEach(el => {
      el.style.scrollBehavior = 'auto';
      el.style.overflow = 'auto';
      el.style.overflowX = 'auto';
      el.style.overflowY = 'auto';
    });
    
    // 즉시 최상단으로 이동
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 한 번 더 강제 실행
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    
    // 200ms 후 원래 스타일 복구
    setTimeout(() => {
      elements.forEach((el, index) => {
        Object.assign(el.style, originalStyles[index]);
      });
    }, 200);
  }, [pathname]);

  return null;
};

export default ScrollToTop; // 스크롤 탑 에러 해결