import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (to: string, type: 'scroll' | 'route') => {
      if (type === 'scroll') {
        if (location.pathname !== '/') {
          navigate('/');
        }
        setTimeout(() => {
          const element = document.getElementById(to);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        navigate(to);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [navigate, location.pathname]
  );

  return scrollToSection;
};