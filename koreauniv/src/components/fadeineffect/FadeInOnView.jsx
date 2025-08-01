import React, { useEffect, useRef, useState } from 'react';
import './FadeInOnView.css';

function FadeInOnView({
  children,
  className = '',
  threshold = 0.15,
  once = false,
  effect = 'fade-in-up',
}) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // 💡 최초 mount 감지용

  useEffect(() => {
    // 🚨 렌더링 이후 animation이 바로 실행되는 걸 방지
    requestAnimationFrame(() => {
      setHasMounted(true);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once, threshold]);

  const combinedClassName =
    hasMounted && isVisible
      ? `${effect} ${className}`
      : `before-${effect} ${className}`;

  return (
    <div ref={ref} className={combinedClassName}>
      {children}
    </div>
  );
}

export default FadeInOnView;
