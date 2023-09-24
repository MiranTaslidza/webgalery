import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Header() {
  const [data, setData] = useState([]); // State za čuvanje podataka iz baze
  const [swiper, setSwiper] = useState(null); // Dodajte state za Swiper instancu

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



  // Postavljanje automatskog prebacivanja slajdova
  useEffect(() => {
    if (swiper) {
      const interval = setInterval(() => {
        if (swiper) {
          swiper.slideNext(); // Prebaci se na sledeći slajd
        }
      }, 3000); // Promenite vreme kašnjenja prema svojim potrebama (npr. 3000 ms = 3 sekunde)

      // Pauziraj automatsko prebacivanje kad komponenta unmounts
      return () => clearInterval(interval);
    }
  }, [swiper]);

  return (
    <>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          onSwiper={(swiper) => setSwiper(swiper)} // Postavi Swiper instancu u state
        >
          {data
            .filter((slide) => !slide.slide)
            .map((slide, index) => (
              <SwiperSlide key={index}>
                <img className="swiper-img" src={slide.image} alt="" />
              </SwiperSlide>
            ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Header;
