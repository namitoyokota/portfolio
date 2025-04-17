import { Route, Routes } from 'react-router';
import { Posts } from './components/Posts';

export const PostsModule = () => {
  return (
    <Routes>
      <Route index element={<Posts />} />
    </Routes>
  );
};
