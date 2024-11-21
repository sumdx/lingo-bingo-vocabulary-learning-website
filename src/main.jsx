import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Root from "./pages/Root.jsx";
import StartLearning from "./pages/StartLearning.jsx";
import Tutorials from "./pages/Tutorials.jsx";
import About from "./pages/About.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Lessons from "./pages/Lessons.jsx";
import UpdateProfile from "./pages/UpdateProfile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/start-learning",
        element: <StartLearning></StartLearning>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute> ,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgot-password",
        element: <Register></Register>,
      },
      {
        path: "/lessons/:lessonNumber",
        loader: () => fetch("/data.json"),
        element:<PrivateRoute><Lessons></Lessons></PrivateRoute> ,
      },
      {
        path: "/update-profile",
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute> ,
      },
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
