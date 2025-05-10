import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CartItem from "./CartItem/CartItem";
import RemoveAll from "./CartModals/RemoveAll";

const CartHistory = ({ activeClass, clearModal, setClearModal }) => {
  const { cartHistory } = useSelector((state) => state.cartData);
  const { t } = useTranslation();

  return (
    <div className="CartHistory">
      {cartHistory?.reserved_hotels?.length > 0 ? (
        <div className="cartDiv">
          <div className="clearCartBtnDiv">
            <h1>
              {t("reservationPage.cart.pastText")}
              {` (${cartHistory?.reserved_hotels.length})`}
            </h1>
            <button
              className="clearHistoryBtn"
              onClick={() => setClearModal(true)}
            >
              {t("reservationPage.cart.clearAllBtns.1")}
            </button>
          </div>
          <div className="cartItemsDiv">
            {cartHistory?.reserved_hotels?.map((item) => (
              <CartItem key={item._id} item={item} activeClass={activeClass} />
            ))}
          </div>
        </div>
      ) : (
        <p className="noCartP">{t("reservationPage.cart.cartHistoryEmpty")}</p>
      )}
      {clearModal && (
        <RemoveAll
          content={{ content: "history", history_id: cartHistory._id }}
          closeModal={() => setClearModal(false)}
        />
      )}
    </div>
  );
};

export default CartHistory;
