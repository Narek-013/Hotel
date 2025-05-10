import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getHotelsListThunk } from "../../Redux/Slices/HotelsListSlice/hotelsListSliceThunk";
import SingleHotel from "../../Components/SingleHotel/SingleHotel";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";
import "./allHotelsPage.css";

const HotelsPage = () => {
  const { t } = useTranslation();
  const { hotelsList, loadingStatus } = useSelector((state) => state.hotels);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const lang = localStorage.getItem("lang") || "am";

  const dispatch = useDispatch();
  useEffect(() => {
    const getDatas = async () => {
      await dispatch(getHotelsListThunk());
    };
    getDatas();
  }, [lang, dispatch]);

  useEffect(() => {
    if (hotelsList.length > 0) {
      setSearchResult(hotelsList);
    }
  }, [hotelsList]);

  return (
    <div className="HotelsPage">
      <div className="container">
        {loadingStatus === "pending" ? (
          <Loading />
        ) : (
          <div className="hotelsPageDiv">
            <div className="allHotelsDiv">
              <h1 className="allHotelsH">{t("hotelsPage.title")}</h1>
              <Search
                search={search}
                setSearch={setSearch}
                searchResult={searchResult}
                setSearchResult={setSearchResult}
              />
              <div className="allHotels">
                {searchResult.length > 0 ? (
                  searchResult?.map((hotel) => (
                    <SingleHotel hotel={hotel} key={hotel._id} />
                  ))
                ) : (
                  <span className="noHotelFound">{t("hotelsPage.noHotels")}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelsPage;
