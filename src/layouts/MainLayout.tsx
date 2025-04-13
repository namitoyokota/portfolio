import { HomeModule } from '@/modules/home';
import { PostsModule } from '@/modules/posts';
import { WorkModule } from '@/modules/work';
import { faBook, faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Routes } from 'react-router';

export const MainLayout = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex max-w-[750px] flex-col items-start gap-4 p-8 text-gray-700">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link to="/" className="flex items-center gap-2 decoration-2 hover:underline">
            <FontAwesomeIcon icon={faHome} size="sm" />
            <span>Home</span>
          </Link>
          <Link to="/work" className="flex items-center gap-2 decoration-2 hover:underline">
            <FontAwesomeIcon icon={faBriefcase} size="sm" />
            <span>Work</span>
          </Link>
          <Link to="/posts" className="flex items-center gap-2 decoration-2 hover:underline">
            <FontAwesomeIcon icon={faBook} size="sm" />
            <span>Posts</span>
          </Link>
        </nav>

        <div className="flex min-w-full flex-col gap-6 py-8">
          <Routes>
            <Route path="*" element={<HomeModule />} />
            <Route path="/work/*" element={<WorkModule />} />
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
    </div>
  );
};
