import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Root() {
  return (
    <>
      <main
        id="main"
        className="min-h-screen w-full flex flex-col items-center"
      >
        <Header />
        <Outlet />
        <ScrollToTopButton />
      </main>
    </>
  );
}
