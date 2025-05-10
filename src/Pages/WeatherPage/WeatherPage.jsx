import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getWeatherThunk } from "../../Redux/Slices/WeatherSlice/getWeatherSliceThunk";
import "./weatherPage.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const WeatherPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { weatherList } = useSelector((state) => state.weather);

  const cityName = weatherList?.city?.name || "Unknown";
  const currentTemp = weatherList?.list?.[0]?.main?.temp || "N/A";
  const weatherIcon = weatherList?.list?.[0]?.weather?.[0]?.icon;
  const fiveDayForecast = weatherList?.list?.filter(
    (_, index) => index % 8 === 0
  );

  const [selectedDay, setSelectedDay] = useState(null);

  const [unit, setUnit] = useState("C");

  useEffect(() => {
    dispatch(getWeatherThunk(cityName));
  }, [dispatch]);

  const hourlyForecast = selectedDay
    ? weatherList?.list?.filter(
        (item) =>
          new Date(item.dt_txt).toDateString() ===
          new Date(selectedDay.dt_txt).toDateString()
      )
    : weatherList?.list?.slice(0, 8);

  return (
    <div className="WeatherPage">
      <div className="container">
        <div
          className="weatherPageDiv"
        >
          <h1 className="city-name">{cityName}</h1>
          <div className="weatherNavDiv">
            <div className="weatherBackDiv">
              <FaArrowLeftLong onClick={() => navigate(-1)} />
              <span>{t("weatherPage.back")}</span>
            </div>
            <div className="c-f">
              <div className="cDiv">
                <input
                  type="radio"
                  name="radio"
                  onChange={(event) => setUnit(event.target.value)}
                  value="C"
                  checked={unit === "C"}
                />
                <span>°C</span>
              </div>
              <hr />
              <div className="fDiv">
                <input
                  type="radio"
                  name="radio"
                  onChange={(event) => setUnit(event.target.value)}
                  value="F"
                  checked={unit === "F"}
                />
                <span>°F</span>
              </div>
            </div>
          </div>
          <div className="weather-comp">
            <div className="current-weather">
              <h3>{t("weatherPage.weather.0")}</h3>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${
                    selectedDay !== null
                      ? selectedDay?.weather[0]?.icon
                      : weatherIcon
                  }@2x.png`}
                  alt="weather icon"
                />
                <h2>
                  {unit === "C"
                    ? selectedDay
                      ? (selectedDay?.main?.temp - 273.15).toFixed(0)
                      : (currentTemp - 273.15).toFixed(0)
                    : selectedDay
                    ? ((selectedDay?.main?.temp - 273.15) * 1.8 + 33.8).toFixed(
                        0
                      )
                    : ((currentTemp - 273.15) * 1.8 + 33.8).toFixed(0)}
                  {unit === "C" ? "°C" : "°F"}
                </h2>
              </div>
            </div>
            <div className="hourly-forecast">
              <h3>{t("weatherPage.weather.1")}</h3>
              {hourlyForecast?.map((item, index) => (
                <div key={index} className="hourly-item">
                  <span>{new Date(item.dt_txt).getHours()}:00</span>
                  <span>
                    {unit === "C"
                      ? (item.main.temp - 273.15).toFixed(0)
                      : ((item.main.temp - 273.15) * 1.8 + 33.8).toFixed(0)}
                    {unit === "C" ? "°C" : "°F"}
                  </span>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="five-day-forecast">
            <h3>{t("weatherPage.weather.2")}</h3>
            <div className="forecast-list">
              {fiveDayForecast?.map((item, index) => (
                <div
                  key={index}
                  className={`forecast-item ${
                    selectedDay === item ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDay(item)}
                >
                  <span>{new Date(item.dt_txt).toLocaleDateString()}</span>
                  <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt="weather icon"
                    />
                    <span>
                      {unit === "C"
                        ? (item.main.temp - 273.15).toFixed(0)
                        : ((item.main.temp - 273.15) * 1.8 + 33.8).toFixed(0)}
                      {unit === "C" ? "°C" : "°F"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
