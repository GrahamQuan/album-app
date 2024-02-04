import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import Root from './routes/root.tsx';
import PhotoPage from './pages/PhotoPage.tsx';
import NotFound from './components/NotFound.tsx';
import ErrorElement from './components/ErrorElement.tsx';
import Album from './components/Album.tsx';
import Description from './pages/Description.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Album />,
      },
      {
        path: '/photos/:photoId',
        element: <PhotoPage />,
      },
      {
        path: '/not-found',
        element: <NotFound />,
      },
      {
        path: 'description',
        element: <Description />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/not-found" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
