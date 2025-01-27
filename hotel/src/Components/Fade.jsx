import React, { useEffect, useRef, useState } from 'react'
const Fade = ({ children, delay = 0 , extraCss="h-full w-full"}) => {
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
            className={`transition-all duration-1000 ease-out ${extraCss}
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            {children}
          </div>
        );
}

export default Fade