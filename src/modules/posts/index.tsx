import { NotFound } from '@/components/NotFound';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Posts } from './components/Posts';

export const PostsModule = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Namito Yokota | Posts';
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
