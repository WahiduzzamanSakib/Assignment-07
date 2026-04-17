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
import Details from './Components/Details';
import DataProvider from './Components/DataContext';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "timeline",
        element: <Timeline />
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
    <DataProvider>
      <RouterProvider router={router} />,
    </DataProvider>
  </StrictMode>,
)
