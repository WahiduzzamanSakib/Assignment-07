import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root';
import Timeline from './Components/Timeline';
import Stats from './Components/Stats';
import Error from './Components/Common/Error';
import Homepage from './Components/Homepage';

const dataPromise = fetch("https://mocki.io/v1/db4c671e-d0d4-4361-86a7-d3f42d66bdc7")
  .then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element:
          <Homepage dataPromise={dataPromise} />
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
    ],
    errorElement: <Error />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
