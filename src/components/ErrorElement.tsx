import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link
        to="/"
        className="hover:cursor-pointer hover:underline text-blue-300"
      >
        Home
      </Link>
    </div>
  );
}
