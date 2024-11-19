import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Root from './pages/Root.jsx';
import StartLearning from './pages/StartLearning.jsx';
import Tutorials from './pages/Tutorials.jsx';
import About from './pages/About.jsx';
import MyProfile from './pages/MyProfile.jsx';
import Login from './pages/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/start-learning",
        element: <StartLearning></StartLearning>
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  }
]);


createRoot(document.getElementById('root')).render(


  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
