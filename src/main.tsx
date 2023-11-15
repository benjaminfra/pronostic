import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthProvider from "./provider/AuthProvider.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./error/ErrorFallback.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>
);
