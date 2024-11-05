// src/hooks/useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [pathname]); // Run the effect every time the pathname changes
};

export default useScrollToTop;
