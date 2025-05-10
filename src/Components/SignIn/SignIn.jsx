import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import * as Yup from "yup";
import { signInThunk } from "../../Redux/Slices/AuthSlice/authSliceThunk";
import { setAuthToken } from "../../Utils/accountUtlis";
import LoadingButton from "../Loading/LoadingButton";
import "./signIn.css";

const SignIn = ({ switchAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signInStatus } = useSelector((state) => state.authData);
  const [isRemeber, setIsRemeber] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();
  const { lang } = useParams();

  const validate = Yup.object().shape({
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
  });

  const signInFunc = async (values) => {
    const { payload } = await dispatch(signInThunk({ ...values }));

    if (payload.access_token) {
      setAuthToken(payload.access_token, isRemeber);
      navigate(`/${lang}/`);
    }
  };

  return (
    <div className="SignIn">
      <div className="signInDiv">
        <span className="signInTitle">{t("signInPage.title")}</span>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => signInFunc(values)}
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
            <form onSubmit={handleSubmit} className="signInForm">
              <div className="emailSignIn inpDiv">
                <span className="inputName">
                  {t("signInPage.email")}{" "}
                  {errors.email && touched.email && (
                    <span className="errorsS">{errors.email}</span>
                  )}
                </span>
                <input
                  type="email"
                  className="inputSignIn emailInp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  value={values.email}
                  autoComplete="email"
                />
              </div>
              <div className="passwordSignIn inpDiv">
                <span className="inputName">
                  {t("signInPage.password")}{" "}
                  {errors.password && touched.password && (
                    <span className="errorsS">{errors.password}</span>
                  )}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="inputSignIn passwordInp"
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
              <div className="remember-signIn">
                <div className="remember">
                  <input
                    type="checkbox"
                    className="checkBoxRemember"
                    onChange={(e) => setIsRemeber(!isRemeber)}
                  />{" "}
                  <span>{t("signInPage.rememberMe")}</span>
                </div>
                <button id="signInBtn" type="submit" disabled={!isValid}>
                  {signInStatus === "pending" ? (
                    <LoadingButton />
                  ) : (
                    t("signInPage.buttonSignIn")
                  )}
                </button>
              </div>
              <span className="dontHaveAccountSpan">
                {t("signInPage.notAccount.0")}{" "}
                <NavLink onClick={switchAuth} to={`/${lang}/signUp`}>
                  {t("signInPage.notAccount.1")}
                </NavLink>
              </span>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
