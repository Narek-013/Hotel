import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RemoveReserveModal from "../CartModals/RemoveReserveModal";
import EditReserveModal from "../CartModals/EditReserveModal";
import "./cartItem.css";

const CartItem = ({ item, activeClass }) => {
  const { t } = useTranslation();
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 551);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 551);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  dayjs.extend(customParseFormat);

  const reserve_start = item?.reserve_start;
  const reserve_end = item?.reserve_end;
  const nights =
    reserve_start && reserve_end
      ? dayjs(reserve_end, "DD-MM-YYYY", true).diff(
          dayjs(reserve_start, "DD-MM-YYYY", true),
          "day"
        )
      : 0;

  const totalWithoutTax = nights * (item?.reserved_room?.room_price || 0);
  const tax = (totalWithoutTax * 20) / 100;

  return (
    <div className={activeClass === "active" ? "CartItem" : "CartHistoryItem"}>
      <div className="cartItemDiv">
        {isMobile ? (
          <>
            <div
              className="cartItemMobileHeader"
              onClick={() => setShowDetails(!showDetails)}
            >
              <img
                className="cartItemImg"
                src={item?.reserved_room?.room_images?.[0]}
                alt="Room Image"
              />
              <div className="cartItemMobileTitleRow">
                <h2 className="cartItemTitle">{item?.hotel?.name}</h2>
                <div className="cartItemToggle">
                  <span className="toggleText">
                    {showDetails
                      ? t("reservationPage.seeClose.1")
                      : t("reservationPage.seeClose.0")}
                  </span>
                  {showDetails ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>
            </div>
            {showDetails && (
              <div className="cartItemMobileDetails">
                <div className="cartItemInfos">
                  <div className="cartItemInfoName">
                    <span className="cartItemInfoSpan">Սենյակի տեսակ:</span>
                    <span className="cartItemInfo">
                      {item?.reserved_room?.room_type}
                    </span>
                  </div>
                  <div className="cartItemInfoName">
                    <span className="cartItemInfoSpan">Ամրագրում:</span>
                    <span className="cartItemInfo">
                      {item?.reserve_start} - {item?.reserve_end}
                    </span>
                  </div>
                  <div className="cartItemInfoName">
                    <span className="cartItemInfoSpan">Գիշերներ:</span>
                    <span className="cartItemInfo">{nights}</span>
                  </div>
                  <div className="cartItemInfoName">
                    <span className="cartItemInfoSpan">Հյուրը:</span>
                    <span className="cartItemInfo">{item?.people_count}</span>
                  </div>
                </div>

                <div className="cartItemSummery">
                  <div className="cartItemTrashDiv">
                    {activeClass === "active" ? (
                      <div>
                        <FaRegEdit
                          onClick={() => setOpenEditModal(true)}
                          className="cartItemEdit cartItemIcon"
                        />
                        <FaRegTrashAlt
                          className="cartItemTrash cartItemIcon"
                          onClick={() => setOpenRemoveModal(true)}
                        />
                      </div>
                    ) : (
                      <FaRegTrashAlt
                        className="cartHistoryItemTrash cartItemIcon"
                        onClick={() => setOpenRemoveModal(true)}
                      />
                    )}
                  </div>
                  <div className="cartItemWithoutTax">
                    <span>{t("reservationPage.cartItem.withoutTax")}</span>
                    <span>{totalWithoutTax}$</span>
                  </div>
                  <div className="cartItemWithTax">
                    <span>{t("reservationPage.cartItem.tax")}</span>
                    <span>{tax}$</span>
                  </div>
                  <hr className="cartItemSumHr" />
                  <div className="cartItemGenSum">
                    <span>{t("reservationPage.cartItem.summary")}</span>
                    <span>{item.total_spent}$</span>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <img
              className="cartItemImg"
              src={item?.reserved_room?.room_images?.[0]}
            />
            <div className="cartItemInfoDiv">
              <h2 className="cartItemTitle">{item?.hotel?.name}</h2>
              <div className="cartItemInfos">
                <div className="cartItemInfoName">
                  <span className="cartItemInfoSpan">
                    {t("reservationPage.cartItem.roomType")}:
                  </span>
                  <span className="cartItemInfo">
                    {item?.reserved_room?.room_type}
                  </span>
                </div>
                <div className="cartItemInfoName">
                  <span className="cartItemInfoSpan">
                    {t("reservationPage.cartItem.date")}:
                  </span>
                  <span className="cartItemInfo">
                    {item?.reserve_start} - {item?.reserve_end}
                  </span>
                </div>
                <div className="cartItemInfoName">
                  <span className="cartItemInfoSpan">
                    {t("reservationPage.cartItem.nights")}:
                  </span>
                  <span className="cartItemInfo">{nights}</span>
                </div>
                <div className="cartItemInfoName">
                  <span className="cartItemInfoSpan">
                    {t("reservationPage.cartItem.guests")}:
                  </span>
                  <span className="cartItemInfo">{item?.people_count}</span>
                </div>
              </div>
            </div>
            <div className="cartItemSummery">
              <div className="cartItemTrashDiv">
                {activeClass === "active" ? (
                  <div>
                    <FaRegEdit
                      onClick={() => setOpenEditModal(true)}
                      className="cartItemEdit cartItemIcon"
                    />
                    <FaRegTrashAlt
                      className="cartItemTrash cartItemIcon"
                      onClick={() => setOpenRemoveModal(true)}
                    />
                  </div>
                ) : (
                  <FaRegTrashAlt
                    className="cartHistoryItemTrash cartItemIcon"
                    onClick={() => setOpenRemoveModal(true)}
                  />
                )}
              </div>
              <div className="cartItemWithoutTax">
                <span>{t("reservationPage.cartItem.withoutTax")}</span>
                <span>{totalWithoutTax}$</span>
              </div>
              <div className="cartItemWithTax">
                <span>{t("reservationPage.cartItem.tax")}</span>
                <span>{tax}$</span>
              </div>
              <hr className="cartItemSumHr" />
              <div className="cartItemGenSum">
                <span>{t("reservationPage.cartItem.summary")}</span>
                <span>{item.total_spent}$</span>
              </div>
            </div>
          </>
        )}
      </div>

      {openRemoveModal && (
        <RemoveReserveModal
          content={{ content: activeClass, reserve_id: item._id }}
          closeModal={() => setOpenRemoveModal(false)}
        />
      )}
      {openEditModal && (
        <EditReserveModal
          content={item}
          closeModal={() => setOpenEditModal(false)}
        />
      )}
    </div>
  );
};

export default CartItem;
