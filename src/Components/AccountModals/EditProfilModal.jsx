import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { IoMdClose } from "react-icons/io";
import { changeUserDatasThunk } from "../../Redux/Slices/UserSlice/userSliceThunk";
import LoadingButton from "../Loading/LoadingButton";
import "./accountModals.css";

const EditProfilModal = ({ content, closeModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  const { user, changeUserStatus } = useSelector((state) => state.userData);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, t("errors.short"))
      .max(20, t("errors.long"))
      .matches(/^[A-Z a-z]+$/, t("errors.invalidSymbol"))
      .required(t("errors.required")),

    lastName: Yup.string()
      .min(2, t("errors.short"))
      .max(20, t("errors.long"))
      .matches(/^[A-Z a-z]+$/, t("errors."))
      .required(t("errors.required")),

    email: Yup.string()
      .email(t("errors.invalidEmail"))
      .required(t("errors.required")),

    password: Yup.string()
      .min(6, t("errors.short"))
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#^-_])[A-Za-z\d@$!%*?&#^-_]{6,}$/,
        t("errors.invalidSymbol")
      ),
  });

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

  const handleUpdateProfile = async (values) => {
    await dispatch(
      changeUserDatasThunk({ userId: user._id, updatedUserData: { ...values } })
    );

    closeModal();
    window.location.reload();
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("EditProfilModal")) {
      handleClose();
    }
  };

  return (
    <div
      className={`EditProfilModal modalAccount-content ${
        animate ? "fade-in" : "fade-out"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modalAccount-container ${animate ? "zoom-in" : "zoom-out"}`}
      >
        <IoMdClose className="modalAccount-close" onClick={handleClose} />
        <h1>{content.content}</h1>
        <div className="editProfileInputsDiv">
          <Formik
            initialValues={{
              firstName: user?.firstName || "",
              lastName: user?.lastName || "",
              email: user?.email || "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleUpdateProfile}
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
              <form onSubmit={handleSubmit} className="editProfileForm">
                <div className="inputGroup">
                  <span className="inputGroup-name">
                    {t("accountPage.editProfile.firstName")}{" "}
                  </span>
                  {errors.firstName && touched.firstName && (
                    <span className="updatedError">{errors.firstName}</span>
                  )}
                  <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="inputGroup">
                  <span className="inputGroup-name">
                    {t("accountPage.editProfile.lastName")}{" "}
                  </span>
                  {errors.lastName && touched.lastName && (
                    <span className="updatedError">{errors.lastName}</span>
                  )}
                  <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="inputGroup">
                  <span className="inputGroup-name">
                    {t("accountPage.editProfile.email")}{" "}
                  </span>
                  {errors.email && touched.email && (
                    <span className="updatedError">{errors.email}</span>
                  )}
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="inputGroup">
                  <span className="inputGroup-name">
                    {t("accountPage.editProfile.password")}{" "}
                  </span>
                  {errors.password && touched.password && (
                    <span className="updatedError">{errors.password}</span>
                  )}
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder={t(
                      "accountPage.editProfile.passwordPlaceholder"
                    )}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="editBtnsDiv">
                  <button
                    type="submit"
                    className="saveChangesBtn"
                    disabled={!isValid}
                  >
                    {changeUserStatus === "pending" ? (
                      <LoadingButton />
                    ) : (
                      t("accountPage.save")
                    )}
                  </button>
                  <button
                    className="cancelChangesBtn"
                    type="button"
                    onClick={handleClose}
                  >
                    {t("accountPage.cencel")}
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

export default EditProfilModal;
