import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";
import "./reservationSuccess.css";

const ReservationSuccess = ({states}) => {
  const {nights, totalWithoutTax, tax } = states
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { room } = useSelector((state) => state.hotels);
  const { reserve, loadingStatus } = useSelector((state) => state.reserveData);

  return (
    <div className="ReservationSuccess">
      {loadingStatus === "pending" ? (
        <Loading />
      ) : (
        <div className="reservationSuccessDiv">
          <div className="reservSucTopDiv">
            <span className="reservSucSpan">
              {t("reservationSuccess.reservationInfo1.title")}
            </span>
          </div>
          <div className="roomReadyDiv">
            <span className="roomReady">
              {t("reservationSuccess.reservationInfo1.ready")}
            </span>
            <span className="roomReadySpan">
              {reserve.reserve.firstName} {reserve.reserve.lastName},{" "}
              {t("reservationSuccess.reservationInfo1.successText")}
            </span>
            <hr className="roomReadyHr" />
          </div>
          <div className="reservedRoomInfosDiv">
            <div className="roomReservInfos">
              <div className="backBtnDiv">
                <p className="goBackP">
                  {t("reservationSuccess.reservationInfo1.text")}
                </p>
                <button
                  className="backBtn"
                  onClick={() => navigate(`/${lang}/allHotels`)}
                >
                  {t("reservationSuccess.reservationInfo1.buttonBack")}
                </button>
              </div>
              <div className="CheckInOut">
                <div className="reservedInfoDiv">
                  <span className="reservedInfoName reserved_info_name">
                    {t("reservationSuccess.reservationInfo1.checkIn")} :
                  </span>
                  <span className="reservedInfo">13:00</span>
                </div>
                <div className="reservedInfoDiv">
                  <span className="reservedInfoName reserved_info_name">
                    {t("reservationSuccess.reservationInfo1.checkOut")} :
                  </span>
                  <span className="reservedInfo">12:00</span>
                </div>
              </div>
              <div className="reservedInfoAbout">
                <span className="reservedInfoAboutName">
                  {t("reservationSuccess.reservationInfo1.infoTitle")}
                </span>
                <hr className="reservedInfoHr" />
                <div className="reservedInfoDiv">
                  <span className="reservedInfoName reserved_info_name">
                    {t("reservationSuccess.reservationInfo1.phone")} :
                  </span>
                  <a href="tel:+12345678910" className="reservedInfo">
                    +1-234-5678910
                  </a>
                </div>
                <div className="reservedInfoDiv">
                  <span className="reservedInfoName reserved_info_name">
                    {t("reservationSuccess.reservationInfo1.email")} :
                  </span>
                  <a
                    href="mailto:hotels-support@wix.com"
                    className="reservedInfo"
                  >
                    hotels-support@wix.com
                  </a>
                </div>
                <div className="reservedInfoDiv">
                  <span className="reservedInfoName reserved_info_name">
                    {t("reservationSuccess.reservationInfo1.address")} :
                  </span>
                  <a
                    href={`https://www.google.com/maps?q=${t("footer.0")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reservedInfo"
                  >
                    {t("footer.0")}
                  </a>
                </div>
              </div>
            </div>
            <div className="reservationRoomInfoSuccess">
              <span className="orderDetailsSpan">
                {t("reservation.reserveSection.title")}
              </span>
              <hr className="orderDetailsHr" />
              <img
                className="reservRoomImg"
                src={room.room_images}
                alt="Room Image"
              />
              <div className="reservRoomDetailsDiv">
                <div className="reservRoomDetails">
                  <span className="reservRoomDetailsName">
                    {t("reservation.reserveSection.typeOfRoom")} :
                  </span>
                  <span className="reservRoomDetail">{room.room_type}</span>
                </div>
                <div className="reservRoomDetails">
                  <span className="reservRoomDetailsName">
                    {t("reservation.reserveSection.date")} :
                  </span>
                  <span className="reservRoomDetail">
                    {reserve.reserve.reserve_start} - {reserve.reserve.reserve_end}
                  </span>
                </div>
                <div className="reservRoomDetails">
                  <span className="reservRoomDetailsName">
                    {t("reservation.reserveSection.nights")} :
                  </span>
                  <span className="reservRoomDetail">{nights}</span>
                </div>
                <div className="reservRoomDetails">
                  <span className="reservRoomDetailsName">
                    {t("reservation.reserveSection.guests")} :
                  </span>
                  <span className="reservRoomDetail">{reserve.reserve.people_count}</span>
                </div>
                <hr className="orderDetailsHr" />
                <div className="reservWithoutTaxDiv">
                  <span className="reservWithoutTaxSpan">
                    {t("reservation.reserveSection.withoutTax")}
                  </span>
                  <span className="reservPriceWithoutTax">{totalWithoutTax}$</span>
                </div>
                <div className="reservTaxDiv">
                  <span className="reservTaxSpan">
                    {t("reservation.reserveSection.tax")} (20%)
                  </span>
                  <span className="reservPriceTax">{tax}$</span>
                </div>
                <hr className="orderDetailsHr" />
                <div className="reservSumDiv">
                  <span className="reservSumSpan">
                    {t("reservation.reserveSection.summery")}
                  </span>
                  <span className="reservSum">{reserve.reserve.total_spent}$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationSuccess;
