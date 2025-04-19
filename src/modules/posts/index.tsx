import { NotFound } from '@/components/NotFound';
import { Route, Routes } from 'react-router';
import { Posts } from './components/Posts';

export const PostsModule = () => {
  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
