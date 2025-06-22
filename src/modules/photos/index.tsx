import { NotFound } from '@/components/NotFound';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Photos } from './components/Photos';

export const PhotosModule = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Namito Yokota | Photos';
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<Photos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
