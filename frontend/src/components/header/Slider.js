import  { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

function Header() {
  const [data, setData] = useState([]); // State za čuvanje podataka iz baze

  // Dohvaćanje podataka
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/product');

        if (!response.ok) {
          throw new Error('Greška pri dohvaćanju podataka');
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
    <Carousel className="slider" onSelect={(selectedIndex) => {}}>
       {data
      .filter((slide) => !slide.slide) // Filtrira podatke sa slide: false
      .map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="containerSlider">
            <div className="row">
              <div className="divImage">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <div className="divTitle ">
                <h1 className="hTitle">{slide.title}</h1>
                <p className="pSubtitle">{slide.subtitle}</p>
                <p className="pSubtitle">Dimenzije slike Visina:{slide.height} širina: {slide.width}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Header;
