import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./singleHotel.css";

const SingleHotel = ({ hotel }) => {

  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="SingleHotel">
      <img src={hotel?.mainImage} className="hotelImg" alt={hotel?.name} />
      <div className="hotel_info">
        <h3 className="hotel_name">{hotel.name}</h3>
        <NavLink className="info_link" to={`/${lang}/hotels/${hotel._id}`}>
          <span className="more_span">{t("hotelsPage.infoLink")}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SingleHotel;
