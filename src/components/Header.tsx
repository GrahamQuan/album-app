import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="sticky top-0 w-full flex items-center bg-pink-300 z-20">
      <div className="w-full mx-auto max-w-6xl relative z-20 flex h-16 items-center justify-between border-b border-slate-300 px-4 py-3 lg:px-8">
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
