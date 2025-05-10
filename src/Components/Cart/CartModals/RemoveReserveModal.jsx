import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  removeHistoryItemSliceThunk,
  removeReserveSliceThunk,
} from "../../../Redux/Slices/CartSlice/cartSliceThunk";
import {
  removeHistoryItem,
  removeReserveItem,
} from "../../../Redux/Slices/CartSlice/cartSlice";
import { IoMdClose } from "react-icons/io";
import LoadingButton from "../../Loading/LoadingButton";
import "./cartModals.css";

const RemoveReserveModal = ({ content, closeModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const { removeHistoryItemStatus, removeReserveStatus } = useSelector(
    (state) => state.cartData
  );

  const handleDelete = async () => {
    if (content.content === "active") {
      await dispatch(removeReserveSliceThunk(content.reserve_id));
      await dispatch(removeReserveItem(content.reserve_id));
    } else {
      await dispatch(removeHistoryItemSliceThunk(content.reserve_id));
      await dispatch(removeHistoryItem(content.reserve_id));
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
          {content.content === "active"
            ? t("reservationPage.removeItemModal.activeTitle")
            : t("reservationPage.removeItemModal.pastTitle")}
        </h3>
        <p className="removeReserveP">
          {t("reservationPage.removeItemModal.text")}
        </p>
        <div className="removeReserveBtnsDiv">
          <button
            onClick={handleDelete}
            className="removeReserveBtn deleteReserveBtn removeModalBtn"
          >
            {removeHistoryItemStatus === "pending" ||
            removeReserveStatus === "pending" ? (
              <LoadingButton />
            ) : (
              t("reservationPage.modalBtns.0")
            )}
          </button>
          <button
            onClick={handleClose}
            className="removeReserveBtn cancelRemoveBtn removeModalBtn"
          >
            {t("reservationPage.modalBtns.1")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveReserveModal;
