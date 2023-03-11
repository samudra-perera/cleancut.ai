import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import About from './pages/About';
import Error from './pages/Error';

//This is the front end routing for Cleancut, this will handle all the page renders and Navigation links
const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    errorElement: <Error/>
  },
{
  path: '/about',
  element: <About/>,
  errorElement: <Error/>
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

