import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import i18n from "./Translation/i18n.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </BrowserRouter>
);
