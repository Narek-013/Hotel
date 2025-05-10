import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";
import RemoveAll from "./CartModals/RemoveAll";
import "./cart.css";

const Cart = ({ activeClass, clearModal, setClearModal }) => {
  const { cart } = useSelector((state) => state.cartData);
  const { t } = useTranslation();

  return (
    <div className="Cart">
      {cart?.reserved_hotels?.length > 0 ? (
        <div className="cartDiv">
          <div className="clearCartBtnDiv">
            <h1>
              {t("reservationPage.cart.activeText")}
              {` (${cart?.reserved_hotels.length})`}
            </h1>

            <button
              className="clearCartBtn"
              onClick={() => setClearModal(true)}
            >
              {t("reservationPage.cart.clearAllBtns.0")}
            </button>
          </div>
          <div className="cartItemsDiv">
            {cart?.reserved_hotels?.map((item) => (
              <CartItem key={item._id} item={item} activeClass={activeClass} />
            ))}
          </div>
        </div>
      ) : (
        <p className="noCartP">{t("reservationPage.cart.cartEmpty")}</p>
      )}
      {clearModal && (
        <RemoveAll
          content={{ content: "cart", cart_id: cart._id }}
          closeModal={() => setClearModal(false)}
        />
      )}
    </div>
  );
};

export default Cart;
