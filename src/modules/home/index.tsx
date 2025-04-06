import { Route, Routes } from 'react-router';
import { Dashboard } from './components/Dashboard';

export const Home = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
};
