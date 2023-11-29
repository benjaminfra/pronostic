import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthProvider from "./provider/AuthProvider.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import i18n from "./lang";
import ServiceProvider from "./provider/ServiceProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import ConfirmEmail from "./pages/auth/ConfirmEmail.tsx";
import Login from "./pages/auth/Login.tsx";
i18n;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "confirm",
    element: <ConfirmEmail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <ServiceProvider>
          <RouterProvider router={router} />
        </ServiceProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
