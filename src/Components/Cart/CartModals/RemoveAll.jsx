import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  clearCartSliceThunk,
  clearHistorySliceThunk,
} from "../../../Redux/Slices/CartSlice/cartSliceThunk";
import {
  clearAllCart,
  clearAllHistory,
} from "../../../Redux/Slices/CartSlice/cartSlice";
import { IoMdClose } from "react-icons/io";
import LoadingButton from "../../Loading/LoadingButton";
import "./cartModals.css";

const RemoveAll = ({ content, closeModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { clearCartStatus, clearHistoryStatus } = useSelector(
    (state) => state.authData
  );

  const [animate, setAnimate] = useState(false);

  const handleDelete = async () => {
    if (content.content === "cart") {
      await dispatch(clearCartSliceThunk(content.cart_id));
      await dispatch(clearAllCart());
    } else {
      await dispatch(clearHistorySliceThunk(content.history_id));
      await dispatch(clearAllHistory());
    }
    closeModal();
  };
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
        className={`cartModal-container ${animate ? "zoom-in" : "zoom-out"}`}
      >
        <IoMdClose className="modalCart-close" onClick={handleClose} />
        <h3 className="removeReserveH3">
          {content.content === "history"
            ? t("reservationPage.removeAllModal.pastTitle")
            : t("reservationPage.removeAllModal.activeTitle")}
        </h3>
        <p className="removeReserveP">
          {t("reservationPage.removeAllModal.text")}
        </p>
        <div className="removeReserveBtnsDiv">
          <button
            onClick={handleDelete}
            className="removeReserveBtn deleteReserveBtn removeModalBtn"
          >
            {clearHistoryStatus === "pending" ||
            clearCartStatus === "pending" ? (
              <LoadingButton />
            ) : (
              t("reservationPage.modalBtns.0")
            )}
          </button>
          <button
            onClick={closeModal}
            className="removeReserveBtn cancelRemoveBtn removeModalBtn"
          >
            {t("reservationPage.modalBtns.1")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveAll;
