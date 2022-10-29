import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { ReportPage } from './pages/ReportPage';
import TestPage from './pages/TestPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/report",
    element: <ReportPage />
  },
  {
    path: "/test",
    element: <TestPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
