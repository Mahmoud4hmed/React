import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import HTML from './pages/html';
import CSS from './pages/css';
import Javascript from './pages/javascrip';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error.. Page Not Found</h1>
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <CSS />,
  },

  {
    path: "/javascript",
    element: <Javascript />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

