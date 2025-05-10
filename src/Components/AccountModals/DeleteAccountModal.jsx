import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { deleteUserThunk } from "../../Redux/Slices/UserSlice/userSliceThunk";
import { removeAuthToken } from "../../Utils/accountUtlis";
import LoadingButton from "../Loading/LoadingButton";
import "./accountModals.css";

const DeleteAccountModal = ({ content, closeModal }) => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { deleteUserStatus } = useSelector((state) => state.userData);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setAnimate(true), 10);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const dispatch = useDispatch();

  const deleteAccount = async () => {
    await dispatch(deleteUserThunk({ user_id: content.user_id }));
    removeAuthToken();
    closeModal();
    navigate(`/${lang}/signUp`);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(closeModal, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("DeleteAccountModal")) {
      handleClose();
    }
  };

  return (
    <div
      className={`DeleteAccountModal modalAccount-content ${
        animate ? "fade-in" : "fade-out"
      } `}
      style={{ padding: "40px 0 20px" }}
      onClick={handleOverlayClick}
    >
      <div
        className={`modalAccount-container ${animate ? "zoom-in" : "zoom-out"}`}
      >
        <IoMdClose className="modalAccount-close" onClick={handleClose} />
        <div className="deleteAccountModalDiv">
          <div className="deleteAccountModal">
            <div className="goTrashDiv">
              <GoTrash />
            </div>
            <h2>{content.content}</h2>
            <div className="deleteAccountTextDiv">
              <div className="deleteAccountText">
                {t("accountPage.deleteAccount.text")}
                <h4>{content.email}?</h4>
              </div>

              <div className="checkBox-div">
                <input
                  type="checkbox"
                  className="checkDeleteAccount"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <span>{t("accountPage.deleteAccount.rangeText")}</span>
              </div>
              <div className="modalBtnsDiv">
                <button
                  onClick={() => deleteAccount()}
                  disabled={!isChecked}
                  className="deleteAccountBtn delBtn modalBtn"
                >
                  {deleteUserStatus === "pending" ? (
                    <LoadingButton />
                  ) : (
                    t("accountPage.delete")
                  )}
                </button>
                <button
                  className="deleteAccountBtnNo delBtn modalBtn"
                  onClick={handleClose}
                >
                  {t("accountPage.cencel")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
