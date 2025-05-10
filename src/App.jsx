import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeWidth } from "./Redux/Slices/ControlWidthSlice/controlWidthSlice";
import HomePage from "./Pages/HomePage/HomePage";
import HomeWrapper from "./Components/HomeWrapper/HomeWrapper";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AllHotelsPage from "./Pages/AllHotelsPage/AllHotelsPage";
import HotelPage from "./Pages/HotelPage/HotelPage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";
import RoomPage from "./Pages/RoomPage/RoomPage";
import SignInPage from "./Pages/SignPage/SignPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import ReservationPage from "./Pages/ReservationPage/ReservationPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import "./App.css";

const App = () => {
  const location = useLocation();
  const lang = localStorage.getItem("lang") || "am";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathname = location.pathname;
    const supportedLangs = ["am", "en", "ru"];
    const segments = pathname.split("/").filter(Boolean);

    if (
      segments.length === 1 &&
      supportedLangs.includes(segments[0]) &&
      !pathname.endsWith("/")
    ) {
      navigate(`${pathname}/`, { replace: true });
      return;
    }

    if (!supportedLangs.includes(segments[0])) {
      const correctedPath = `/${lang}${
        pathname.startsWith("/") ? "" : "/"
      }${pathname}`;
      navigate(correctedPath, { replace: true });
      return;
    }
  }, [location.pathname, navigate, lang]);

  useEffect(() => {
    dispatch(changeWidth(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    const scrollToTop = () => {
      const startY = window.scrollY;
      const duration = 600;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const easeInOutQuad =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startY * (1 - easeInOutQuad));

        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    window.addEventListener("resize", () => {
      dispatch(changeWidth(window.innerWidth));
    });

    scrollToTop();
  }, [location.pathname, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={`/${lang}/`} />} />

        <Route path="/:lang" element={<HomeWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="allHotels" element={<AllHotelsPage />} />
          <Route path="hotels/:id" element={<HotelPage />} />
          <Route path="hotels/room/:roomID" element={<RoomPage />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="booked_rooms" element={<ReservationPage />} />
          <Route path="signUp" element={<SignInPage />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
