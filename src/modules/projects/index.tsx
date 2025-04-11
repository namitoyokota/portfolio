import { Route, Routes } from 'react-router';
import { Projects } from './components/Projects';

export const ProjectsModule = () => {
  return (
    <Routes>
      <Route index element={<Projects />} />
    </Routes>
  );
};
