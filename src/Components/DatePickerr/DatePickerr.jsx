import React from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import "./datePickerr.css";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const DatePicker = ({
  reserve_start,
  reserve_end,
  setReserveStart,
  setReserveEnd,
  errorDate,
  setErrorDate,
  errors,
  mode,
  touched,
  bookedRanges,
}) => {
  const { t } = useTranslation();

  const isInCurrent = (date) => {
    const start = dayjs(reserve_start, "DD-MM-YYYY");
    const end = dayjs(reserve_end, "DD-MM-YYYY");
    return date.isSameOrAfter(start, "day") && date.isSameOrBefore(end, "day");
  };

  const isRangeConflict = (start, end, isEdit = false) => {
    return bookedRanges?.some(({ start: bStart, end: bEnd }) => {
      const bookedStart = dayjs(bStart, "DD-MM-YYYY");
      const bookedEnd = dayjs(bEnd, "DD-MM-YYYY");
      const overlap =
        end.isSameOrAfter(bookedStart, "day") &&
        start.isSameOrBefore(bookedEnd, "day");
      const notCurrent =
        !isEdit || (!isInCurrent(bookedStart) && !isInCurrent(bookedEnd));
      return overlap && notCurrent;
    });
  };

  const isBooked = (date) =>
    bookedRanges?.some(
      ({ start, end }) =>
        date.isSameOrAfter(start, "day") && date.isSameOrBefore(end, "day")
    );

  const isInvalidStart = (date, isEdit = false) => {
    if (date.isBefore(dayjs(), "day")) return true;

    const endDate = dayjs(reserve_end, "DD-MM-YYYY");
    if (reserve_end && isRangeConflict(date, endDate, isEdit)) return true;

    return isBooked(date);
  };

  const isInvalidEnd = (date, isEdit = false) => {
    if (!reserve_start) return true;
    const start = dayjs(reserve_start, "DD-MM-YYYY").add(1, "day");
    if (date.isBefore(start, "day")) return true;

    const startDate = dayjs(reserve_start, "DD-MM-YYYY");
    const conflict = isRangeConflict(startDate, date, isEdit);
    if (conflict) return true;

    const nextBookedStart = bookedRanges
      ?.map(({ start }) => dayjs(start, "DD-MM-YYYY"))
      .filter((d) => d.isAfter(start, "day"))
      .sort((a, b) => a - b)[0];

    return (
      nextBookedStart &&
      date.isSameOrAfter(nextBookedStart, "day") &&
      (!isEdit || !isInCurrent(date))
    );
  };

  const onCheckInChange = (value) => {
    const formatted = dayjs(value).format("DD-MM-YYYY");
    setReserveStart(formatted);

    const start = dayjs(formatted, "DD-MM-YYYY");
    const nextBookedStart = bookedRanges
      ?.map(({ start }) => dayjs(start, "DD-MM-YYYY"))
      .filter((d) => d.isAfter(start, "day"))
      .sort((a, b) => a - b)[0];

    if (nextBookedStart && nextBookedStart.diff(start, "day") < 2) {
      setReserveEnd(null);
      return setErrorDate(t("errors.datePicker.checkOutTooClose"));
    }

    if (reserve_end) {
      const end = dayjs(reserve_end, "DD-MM-YYYY");
      const invalid = isInvalidEnd(end, mode === "edit");
      if (end.isSameOrBefore(start, "day") || invalid) {
        setReserveEnd(null);
        setErrorDate(t("errors.datePicker.invalidDates"));
      } else setErrorDate("");
    } else setErrorDate("");
  };

  const onCheckOutChange = (value) => {
    const formatted = dayjs(value).format("DD-MM-YYYY");
    const start = dayjs(reserve_start, "DD-MM-YYYY");
    const end = dayjs(formatted, "DD-MM-YYYY");

    if (!reserve_start)
      return setErrorDate(t("errors.datePicker.checkInFirst"));
    if (end.isSameOrBefore(start, "day"))
      return setErrorDate(t("errors.datePicker.checkOutNext"));

    const invalid = isInvalidEnd(end, mode === "edit");
    if (invalid) return setErrorDate(t("errors.datePicker.alreadyBooked"));

    setReserveEnd(formatted);
    setErrorDate("");
  };

  return (
    <div className={mode === "edit" ? "DatePickerEdit" : "DatePicker"}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {["checkIn", "checkOut"].map((type) => (
          <div
            key={type}
            className={
              mode === "edit"
                ? `edit${type === "checkIn" ? "CheckIn" : "CheckOut"}`
                : `${
                    type === "checkIn" ? "checkInDate" : "checkOutDate"
                  } reservationInputDiv`
            }
          >
            <span
              className={
                mode === "edit" ? "editInputName" : "inputNameReservation"
              }
            >
              {t(`roomPage.infoRoomReserve.${type}`)} *
              {errors[`reserve_${type === "checkIn" ? "start" : "end"}`] &&
                touched[`reserve_${type === "checkIn" ? "start" : "end"}`] && (
                  <span className="errorsReservation">
                    {errors[`reserve_${type === "checkIn" ? "start" : "end"}`]}
                  </span>
                )}
            </span>
            <DesktopDatePicker
              value={
                type === "checkIn"
                  ? reserve_start
                    ? dayjs(reserve_start, "DD-MM-YYYY")
                    : null
                  : reserve_end
                  ? dayjs(reserve_end, "DD-MM-YYYY")
                  : null
              }
              onChange={type === "checkIn" ? onCheckInChange : onCheckOutChange}
              format="DD-MM-YYYY"
              shouldDisableDate={(d) =>
                type === "checkIn"
                  ? isInvalidStart(d, mode === "edit")
                  : isInvalidEnd(d, mode === "edit")
              }
            />
          </div>
        ))}
        {errorDate && <div className="error-message">{errorDate}</div>}
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
