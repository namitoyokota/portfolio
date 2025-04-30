import { NotFound } from '@/components/NotFound';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Home } from './components/Home';

export const HomeModule = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Namito Yokota';
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
