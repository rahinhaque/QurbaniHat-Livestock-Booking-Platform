'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * AnimateOnScroll — wraps children and adds animate.css classes
 * when the element scrolls into the viewport.
 *
 * Props:
 *  animation  – animate.css animation name  (default: "fadeInUp")
 *  delay      – CSS delay string            (default: "0s")
 *  duration   – CSS duration string         (default: "0.7s")
 *  threshold  – IntersectionObserver value  (default: 0.15)
 *  className  – extra classes on the wrapper
 *  tag        – HTML tag for the wrapper    (default: "div")
 */
const AnimateOnScroll = ({
  children,
  animation = 'fadeInUp',
  delay = '0s',
  duration = '0.7s',
  threshold = 0.15,
  className = '',
  tag: Tag = 'div',
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // animate only once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`${className} ${
        visible
          ? `animate__animated animate__${animation}`
          : 'opacity-0'
      }`}
      style={{
        animationDelay: delay,
        animationDuration: duration,
      }}
    >
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
