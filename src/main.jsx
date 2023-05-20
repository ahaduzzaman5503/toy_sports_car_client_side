import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import AddToy from './components/AddToy/AddToy.jsx';
import MyToy from './components/MyToy/MyToy.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import ToysDetails from './components/AllToys/ToysDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toy')
      },
      {
        path: "/toy/:id",
        element:<PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: "/mytoy",
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
