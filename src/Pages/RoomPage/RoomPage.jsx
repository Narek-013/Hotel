import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getSingleRoomThunk } from "../../Redux/Slices/HotelsListSlice/hotelsListSliceThunk";
import { getAccessToken } from "../../Utils/accountUtlis";
import RoomFacilities from "../../Components/RoomFacilities/RoomFacilities";
import Reservation from "../../Components/Reservation/Reservation";
import RoomImgModal from "../../Components/RoomImgModal/RoomImgModal";
import RoomReservationSection from "../../Components/RoomReservationSection/RoomReservationSection";
import Loading from "../../Components/Loading/Loading";
import SliderHotel from "../../Components/SliderHotel/SliderHotel";
import "./roomPage.css";

const RoomPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { roomID } = useParams();
  const { maxWidth } = useSelector((state) => state.width);
  const { room, loadingStatus } = useSelector((state) => state.hotels);
  const [imgModal, setImgModal] = useState(false);
  const [activeImg, setActiveImg] = useState(null);
  const [reserve_start, setReserveStart] = useState("");
  const [reserve_end, setReserveEnd] = useState("");
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const [people_count, setPeopleCount] = useState();
  const [errorDate, setErrorDate] = useState("");
  const [openPage, setOpenPage] = useState(false);
  const [nights, setNights] = useState(0);
  const [totalWithoutTax, setTotalWithoutTax] = useState(0);
  const [tax, setTax] = useState(0);
  const [total_spent, setTotalSpent] = useState(0);
  
  useEffect(() => {
    dispatch(getSingleRoomThunk({ roomID }));
  }, [roomID]);

  useEffect(() => {
    if (room?.room_images?.length > 0) {
      setActiveImg(room.room_images[0]);
    }
  }, [room]);

  useEffect(() => {
    if (reserve_start && reserve_end) {
      const calculatedNights = dayjs(reserve_end, "DD-MM-YYYY").diff(
        dayjs(reserve_start, "DD-MM-YYYY"),
        "day"
      );
      setNights(calculatedNights);

      const total = calculatedNights * (room?.room_price || 0);
      setTotalWithoutTax(total);

      const taxAmount = (total * 20) / 100;
      setTax(taxAmount);

      setTotalSpent(total + taxAmount);
    } else {
      setNights(0);
      setTotalWithoutTax(0);
      setTax(0);
      setTotalSpent(0);
    }
  }, [reserve_start, reserve_end, room?.room_price]);
  const token = getAccessToken();

  return (
    <div className="RoomPage">
      {" "}
      <div className="container">
        {loadingStatus === "pending" ? (
          <Loading />
        ) : openPage ? (
          <Reservation
            states={{
              reserve_start,
              reserve_end,
              people_count,
              nights,
              totalWithoutTax,
              tax,
              setOpenPage,
              total_spent,
            }}
          />
        ) : (
          <div className="roomPageDiv">
            <div className="roomPageTopDiv">
              <FaArrowLeftLong
                className="arrowBack"
                onClick={() => navigate(-1)}
              />
              <h1 className="roomNameH">{room.room_type}</h1>
            </div>
            <div className="roomComps">
              <div className="imgsReservation">
                <div className="roomImgsDiv">
                  {maxWidth < 551 ? (
                    <SliderHotel sliderContent={room?.room_images} />
                  ) : (
                    <div className="roomImgs_div">
                      <img
                        className="roomMainImg"
                        onClick={() => setImgModal(true)}
                        src={activeImg}
                        alt="Room Image"
                      />
                      <div className="roomImgs">
                        {room?.room_images?.map((el, i) => (
                          <img
                            className="room_img"
                            onClick={() => setActiveImg(el)}
                            key={i}
                            src={el}
                            alt={`Room Image ${i}`}
                            style={{
                              border:
                                el === activeImg
                                  ? "2px solid #e1e6cf"
                                  : "1px solid grey",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="roomReservDiv">
                  {token ? (
                    <RoomReservationSection
                      reservationData={{
                        room,
                        reserve_start,
                        reserve_end,
                        adult,
                        children,
                        errorDate,
                        nights,
                        tax,
                        total_spent,
                        setReserveStart,
                        setReserveEnd,
                        setAdult,
                        setChildren,
                        setPeopleCount,
                        setOpenPage,
                        setErrorDate,
                      }}
                    />
                  ) : (
                    <div className="logInForReserve">
                      <div className="logInForReserveDiv">
                        <p className="logInForReserveP">
                          {t("roomPage.infoRoomReserve.forReserveText")}
                        </p>
                        <button
                          className="logInForReserveBtn"
                          onClick={() => navigate("/signIn")}
                        >
                          {t("roomPage.infoRoomReserve.logIn")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="roomInfoDiv">
                <div className="roomParametersDiv">
                  <div className="roomParameters roomInfosName">
                    <span className="parametersSpan roomInfoSpans">
                      {t("roomPage.infoRoom.parameters.title")} :
                    </span>
                    <div className="allParameters">
                      <span className="roomCapacity">
                        {t("roomPage.infoRoom.parameters.capacity")} :{" "}
                        {room.capacity}
                      </span>
                      <span className="beds">
                        {t("roomPage.infoRoom.parameters.beds")} : {room.beds}
                      </span>
                      <span className="squareRoom">
                        {t("roomPage.infoRoom.parameters.area")} : {room.area}
                        {t("roomPage.infoRoom.parameters.areaUnit")}
                      </span>
                    </div>
                  </div>
                  <hr className="parametersHr" />
                </div>
                <div className="aboutRoomDiv">
                  <div className="aboutRoom roomInfosName">
                    <span className="aboutRoomSpan roomInfoSpans">
                      {t("roomPage.infoRoom.aboutRoom")} :
                    </span>
                    <p className="aboutRoomP">{room.about}</p>
                  </div>
                  <hr className="aboutRoomHr" />
                </div>
                <div className="roomAmenities">
                  <div className="roomFacilities roomInfosName">
                    <span className="amenitiesSpan roomInfoSpans">
                      {t("roomPage.infoRoom.amenities")} :
                    </span>
                    <div className="amenetiesIconsDiv">
                      {room?.facilities?.length > 0 &&
                        room.facilities.map((fac) => (
                          <RoomFacilities fac={fac} key={fac._id} />
                        ))}
                    </div>
                  </div>
                  <hr className="aboutRoomHr" />
                </div>
              </div>
            </div>
          </div>
        )}
        {imgModal && (
          <RoomImgModal
            activeImg={activeImg}
            closeModal={() => setImgModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default RoomPage;
