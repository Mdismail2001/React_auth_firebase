import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/Root.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import FirebaseAuthProvider from './context/FirebaseAuthProvider.jsx';
// create context for pass value

 const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:'/login', Component:Login},
      {path:'/register', Component:Register}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
            <RouterProvider router={router}></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>,
)
