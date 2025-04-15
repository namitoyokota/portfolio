import { Route, Routes } from 'react-router';
import { PostContent } from './components/PostContent';
import { Posts } from './components/Posts';

export const PostsModule = () => {
  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path=":slug" element={<PostContent />} />
    </Routes>
  );
};
