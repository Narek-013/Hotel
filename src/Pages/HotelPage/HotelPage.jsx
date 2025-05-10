import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getWeatherThunk } from "../../Redux/Slices/WeatherSlice/getWeatherSliceThunk";
import { getSingleHotelThunk } from "../../Redux/Slices/HotelsListSlice/hotelsListSliceThunk";
import SliderHotel from "../../Components/SliderHotel/SliderHotel";
import SingleRoom from "../../Components/SingleRoom/SingleRoom";
import Loading from "../../Components/Loading/Loading";
import "./hotelPage.css";

const HotelPage = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();
  const { lang } = useParams();
  const [hotel, setHotel] = useState({});
  const [weather, setWeather] = useState([]);
  const { weatherList } = useSelector((state) => state.weather);

  const language = localStorage.getItem("lang") || "am";

  const hotelInfo = [
    { label: t("hotelPage.hotelInfo.0"), value: hotel.country },
    { label: t("hotelPage.hotelInfo.1"), value: hotel?.city?.[language] || "" },
    { label: t("hotelPage.hotelInfo.2"), value: hotel.address },
    { label: t("hotelPage.hotelInfo.3"), value: hotel.number },
  ];

  const currentTemp = weatherList?.list?.[0]?.main?.temp || "N/A";
  const weatherIcon = weatherList?.list?.[0]?.weather?.[0]?.icon;

  useEffect(() => {
    const getHotel = async () => {
      const data = await dispatch(getSingleHotelThunk({ id }));
      setHotel(data.payload);
    };
    getHotel();
  }, [id, dispatch]);

  useEffect(() => {
    if (hotel.city && hotel.city.en) {
      dispatch(getWeatherThunk(hotel.city.en));
    }
  }, [hotel]);

  return (
    <div className="HotelPage">
      {Object.keys(hotel).length === 0 ? (
        <Loading />
      ) : (
        <div className="hotelPageDiv">
          <div className="hotelNameDiv hotelBox">
            <div className="container">
              <div className="hotelTopDiv">
                <FaArrowLeftLong
                  className="arrowBack"
                  onClick={() => navigate(-1)}
                />
                <h1 className="hotelNameH">{hotel.name}</h1>
              </div>
            </div>
          </div>
          <SliderHotel sliderContent={hotel?.images} />
          <div className="container">
            <div className="hotelPageBox">
              <div className="hotelInfo_weather">
                <div className="hotelInfo">
                  {hotelInfo.map((info, i) => (
                    <div className="hotelInfoNameDiv" key={i}>
                      <span className="hotelInfoNameSpan">{info.label}</span>
                      <span className="hotelInfoEndPoint">:</span>
                      <span className="hotelInfoSpan">{info.value}</span>
                    </div>
                  ))}
                </div>
                <div className="hotelWeather">
                  {weather && (
                    <div className="currentWeather">
                      <img
                        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                        alt="weather icon"
                      />
                      <h2>{(currentTemp - 273.15).toFixed(0)}°C</h2>
                    </div>
                  )}
                  <button
                    className="seeWeather"
                    onClick={() => navigate(`/${lang}/weather`)}
                  >
                    {t("hotelPage.weatherButton")}
                  </button>
                </div>
              </div>
              <div className="hotelRooms">
                {hotel?.hotel_rooms?.map((room) => (
                  <SingleRoom room={room} key={room._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelPage;
