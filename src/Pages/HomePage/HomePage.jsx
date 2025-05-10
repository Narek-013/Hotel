import React, { useEffect, useRef } from "react";
import "./homePage.css";
import home1 from "../../Images/home1.jpg";
import aboutSection from "../../Images/aboutHome.jpg";
import reviews1 from "../../Images/reviews1.jpg";
import reviews2 from "../../Images/reviews2.jpg";
import reviews3 from "../../Images/reviews3.jpg";
import homeVideo from "../../Images/homeVideo.gif";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { t, } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const reviews = [
    {
      id: 1,
      image: reviews1,
      name: "Елена Иванова",
      review:
        "Прекрасный выбор отелей и приветливый персонал. Обязательно вернемся!",
    },
    {
      id: 2,
      image: reviews2,
      name: "Александр Смирнов",
      review:
        "Спасибо за быструю бронь и отличные цены. Рекомендую всем друзьям!",
    },
    {
      id: 3,
      image: reviews3,
      name: "Мария Петрова",
      review:
        "Профессиональный подход к каждому клиенту. Отличный выбор отелей по всему миру.",
    },
  ];

  return (
    <div className="HomePage">
      <div className="homePageDiv">
        <div className="videoDiv">
          <video
            width="100%"
            className="video"
            autoPlay
            muted
            loop
            src={homeVideo}
          ></video>
        </div>
        {/* <div className="inputsCont">
          <div className="inputsDiv">
            <div className="inputPick-div">
              <input type="date" />
              <input type="date" />
            </div>
            <div className="inputPick-div">
              <input type="number" />
              <input type="number" />
            </div>
            <button className="pickUpBtn">Pick Up</button>
          </div>
        </div> */}
        <div
          className="welcomeSector"
          style={{ backgroundImage: `url(${home1})` }}
        >
          <div className="welcomeDiv">
            <h1 className="welcomeH">{t("homePage.welcomeSection.title")}</h1>
            <p className="welcomeP">{t("homePage.welcomeSection.text")}</p>
            <button
              className="startNowBtn"
              onClick={() => navigate(`/${lang}/allHotels`)}
            >
              {t("homePage.welcomeSection.button")}
            </button>
          </div>
        </div>
        <div className="aboutOurHotelSector">
          <div className="container">
            <div
              className="aboutHotelDiv"
            >
              <div className="aboutHotel_cont">
                <h1 className="aboutHotelH">
                  {t("homePage.aboutHotel.title")}
                </h1>
                <hr className="aboutHotelHr" />
              </div>
              <div className="aboutComfort_comp">
                <div className="aboutComfort">
                  <h2 className="aboutComfortH">
                    {t("homePage.aboutHotel.title2")}
                  </h2>
                  <p className="aboutComfortP">
                    {t("homePage.aboutHotel.text")}
                  </p>
                  <button
                    className="aboutHotelBtn"
                    onClick={() => navigate(`/${lang}/about`)}
                  >
                    {t("homePage.aboutHotel.button")}
                  </button>
                </div>
                <div
                  className="aboutComfortImg"
                  style={{ backgroundImage: `url(${aboutSection})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviewsSection">
          <div className="container">
            <div
              className="reviewsDiv"
            >
              <div className="reviews_cont">
                <h1 className="reviewsH">{t("homePage.reviews.title")}</h1>
                <hr className="reviewsHr" />
                <span className="revSpan">{t("homePage.reviews.txt")}</span>
                <p className="thanksSpeach">
                  {t("homePage.reviews.thanksSpeech")}
                </p>
                {reviews?.map((rev) => (
                  <div className="review" key={rev.id}>
                    <hr className="reviewHr" />
                    <div className="reviewComp">
                      <div className="reviewCompDiv">
                        <div
                          className="revImg"
                          style={{ backgroundImage: `url(${rev.image})` }}
                        ></div>
                        <span className="revName">{rev.name}</span>
                      </div>
                      <p className="revText">{rev.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
