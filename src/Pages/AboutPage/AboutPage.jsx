import React from "react";
import { useTranslation } from "react-i18next";
import aboutImage from "../../Images/aboutImage.jpg";

import "./aboutPage.css";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="AboutPage">
      <div className="container">
        <div className="aboutPageDiv">
          <div className="aboutPageTop">
            <img className="aboutImages" src={aboutImage} alt="about_img" />
            <div className="aboutTxtDiv">
              <h3 className="aboutTxtH">{t("aboutPage.topSection.title")}</h3>
              <p className="aboutTxtP">{t("aboutPage.topSection.text")}</p>
            </div>
          </div>
          <hr className="aboutPageHr" />
          <div className="aboutSection">
            <div className="aboutDiv">
              <h2 className="aboutH">{t("aboutPage.about.title")}</h2>
              <p className="aboutP1">{t("aboutPage.about.text1")}</p>
              <p className="aboutP2">{t("aboutPage.about.text2")}</p>
              <p className="aboutP3">{t("aboutPage.about.text3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
