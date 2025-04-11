import { Route, Routes } from 'react-router';
import { Work } from './components/Work';

export const WorkModule = () => {
  return (
    <Routes>
      <Route index element={<Work />} />
    </Routes>
  );
};
