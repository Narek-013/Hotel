import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { signOutThunk } from "../../Redux/Slices/AuthSlice/authSliceThunk";
import { IoMdClose } from "react-icons/io";
import LoadingButton from "../Loading/LoadingButton";
import "./accountModals.css";

const LogOutModal = ({ content, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useParams();
  const [animate, setAnimate] = useState(false);
  const { signOutStatus } = useSelector((state) => state.authData);
  const { user } = useSelector((state) => state.userData);

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

  const logOut = async () => {
    await dispatch(signOutThunk(user._id));
    navigate(`/${lang}/signIn`);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("LogOutModal")) {
      handleClose();
    }
  };

  return (
    <div
      className={`LogOutModal modalAccount-content ${
        animate ? "fade-in" : "fade-out"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modalAccount-container ${animate ? "zoom-in" : "zoom-out"}`}
      >
        <IoMdClose className="modalAccount-close" onClick={handleClose} />
        <h1 className="logOutH">{content.content}</h1>
        <div className="logOutModalDiv">
          <p>
            {t("accountPage.logOut.logOutText")}{" "}
            <span className="logOutPSpan"> {content.email}</span>?
          </p>
          <div className="logOutBtns modalBtnsDiv">
            <button className="logOutBtn outBtn modalBtn" onClick={logOut}>
              {signOutStatus === "pending" ? (
                <LoadingButton />
              ) : (
                t("accountPage.logOut.logOut")
              )}
            </button>
            <button
              className="logOutCencelBtn outBtn modalBtn"
              onClick={handleClose}
            >
              {t("accountPage.cencel")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
