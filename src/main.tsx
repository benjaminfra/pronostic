import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthProvider from "./provider/AuthProvider.tsx";
import i18n from "./lang";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import ConfirmEmail from "./pages/auth/ConfirmEmail.tsx";
import UpdatePassword from "./pages/auth/UpdatePassword.tsx";
import SignIn from "./pages/auth/SignIn.tsx";
import ResetPassword from "./pages/auth/ResetPassword.tsx";
import "./index.css";
import MatchBoard from "./pages/match/MatchBoard.tsx";
i18n;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "confirm",
        element: <ConfirmEmail />,
      },
      {
        path: "update-password",
        element: <UpdatePassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "pronostic",
        element: <MatchBoard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
