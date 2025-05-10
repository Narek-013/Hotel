import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EN from "../../Images/en.jpg";
import AM from "../../Images/am.jpg";
import RU from "../../Images/ru.jpg";
import "./languageSelector.css";

const LanguageSelector = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const handleChangeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);

    const pathSegments = location.pathname.split("/").filter(Boolean);
    if (["am", "en", "ru"].includes(pathSegments[0])) {
      pathSegments.shift();
    }

    const newPath = `/${lang}/${pathSegments.join("/")}`;
    navigate(newPath, { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="language-button">
        {i18n.language.toUpperCase()}{" "}
        <img
          src={i18n.language === "en" ? EN : i18n.language === "am" ? AM : RU}
        />
      </button>
      <div className={`language-options ${isOpen ? "open" : ""}`}>
        <button onClick={() => handleChangeLanguage("en")}>
          EN <img src={EN} alt="En" />
        </button>
        <button onClick={() => handleChangeLanguage("ru")}>
          RU <img src={RU} alt="Ru" />
        </button>
        <button onClick={() => handleChangeLanguage("am")}>
          AM <img src={AM} alt="Am" />
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
