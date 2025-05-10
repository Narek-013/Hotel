import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import contactSectorImage from "../../Images/contactPage.jpg";
import "./contactPage.css";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div
      className="ContactPage"
      style={{ backgroundImage: `url(${contactSectorImage})` }}
    >
      <div className="container">
        <div className="contactPageDiv">
          <div className="contactSection1">
            <div className="contactDiv">
              <div className="writeDiv">
                <h1 className="writeH">
                  {t("contactPage.contactSection1.leftSide.title")}
                </h1>
                <p className="writeP">
                  {t("contactPage.contactSection1.leftSide.text")}
                </p>
              </div>
              <div className="phoneEmail">
                <div className="phoneContact">
                  <h3 className="phoneH">
                    {t("contactPage.contactSection1.leftSide.phone")}
                  </h3>
                  <a href="tel:+7 123 456-78-90" className="phoneA">
                    +7 123 456-78-90
                  </a>
                </div>
                <div className="emailContact">
                  <h3 className="emailH">
                    {t("contactPage.contactSection1.leftSide.email")}
                  </h3>
                  <a href="mailto:info@mysite.ru" className="emailA">
                    info@mysite.ru
                  </a>
                </div>
              </div>
              <div className="socialMedia">
                <h3 className="socialMediaH">
                  {t("contactPage.contactSection1.leftSide.website")}
                </h3>
                <div className="socialIcons">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.com/i/flow/login"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="contactFormDiv">
              <form action="" className="contactForm">
                <div className="nameSurnameDiv">
                  <div className="nameDiv">
                    <span className="inpNameSpan">
                      {t("contactPage.contactSection1.form.name")}
                    </span>
                    <input
                      type="text"
                      className="contactInput nameInp inpArea"
                    />
                  </div>
                  <div className="surnameDiv">
                    <span className="inpNameSpan">
                      {t("contactPage.contactSection1.form.surname")}
                    </span>
                    <input
                      type="text"
                      className="contactInput surnameInp inpArea"
                    />
                  </div>
                </div>
                <div className="emailDiv">
                  <span className="inpNameSpan">
                    {t("contactPage.contactSection1.form.email")} *
                  </span>
                  <input
                    type="email"
                    className="contactInput emailInp  inpArea "
                  />
                </div>
                <div className="messageDiv">
                  <span className="inpNameSpan">
                    {t("contactPage.contactSection1.form.message")}
                  </span>
                  <textarea
                    name="textarea"
                    className="textarea  inpArea"
                  ></textarea>
                </div>
                <button className="sendBtn">
                  {t("contactPage.contactSection1.form.send")}
                </button>
              </form>
            </div>
          </div>
          <div className="contactSection2">
            <div className="contactInfo">
              <div className="visitUs">
                <h1 className="visitUsH">
                  {t("contactPage.contactInfo.title")}!
                </h1>
                <p className="visitUsP">{t("contactPage.contactInfo.text")}</p>
              </div>
              <div className="address">
                <h3 className="addressH">
                  {t("contactPage.contactInfo.address")}
                </h3>
                <span className="addressSpan">
                  {t("footer.0")}, {t("footer.1")}, {t("footer.2")}
                </span>
              </div>
              <div className="workingDays">
                <span className="wHours">
                  {t("contactPage.contactInfo.wHours")}
                </span>
                <div className="weekDays">
                  <span className="weekDay">
                    {t("contactPage.contactInfo.weekDays.0")}:
                  </span>
                  <span className="hours">9:00 - 20:00</span>
                </div>
                <div className="weekDays">
                  <span className="weekDay">
                    {t("contactPage.contactInfo.weekDays.1")}:
                  </span>
                  <span className="hours">9:00 - 19:00</span>
                </div>
                <div className="weekDays">
                  <span className="weekDay">
                    {t("contactPage.contactInfo.weekDays.2")}:
                  </span>
                  <span className="hours">12:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contactMapDiv">
            <iframe
              className="mapIframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18488.976732901363!2d37.58138686186027!3d55.748997028614866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb34d644c67%3A0x4666bf5bc9bd0924!2z0YAt0L0g0JDRgNCx0LDRgiwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sam!4v1740255663582!5m2!1sru!2sam"
              width="100%"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
