import { Home } from '@/modules/home';
import { Posts } from '@/modules/posts';
import { Projects } from '@/modules/projects';
import { Work } from '@/modules/work';
import { Link, Route, Routes } from 'react-router';

export const MainLayout = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <nav className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/work" className="hover:underline">
              Work
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/posts" className="hover:underline">
              Posts
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/work/*" element={<Work />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/posts/*" element={<Posts />} />
      </Routes>
    </div>
  );
};
