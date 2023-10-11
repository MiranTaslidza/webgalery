import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

function Header() {
  const [data, setData] = useState([]); // State za čuvanje podataka iz baze

  // Dohvaćanje podataka
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/product");

        if (!response.ok) {
          throw new Error("Greška pri dohvaćanju podataka");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container container-slider">
        <Swiper
          //beskonačna vrti
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          //efekat
          effect={"coverflow"}
          //za pomjeranje kursorom miša
          grabCursor={true}
          //da je klizač
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          //prikazivanje stranice slidera
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {data
            .filter((slide) => !slide.slide)
            .map((slide, index) => (
              <SwiperSlide key={index}>
                <img className="swiper-img" src={slide.image} alt="" />
              </SwiperSlide>
            ))}
          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Header;
