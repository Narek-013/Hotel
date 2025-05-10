import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAccessToken } from "../../Utils/accountUtlis";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import "./burgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { lang } = useParams();
  const token = getAccessToken();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { path: "/", label: t("navMenu.0") },
    { path: `/${lang}/allHotels`, label: t("navMenu.1") },
    { path: `/${lang}/about`, label: t("navMenu.2") },
    { path: `/${lang}/contacts`, label: t("navMenu.3") },
    { path: `/${lang}/booked_rooms`, label: t("navMenu.4") },
    {
      path: token ? `/${lang}/account` : `/${lang}/signIn`,
      label: token ? t("navMenu.6") : t("navMenu.5"),
    },
  ];

  return (
    <div className="burgerWrapper">
      <div className={`burgerIcon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`burgerOverlay ${isOpen ? "open" : ""}`}>
        <div className="burgerMenuContent">
          <NavLink to="/" className="burgerTitle" onClick={closeMenu}>
            Continental
          </NavLink>
          <nav className="burgerNavLinks">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "menuItem active" : "menuItem"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="burgerLangBottom">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
