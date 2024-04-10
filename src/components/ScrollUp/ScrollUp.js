import React, { useState, useEffect } from 'react';
import { ScrollToTopButton, ArrowIcon } from './ScrollUp.styled';
import arrowSvg from '../../services/arrow.svg';

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          <ArrowIcon src={arrowSvg} alt="Scroll to top" />
        </ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollButton;
