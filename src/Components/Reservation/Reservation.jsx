import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Formik } from "formik";
import * as Yup from "yup";
import { reserveRoomSliceThunk } from "../../Redux/Slices/ReservRoomSlice/reserveRoomSliceThunk.js";
import { requireAuth } from "../../HOC/requireAuth_NotAuth.jsx";
import Loading from "../Loading/Loading.jsx";
import ReservationSuccess from "../ReservationSuccess/ReservationSuccess.jsx";
import "./reservation.css";

const Reservation = ({ states }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(false);
  const { room } = useSelector((state) => state.hotels);
  const { user } = useSelector((state) => state.userData);
  const { loadingStatus } = useSelector((state) => state.reserveData);
  const {
    reserve_start,
    reserve_end,
    people_count,
    nights,
    totalWithoutTax,
    tax,
    total_spent,
    setOpenPage,
  } = states;

  const validate = Yup.object().shape({
    firstName: Yup.string()
      .min(3, t("errors.short"))
      .max(15, t("errors.long"))
      .matches(/^[A-Z a-z0-9_]+$/, t("errors.invalidSymbol"))
      .required(t("errors.required")),

    lastName: Yup.string()
      .min(3, t("errors.short"))
      .max(15, t("errors.long"))
      .matches(/^[A-Z a-z0-9_]+$/, t("errors.invalidSymbol"))
      .required(t("errors.required")),

    email: Yup.string()
      .email(t("errors.invalidEmail"))
      .required(t("errors.required")),

    phone: Yup.string()
      .matches(/^\+\d+$/, t("errors.reservationPage.phoneFormat"))
      .min(6, t("errors.reservationPage.minDigit"))
      .max(15, t("errors.reservationPage.maxDigit"))
      .required(t("errors.required")),

    country: Yup.string().required(t("errors.required")),

    description: Yup.string().nullable(),
  });

  const reserve = async (values) => {
    await dispatch(
      reserveRoomSliceThunk({
        userID: user?._id,
        roomID: room?._id,
        reserve_start,
        reserve_end,
        total_spent,
        ...values,
        people_count,
      })
    );

    setPage(true);
  };

  return (
    <div className="Reservation">
      {loadingStatus === "pending" ? (
        <Loading />
      ) : !page ? (
        <div className="reservationDiv">
          <div className="reservationTopDiv">
            <FaArrowLeftLong onClick={() => setOpenPage(false)} />
            <h1 className="roomNameH">{room.room_type}</h1>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              country: "",
              description: "",
            }}
            onSubmit={(values) => reserve(values)}
            validationSchema={validate}
            validateOnBlur
          >
            {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              errors,
              touched,
              isValid,
            }) => (
              <div className="reservation_div">
                <form onSubmit={handleSubmit} className="reservationForm">
                  <div className="detailsForReservForm">
                    <span className="writeOurDatasSpan">
                      {t("reservation.formSection.title")}
                    </span>
                    <hr className="detailsReservHr" />
                    <div className="reservationInputsDiv">
                      <div className="ourDetailsInpDiv">
                        <span className="ourDetailsName">
                          {t("reservation.formSection.name.inputName")}
                          {errors.firstName && touched.firstName && (
                            <span className="errorsReservation">
                              {errors.firstName}
                            </span>
                          )}
                        </span>
                        <input
                          onBlur={handleBlur}
                          type="text"
                          value={values.firstName}
                          placeholder={t(
                            "reservation.formSection.name.placeholder"
                          )}
                          onChange={handleChange}
                          className="ourDetailsInput"
                          name="firstName"
                          autoComplete="given-name"
                        />
                      </div>
                      <div className="ourDetailsInpDiv">
                        <span className="ourDetailsName">
                          {t("reservation.formSection.surname.inputName")}
                          {errors.lastName && touched.lastName && (
                            <span className="errorsReservation">
                              {errors.lastName}
                            </span>
                          )}
                        </span>
                        <input
                          onBlur={handleBlur}
                          type="text"
                          value={values.lastName}
                          placeholder={t(
                            "reservation.formSection.surname.placeholder"
                          )}
                          onChange={handleChange}
                          className="ourDetailsInput"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </div>
                      <div className="ourDetailsInpDiv">
                        <span className="ourDetailsName">
                          {t("reservation.formSection.email.inputName")}
                          {errors.email && touched.email && (
                            <span className="errorsReservation">
                              {errors.email}
                            </span>
                          )}
                        </span>
                        <input
                          onBlur={handleBlur}
                          type="email"
                          value={values.email}
                          placeholder={t(
                            "reservation.formSection.email.placeholder"
                          )}
                          onChange={handleChange}
                          className="ourDetailsInput"
                          name="email"
                          autoComplete="email"
                        />
                      </div>
                      <div className="ourDetailsInpDiv">
                        <span className="ourDetailsName">
                          {t("reservation.formSection.phone.inputName")}
                          {errors.phone && touched.phone && (
                            <span className="errorsReservation">
                              {errors.phone}
                            </span>
                          )}
                        </span>
                        <input
                          onBlur={handleBlur}
                          type="tel"
                          value={values.phone}
                          placeholder={t(
                            "reservation.formSection.phone.placeholder"
                          )}
                          onChange={handleChange}
                          className="ourDetailsInput"
                          name="phone"
                          autoComplete="tel"
                        />
                      </div>
                      <div className="ourDetailsInpDiv">
                        <span className="ourDetailsName">
                          {t("reservation.formSection.country.inputName")}
                          {errors.country && touched.country && (
                            <span className="errorsReservation">
                              {errors.country}
                            </span>
                          )}
                        </span>
                        <select
                          name="country"
                          id="selectCountry"
                          className="ourDetailsInput"
                          value={values.country}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            {t("reservation.formSection.country.inputName")}
                          </option>
                          <option value="Russia">
                            {t("reservation.formSection.country.russia")}
                          </option>
                          <option value="Armenia">
                            {t("reservation.formSection.country.armenia")}
                          </option>
                          <option value="USA">
                            {t("reservation.formSection.country.usa")}
                          </option>
                          <option value="Italy">
                            {t("reservation.formSection.country.italy")}
                          </option>
                        </select>
                      </div>
                      <div className="ourDetailsInpDiv">
                        <span className="ourDetailsName">
                          {t("reservation.formSection.textarea.inputName")}
                          {errors.description && touched.description && (
                            <span className="errorsReservation">
                              {errors.description}
                            </span>
                          )}
                        </span>
                        <textarea
                          name="description"
                          value={values.description}
                          placeholder={t(
                            "reservation.formSection.textarea.placeholder"
                          )}
                          id="textareaReserv"
                          onChange={handleChange}
                          className="ourDetailsInput"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="reservationRoomInfo">
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
                        <span className="reservRoomDetail">
                          {room.room_type}
                        </span>
                      </div>
                      <div className="reservRoomDetails">
                        <span className="reservRoomDetailsName">
                          {t("reservation.reserveSection.date")} :
                        </span>
                        <span className="reservRoomDetail">
                          {reserve_start} - {reserve_end}
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
                        <span className="reservRoomDetail">{people_count}</span>
                      </div>
                      <hr className="orderDetailsHr" />
                      <div className="reservWithoutTaxDiv">
                        <span className="reservWithoutTaxSpan">
                          {t("reservation.reserveSection.withoutTax")}
                        </span>
                        <span className="reservPriceWithoutTax">
                          {totalWithoutTax}$
                        </span>
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
                        <span className="reservSum">{total_spent}$</span>
                      </div>
                    </div>
                    <div className="reservBtnDiv">
                      <button type="submit" className="reservBtn">
                        {t("reservation.reserveSection.reserveButton")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>
      ) : (
        <ReservationSuccess states={{ nights, totalWithoutTax, tax }} />
      )}
    </div>
  );
};

export default requireAuth(Reservation);
