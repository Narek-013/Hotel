import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import DatePicker from "../DatePickerr/DatePickerr";
import "./roomReservationSection.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCartSliceThunk } from "../../Redux/Slices/CartSlice/cartSliceThunk";
import { getUserData } from "../../Redux/Slices/UserSlice/userSliceThunk";

const RoomReservationSection = ({ reservationData }) => {
  const {
    room,
    reserve_start,
    reserve_end,
    adult,
    children,
    nights,
    tax,
    total_spent,
    errorDate,
    setErrorDate,
    setReserveStart,
    setReserveEnd,
    setAdult,
    setChildren,
    setPeopleCount,
    setOpenPage,
  } = reservationData;

  const people_count = parseInt(adult || 0) + parseInt(children || 0);
  const { t } = useTranslation();
  const { cart } = useSelector((state) => state.cartData);
  const { user } = useSelector((state) => state.userData);
  const { roomID } = useParams();
const dispatch = useDispatch()
  useEffect(() => {
    if (user?._id) {
      dispatch(getCartSliceThunk(user._id));
    }
  }, [user?._id, dispatch]);
  const roomCapacity = room?.capacity;

  const capacityController = () => {
    if (people_count > roomCapacity) {
      return {
        capacityMAX: roomCapacity || 0,
        error: `${roomCapacity} ${t("errors.roomPage.capacityMax")}`,
      };
    }
    if (people_count === roomCapacity) {
      return { childrenMAX: 0, error: "" };
    }
    if (roomCapacity > adult && adult > 0) {
      return { childrenMAX: roomCapacity - parseInt(adult) || 0, error: "" };
    }
    if (roomCapacity > children && children > 0) {
      return { adultMax: roomCapacity - parseInt(children) || 0, error: "" };
    }
    return {};
  };

  const capacityData = capacityController();

  useEffect(() => {
    setPeopleCount((parseInt(adult) || 0) + (parseInt(children) || 0));
  }, [adult, children]);

  const validate = Yup.object().shape({
    reserve_start: Yup.string().required(t("errors.required")),
    reserve_end: Yup.string().required(t("errors.required")),
    adult: Yup.number()
      .typeError(t("errors.roomPage.mustBeNumber"))
      .positive(t("errors.roomPage.mustBeGreater"))
      .required(t("errors.required")),
    children: Yup.number()
      .typeError(t("errors.roomPage.mustBeNumber"))
      .min(0, t("errors.roomPage.notNegative"))
      .nullable(),
  });

  const changeState = () => {
    if (
      reserve_start &&
      reserve_end &&
      adult &&
      people_count <= roomCapacity &&
      errorDate.length <= 0
    ) {
      setOpenPage(true);
    }
  };
  const bookedRanges =
    cart?.reserved_hotels
      ?.filter((r) => r.reserved_room._id === roomID)
      .map((r) => ({
        start: dayjs(r.reserve_start, "DD-MM-YYYY"),
        end: dayjs(r.reserve_end, "DD-MM-YYYY"),
      })) || [];
  return (
    <div className="RoomReservationSection">
      <div className="roomPriceCont">
        <hr className="roomPriceHr" />
        <div className="roomPriceDiv">
          <span className="roomPrice">{room?.room_price}$</span>
          <span className="forNightSpan">
            {t("roomPage.infoRoomReserve.forNight")}
          </span>
        </div>
      </div>
      <div className="reservDatesForm">
        <Formik
          initialValues={{
            reserve_start: reserve_start || "",
            reserve_end: reserve_end || "",
            adult: adult || "",
            children: children || "",
          }}
          validationSchema={validate}
          validateOnBlur
          validateOnChange
          onSubmit={() => {}}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            setFieldValue,
            setTouched,
            validateForm,
          }) => (
            <form onSubmit={handleSubmit} className="formReservation">
              <DatePicker
                reserve_start={reserve_start}
                reserve_end={reserve_end}
                errorDate={errorDate}
                setErrorDate={setErrorDate}
                errors={errors}
                touched={touched}
                bookedRanges={bookedRanges}
                mode={"reserve"}
                setReserveStart={(value) => {
                  setFieldValue("reserve_start", value);
                  setReserveStart(value);
                }}
                setReserveEnd={(value) => {
                  setFieldValue("reserve_end", value);
                  setReserveEnd(value);
                }}
              />
              <div className="adultInputDiv reservationInputDiv">
                <span className="inputNameReservation">
                  {t("roomPage.infoRoomReserve.adults")} *{" "}
                  {errors.adult && touched.adult && (
                    <span className="errorsReservation">{errors.adult}</span>
                  )}
                  <span className="errorsReservation">
                    {capacityData.error}
                  </span>
                </span>
                <input
                  type="number"
                  value={values.adult}
                  className="reservationInput"
                  min={0}
                  onChange={(e) => {
                    handleChange(e);
                    setAdult(e.target.value);
                  }}
                  onBlur={handleBlur}
                  name="adult"
                />
              </div>
              <div className="childrenInputDiv reservationInputDiv">
                <span className="inputNameReservation">
                  {t("roomPage.infoRoomReserve.children")}{" "}
                  {errors.children && touched.children && (
                    <span className="errorsReservation">
                      {errors.children}
                      {capacityData.error}
                    </span>
                  )}
                </span>
                <input
                  type="number"
                  className="reservationInput"
                  value={values.children}
                  min={0}
                  onChange={(e) => {
                    handleChange(e);
                    setChildren(e.target.value);
                  }}
                  onBlur={handleBlur}
                  name="children"
                />
              </div>
              <div className="totalPriceCont">
                <div className="totalPriceForDays">
                  <span className="nightsQuantity">
                    {t("roomPage.infoRoomReserve.night")} x {nights}
                  </span>
                  <span className="nightsTotalPrice">
                    {nights * room?.room_price}$
                  </span>
                </div>
                <div className="taxForDayDiv">
                  <span className="taxForDay">
                    {t("roomPage.infoRoomReserve.tax")} (20%)
                  </span>
                  <span className="taxForDayPrice">{tax}$</span>
                </div>
                <div className="totalPriceDiv">
                  <span className="totalPriceSpan">
                    {t("roomPage.infoRoomReserve.summery")}
                  </span>
                  <span className="total_spent">{total_spent}$</span>
                </div>
              </div>
              <button
                type="button"
                className="reservationBtn"
                onClick={async () => {
                  await setTouched({
                    reserve_start: true,
                    reserve_end: true,
                    adult: true,
                    children: true,
                  });
                  const formErrors = await validateForm();
                  if (
                    Object.keys(formErrors).length === 0 &&
                    people_count <= roomCapacity &&
                    errorDate.length === 0
                  ) {
                    changeState();
                  }
                }}
              >
                {t("roomPage.infoRoomReserve.reserveButton")}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RoomReservationSection;
