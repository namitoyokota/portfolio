import { HomeModule } from '@/modules/home';
import { PostsModule } from '@/modules/posts';
import { ProjectsModule } from '@/modules/projects';
import { WorkModule } from '@/modules/work';
import { faBook, faBriefcase, faFolder, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Routes } from 'react-router';

export const MainLayout = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-8 text-gray-700">
      <nav className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 decoration-2 hover:underline">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link to="/work" className="flex items-center gap-2 decoration-2 hover:underline">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Work</span>
          </Link>
          <Link to="/projects" className="flex items-center gap-2 decoration-2 hover:underline">
            <FontAwesomeIcon icon={faFolder} />
            <span>Projects</span>
          </Link>
          <Link to="/posts" className="flex items-center gap-2 decoration-2 hover:underline">
            <FontAwesomeIcon icon={faBook} />
            <span>Posts</span>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col gap-6 py-8">
        <Routes>
          <Route path="*" element={<HomeModule />} />
          <Route path="/work/*" element={<WorkModule />} />
          <Route path="/projects/*" element={<ProjectsModule />} />
          <Route path="/posts/*" element={<PostsModule />} />
        </Routes>
      </div>

      <p>
        For any inquiries,{' '}
        <a href="mailto:namitoyokota@icloud.com" className="underline decoration-2">
          send me an email!
        </a>
      </p>
    </div>
  );
};
