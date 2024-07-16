import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import AppliedJobs from './components/appliedJobs/AppliedJobs.jsx';
import ErrorPage from './components/errorElements/ErrorPage.jsx';
import JobDetail from './components/job details/JobDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetail></JobDetail>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
