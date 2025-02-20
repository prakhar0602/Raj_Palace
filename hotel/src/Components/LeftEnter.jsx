import React, { useEffect, useRef, useState } from 'react'

const LeftEnter = ({ children, delay = 0, extraCss = "h-full w-full" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, delay);
          observer.unobserve(domRef.current);
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-500 ease-out ${extraCss}
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
    >
      {children}
    </div>
  );
}

export default LeftEnter;