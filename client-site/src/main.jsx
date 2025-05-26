import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./routes/Router.jsx";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AuthProvider from "./providers/AuthProvider.jsx";
import { LanguageProvider } from "./providers/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <ToastProvider>
          <LanguageProvider>
            <RouterProvider router={Router} />
          </LanguageProvider>
        </ToastProvider>
      </Provider>
    </AuthProvider>
  </StrictMode>
);
