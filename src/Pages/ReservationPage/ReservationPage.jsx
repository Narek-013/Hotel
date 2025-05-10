import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { requireAuth } from "../../HOC/requireAuth_NotAuth";
import {
  getCartHistorySliceThunk,
  getCartSliceThunk,
} from "../../Redux/Slices/CartSlice/cartSliceThunk";
import Cart from "../../Components/Cart/Cart";
import CartHistory from "../../Components/Cart/CartHistory";
import Loading from "../../Components/Loading/Loading";
import { getUserData } from "../../Redux/Slices/UserSlice/userSliceThunk";
import "./reservationPage.css";

const ReservationPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.userData);
  const { loadingStatus } = useSelector((state) => state.cartData);
  const [activeClass, setActiveClass] = useState("active");
  const [clearModal, setClearModal] = useState(false);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (!user || !user._id) return;

    if (activeClass === "active") {
      dispatch(getCartSliceThunk(user._id));
    } else if (activeClass === "past") {
      dispatch(getCartHistorySliceThunk(user._id));
    }
  }, [user?._id, activeClass, dispatch]);

  return (
    <div className="ReservationPage">
      {loadingStatus === "pending" ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="reservationPageDiv">
            <div className="reservationPageNav">
              <button
                className={`reservationPageBtn ${
                  activeClass === "active" ? "activeReservBtn" : ""
                }`}
                onClick={() => setActiveClass("active")}
              >
                {t("reservationPage.nav.0")}
              </button>
              <button
                className={`reservationPageBtn ${
                  activeClass === "past" ? "activeReservBtn" : ""
                }`}
                onClick={() => setActiveClass("past")}
              >
                {t("reservationPage.nav.1")}
              </button>
            </div>
            <div className="cartContainer">
              {activeClass === "active" ? (
                <Cart
                  activeClass={activeClass}
                  clearModal={clearModal}
                  setClearModal={setClearModal}
                />
              ) : (
                <CartHistory
                  activeClass={activeClass}
                  clearModal={clearModal}
                  setClearModal={setClearModal}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default requireAuth(ReservationPage);
