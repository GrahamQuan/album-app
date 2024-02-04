import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Root() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="relative min-h-screen w-full mx-auto max-w-6xl flex flex-col items-center"
      >
        <Outlet />
        <ScrollToTopButton />
      </main>
    </>
  );
}
