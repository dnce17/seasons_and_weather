import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const pathname = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component's sole purpose is to scroll to top, so nothing returns
  return null;
}

export default ScrollToTop