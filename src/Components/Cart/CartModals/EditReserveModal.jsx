import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { IoMdClose } from "react-icons/io";
import { changeReservedRoomThunk } from "../../../Redux/Slices/ReservRoomSlice/reserveRoomSliceThunk";
import DatePicker from "../../DatePickerr/DatePickerr";
import LoadingButton from "../../Loading/LoadingButton";
import "./cartModals.css";

const EditReserveModal = ({ content, closeModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const { changeReserveStatus } = useSelector((state) => state.reserveData);
  const [errorDate, setErrorDate] = useState("");
  const { cart } = useSelector((state) => state.cartData);
  const roomCapacity = content?.reserved_room?.capacity || 0;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setAnimate(true), 10);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(closeModal, 300);
  };

  const validate = Yup.object().shape({
    reserve_start: Yup.string().required(t("errors.required")),
    reserve_end: Yup.string().required(t("errors.required")),
    adult: Yup.number()
      .typeError(t("errors.roomPage.mustBeNumber"))
      .required(t("errors.required"))
      .min(1, t("errors.roomPage.mustBeGreater"))
      .test(
        "max-total-capacity",
        `${roomCapacity} ${t("errors.roomPage.capacityMax")}`,
        function (value) {
          const { children } = this.parent;
          const total = (value || 0) + (children || 0);
          return total <= roomCapacity;
        }
      ),
    children: Yup.number()
      .typeError(t("errors.roomPage.mustBeNumber"))
      .min(0, t("errors.roomPage.notNegative"))
      .nullable(),
  });

  const changeReserve = async (values) => {
    const peopleCount =
      parseInt(values.adult || 0) + parseInt(values.children || 0);
    if (peopleCount > 0) {
      await dispatch(
        changeReservedRoomThunk({
          reserveID: content?._id,
          updatedReservedData: {
            reserve_start: values.reserve_start,
            reserve_end: values.reserve_end,
            firstName: content?.firstName,
            lastName: content?.lastName,
            description: content?.description,
            email: content?.email,
            country: content?.country,
            phone: content?.phone,
            people_count: peopleCount,
          },
        })
      );
    }
  };

  const bookedRanges =
    cart?.reserved_hotels
      ?.filter(
        (r) =>
          r.reserved_room._id === content?.reserved_room?._id &&
          r._id !== content?._id
      )
      .map((r) => ({
        start: dayjs(r.reserve_start, "DD-MM-YYYY"),
        end: dayjs(r.reserve_end, "DD-MM-YYYY"),
      })) || [];
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("cartModal-content")) {
      handleClose();
    }
  };

  return (
    <div
      className={`cartModal-content ${animate ? "fade-in" : "fade-out"}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`cartModal-container cartModalEdit ${
          animate ? "zoom-in" : "zoom-out"
        }`}
      >
        <h2 className="modal-title">{t("reservationPage.editModal.title")}</h2>
        <IoMdClose
          className="modalCart-close editClose"
          onClick={handleClose}
        />
        <div className="editReserveFormDiv">
          <Formik
            initialValues={{
              reserve_start: "",
              reserve_end: "",
              adult: "",
              children: "",
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
              setFieldTouched,
            }) => (
              <form onSubmit={handleSubmit} className="editReserveForm">
                <div className="editReserveDiv">
                  <DatePicker
                    reserve_start={values.reserve_start}
                    reserve_end={values.reserve_end}
                    errorDate={errorDate}
                    setErrorDate={setErrorDate}
                    errors={errors}
                    touched={touched}
                    bookedRanges={bookedRanges}
                    mode={"edit"}
                    setReserveStart={(value) => {
                      setFieldTouched("reserve_start", true);
                      setFieldValue("reserve_start", value);
                    }}
                    setReserveEnd={(value) => {
                      setFieldTouched("reserve_end", true);
                      setFieldValue("reserve_end", value);
                    }}
                  />
                  <div className="editFormInputs">
                    <div className="editAdultInputDiv editInputs">
                      <span className="inputNameEdit">
                        {t("roomPage.infoRoomReserve.adults")} *{" "}
                      </span>
                      <input
                        type="number"
                        value={values.adult}
                        className="editInput"
                        min={1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="adult"
                      />
                      {errors.adult && touched.adult && (
                        <span className="errorsEdit">{errors.adult}</span>
                      )}
                    </div>
                    <div className="editChildrenInputDiv editInputs">
                      <span className="inputNameEdit">
                        {t("roomPage.infoRoomReserve.children")}{" "}
                      </span>
                      <input
                        type="number"
                        className="editInput"
                        value={values.children}
                        min={0}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="children"
                      />
                      {errors.children && touched.children && (
                        <span className="errorsEdit">{errors.children}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="editBtns">
                  <button
                    className="editBtn editReserveBtn"
                    type="button"
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
                        errorDate.length === 0
                      ) {
                        changeReserve(values);
                      }
                    }}
                  >
                    {changeReserveStatus === "pending" ? (
                      <LoadingButton />
                    ) : (
                      t("reservationPage.editModal.btns.0")
                    )}
                  </button>
                  <button
                    className="editBtn cancelEditReserveBtn"
                    type="button"
                    onClick={handleClose}
                  >
                    {t("reservationPage.editModal.btns.1")}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditReserveModal;
