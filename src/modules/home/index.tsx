import { Route, Routes } from 'react-router';
import { Home } from './components/Home';

export const HomeModule = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
