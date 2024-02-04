import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="mx-auto sticky top-0 w-full flex items-center">
      <div className="w-full bg-pink-300 relative z-20 flex h-16 items-center justify-between border-b border-gray-50 px-4 py-3 lg:px-8">
        <Link to="/" className="hover:opacity-50">
          Album
        </Link>

        <Link to="/description" className="hover:opacity-50">
          Description
        </Link>
      </div>
    </nav>
  );
}
