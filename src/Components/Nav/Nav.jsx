import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAccessToken } from "../../Utils/accountUtlis";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserIcon from "../UserIcon/UserIcon";
import "./nav.css";

const Nav = () => {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const { lang } = useParams();
  const { maxWidth } = useSelector((state) => state.width);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  const token = getAccessToken();

  return (
    <div
      className={`Nav ${visible ? "nav-visible" : "nav-hidden"}`}
      style={{
        backgroundColor:
          location.pathname !== `/${lang}/` ? "#3e2b24" : "#4b503759",
      }}
    >
      <div className="container">
        <div className="navDiv">
          <div className="projectTitle">
            <NavLink
              className="titleLink"
              to={"/"}
              style={{
                color: location.pathname !== "/" ? "#ccb18a" : "#3d2b2e",
              }}
            >
              <h1 className="projectTitleH">
                {"Continental".split("").map((letter, index) => (
                  <span
                    key={index}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </NavLink>
          </div>

          {maxWidth >= 551 ? (
            <div className="menuContainer">
              <div className="menu">
                <ul className="menuUl">
                  <NavLink to={`/`} className={"menuLink"}>
                    <li className="menuLi">{t("navMenu.0")}</li>
                  </NavLink>
                  <NavLink to={`/${lang}/allHotels`} className="menuLink">
                    <li className="menuLi">{t("navMenu.1")}</li>
                  </NavLink>
                  <NavLink to={`/${lang}/about`} className="menuLink">
                    <li className="menuLi">{t("navMenu.2")}</li>
                  </NavLink>
                  <NavLink to={`/${lang}/contacts`} className="menuLink">
                    <li className="menuLi">{t("navMenu.3")}</li>
                  </NavLink>
                  <NavLink to={`/${lang}/booked_rooms`} className="menuLink">
                    <li className="menuLi">{t("navMenu.4")}</li>
                  </NavLink>
                  {token ? (
                    <NavLink
                      to={`/${lang}/account`}
                      className="menuLink"
                      id="accountLink"
                    >
                      <li className="menuLi">{t("navMenu.6")}</li>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={`/${lang}/signIn`}
                      className="menuLink"
                      id="logInLi"
                    >
                      <li className="menuLi">{t("navMenu.5")}</li>
                    </NavLink>
                  )}
                </ul>
              </div>
              <LanguageSelector />
            </div>
          ) : (
            <div className="menuContainerMobile">
              <div className="userIconMobileDiv">
                {token ? (
                  <UserIcon />
                ) : (
                  <NavLink
                    to={`/${lang}/signIn`}
                    className="menuLink logInLink"
                    id="logInLi"
                  >
                    <li className="menuLi">{t("navMenu.5")}</li>
                  </NavLink>
                )}
              </div>
              <BurgerMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
