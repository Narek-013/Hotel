import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import "./search.css";

const Search = ({ search, setSearch, searchResult, setSearchResult }) => {
  const { t } = useTranslation();

  const { hotelsList } = useSelector((state) => state.hotels);

  useEffect(() => {
    if (!hotelsList || hotelsList.length === 0) return;

    if (search.trim() === "") {
      setSearchResult(hotelsList);
    } else {
      const filteredResult = hotelsList.filter((item) =>
        [item.name, item.city?.en, item.country].some(
          (field) =>
            typeof field === "string" &&
            field.toLowerCase().startsWith(search.toLowerCase())
        )
      );
      setSearchResult(filteredResult);
    }
  }, [search, hotelsList]);

  return (
    <div className="Search">
      <FaSearch />
      <input
        type="text"
        value={search}
        placeholder={t("hotelsPage.search")}
        className="searchInp"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
