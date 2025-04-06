import { Route, Routes } from 'react-router';
import { Dashboard } from './components/Dashboard';

export const Projects = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
};
