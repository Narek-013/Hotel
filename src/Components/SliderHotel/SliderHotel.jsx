import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderHotel.css";

const SliderHotel = ({ sliderContent }) => {
  const location = useLocation();
  const { lang } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div
      className={
        location.pathname.includes(`/${lang}/hotels/room`)
          ? "SliderRoom"
          : "SliderHotel"
      }
    >
      <Slider {...settings}>
        {sliderContent?.map((content, i) => (
          <div
            className={
              location.pathname.includes(`/${lang}/hotels/room`)
                ? "slickImageModalDiv"
                : "slickImgDiv"
            }
            key={i}
          >
            <img
              className={
                location.pathname.includes(`/${lang}/hotels/room`)
                  ? "slickImgModal"
                  : "slickImg"
              }
              src={content}
              alt={
                location.pathname.includes(`/${lang}/hotels/room`)
                  ? "Room Image"
                  : "Hotel Image"
              }
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHotel;
