import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { signUpThunk } from "../../Redux/Slices/AuthSlice/authSliceThunk";
import LoadingButton from "../Loading/LoadingButton";
import "./signUp.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = ({ switchAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lang } = useParams();
  const { t } = useTranslation();
  const { signUpStatus } = useSelector((state) => state.authData);
  const [showPassword, setShowPassword] = useState(false);

  const validate = Yup.object().shape({
    firstName: Yup.string()
      .min(4, t("errors.short"))
      .max(15, t("errors.long"))
      .matches(/^[A-Z a-z0-9_]+$/, t("errors.invalidSymbol"))
      .required(t("errors.required")),

    lastName: Yup.string()
      .min(4, t("errors.short"))
      .max(15, t("errors.long"))
      .matches(/^[A-Z a-z0-9_]+$/, t("errors.invalidSymbol"))
      .required(t("errors.required")),

    email: Yup.string()
      .email(t("errors.invalidEmail"))
      .required(t("errors.required")),

    password: Yup.string()
      .min(6, t("errors.password"))
      .matches(
        /^(?=.*\d)(?=.*[@$!%*?&#^-_])[A-Za-z\d@$!%*?&#^-_]{6,}$/,
        t("errors.passwordMatches")
      )
      .required(t("errors.required")),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("errors.signUp.passwordMutch"))
      .required(t("errors.required")),
  });

  const signUpFunc = async (values) => {
    const { payload } = await dispatch(signUpThunk({ ...values }));
    if (payload.success === true) {
      navigate(`/${lang}/signIn`);
    }
  };

  return (
    <div className="SignUp">
      <div className="signUpDiv">
        <span className="signUpTitle">{t("signUpPage.buttonSignUp")}</span>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => signUpFunc(values)}
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
            <form onSubmit={handleSubmit} className="signUpForm">
              <div className="firstNameSignUp inpDiv">
                <span className="inputName">
                  {t("signUpPage.firstName")}{" "}
                  {errors.firstName && touched.firstName && (
                    <span className="errorsS">{errors.firstName}</span>
                  )}
                </span>
                <input
                  type="text"
                  className="inputSignUp firstNameInp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="firstName"
                  value={values.firstName}
                />
              </div>
              <div className="lastNameSignUp inpDiv">
                <span className="inputName">
                  {t("signUpPage.lastName")}{" "}
                  {errors.lastName && touched.lastName && (
                    <span className="errorsS">{errors.lastName}</span>
                  )}
                </span>
                <input
                  type="text"
                  className="inputSignUp lastNameInp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastName"
                  value={values.lastName}
                />
              </div>
              <div className="emailSignUp inpDiv">
                <span className="inputName">
                  {t("signUpPage.email")} *{" "}
                  {errors.email && touched.email && (
                    <span className="errorsS">{errors.email}</span>
                  )}
                </span>
                <input
                  type="email"
                  className="inputSignUp emailInp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  value={values.email}
                />
              </div>
              <div className="passwordSignUp inpDiv">
                <span className="inputName">
                  {t("signUpPage.password")}{" "}
                  {errors.password && touched.password && (
                    <span className="errorsS">{errors.password}</span>
                  )}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="inputSignUp passwordInp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  value={values.password}
                />
                <span className="eyeSpan">
                  {showPassword ? (
                    <FaRegEye onClick={() => setShowPassword(false)} />
                  ) : (
                    <FaRegEyeSlash onClick={() => setShowPassword(true)} />
                  )}
                </span>
              </div>
              <div className="repeatPasswordSignUp inpDiv">
                <span className="inputName">
                  {t("signUpPage.confirmPassword")}{" "}
                  {errors.confirmPassword && touched.confirmPassword && (
                    <span className="errorsS">{errors.confirmPassword}</span>
                  )}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="inputSignUp repeatPasswordInp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmPassword"
                  value={values.confirmPassword}
                />
              </div>
              <button id="signUpBtn" type="submit" disabled={!isValid}>
                {signUpStatus === "pending" ? (
                  <LoadingButton />
                ) : (
                  t("signUpPage.buttonSignUp")
                )}
              </button>
            </form>
          )}
        </Formik>
        <span className="haveAccountSpan">
          {t("signUpPage.haveAccountText.0")}{" "}
          <NavLink onClick={switchAuth} to={`/${lang}/signIn`}>
            {t("signUpPage.haveAccountText.1")}
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
