import { NotFound } from '@/components/NotFound';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Work } from './components/Work';

export const WorkModule = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Namito Yokota | Work';
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<Work />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
