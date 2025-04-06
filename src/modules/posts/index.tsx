import { Route, Routes } from 'react-router';
import { Dashboard } from './components/Dashboard';

export const Posts = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
};
