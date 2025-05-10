import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./singleRoom.css";

const SingleRoom = ({ room }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="SingleRoom">
      <img src={room?.room_images[0]} className="roomImg" alt={room?.room_type} />
      <div className="room_info">
        <h3 className="room_name">{room.room_type}</h3>
        <NavLink className="info_link" to={`/${lang}/hotels/room/${room._id}`}>
          <span className="more_span">{t("hotelPage.moreAboutHotel")}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SingleRoom;
