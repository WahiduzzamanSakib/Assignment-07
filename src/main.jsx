import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root';
import Timeline from './Components/Timeline';
import Stats from './Components/Stats';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
path: "/timeline",
Component: Timeline
      },
      {
        path: "/stats",
        Component: Stats
      }
    ],
    //  errorElement: <h2>hsjksahlfdkj</h2>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
