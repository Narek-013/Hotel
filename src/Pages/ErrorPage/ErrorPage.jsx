
import {  NavLink } from "react-router-dom";
import { PiSmileySadLight } from "react-icons/pi";
import "./errorPage.css";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
    const {t} = useTranslation()
  return (
    <div className="error-container">
      <div className="error-content">
        <PiSmileySadLight className="error-icon" />
        <h1 className="error-404">404</h1>
        <h1 className="error-title">{t("errors.errorPage.title")}</h1>
        <p className="error-text">
        {t("errors.errorPage.text")}
        </p>
        <NavLink to="/" className="error-button">
          {t("errors.errorPage.button")}
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
