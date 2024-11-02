import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ErrorElemnet from './Components/ErrorElement/ErrorElemnet.jsx';
import BookDetails from './Components/Home/BookDetails.jsx';
import ListedBook from './Components/ListedBook/ListedBook.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   children:[
    {
      path: "/home",
      element:<Home></Home>
    },
    {
      path: "/dashboard",
      element:<Dashboard></Dashboard>
    },
    {
      path:'/bookdetails/:id',
      element:<BookDetails></BookDetails>
    },
    {
      path:"/listedbook",
      element:<ListedBook></ListedBook>
    }
   ],
   errorElement:<ErrorElemnet/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)


//for several copy windows + v

// i install react from vite 
//install tailwind 
//install daisy ui
// and now install react-router-dom