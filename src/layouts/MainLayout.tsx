import { HomeModule } from '@/modules/home';
import { PostsModule } from '@/modules/posts';
import { ProjectsModule } from '@/modules/projects';
import { WorkModule } from '@/modules/work';
import { faBook, faBriefcase, faFolder, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Routes } from 'react-router';

export const MainLayout = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <nav className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHome} />
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBriefcase} />
            <Link to="/work" className="hover:underline">
              Work
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFolder} />
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBook} />
            <Link to="/posts" className="hover:underline">
              Posts
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="*" element={<HomeModule />} />
        <Route path="/work/*" element={<WorkModule />} />
        <Route path="/projects/*" element={<ProjectsModule />} />
        <Route path="/posts/*" element={<PostsModule />} />
      </Routes>

      <p>
        If you want to get in touch, feel free to <a href="mailto:namitoyokota@icloud.com">email me</a>.
      </p>
    </div>
  );
};
