import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <Link
        to="/"
        className="hover:cursor-pointer hover:underline text-blue-300"
      >
        Home
      </Link>
    </div>
  );
}
