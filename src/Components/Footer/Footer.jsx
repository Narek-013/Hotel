import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";

import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="Footer">
      <div className="container">
        <div className="footerDiv">
          <div className="footerTitleDiv">
            <h1 className="footerTitle">Continental</h1>
          </div>
          <div className="footerContactsDiv">
            <div className="footerPhoneDiv">
              <a href="tel:+7 123 456-78-90" className="footerPhoneSpan">
                +7 123 456-78-90
              </a>
              <a href="mailto:info@mysite.ru" className="footerEmailSpan">
                info@mysite.ru
              </a>
            </div>
            <hr className="footerHr" />
            <div className="footerAddressDiv">
              <a
                href={`https://www.google.com/maps?q=${t("footer.0")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footerAddressLink"
              >
                {t("footer.0")}
              </a>
              <a
                href={`https://www.google.com/maps?q=${t("footer.1")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footerCityLink"
              >
                {t("footer.1")}
              </a>
              <a
                href={`https://www.google.com/maps?q=${t("footer.2")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footerCityLink"
              >
                {t("footer.2")}
              </a>
            </div>
            <hr className="footerHr" />
            <div className="footerIconsDiv">
              <a
                href="https://www.facebook.com/"
                className="iconLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/"
                className="iconLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/"
                className="iconLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="iconLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/i/flow/login"
                className="iconLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
