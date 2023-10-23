import React from "react";
import PropTypes from "prop-types";
import "./ImgCard.css";

ImgCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function ImgCard({data}) {

  return (
    <div className="container">
      <div className="row">
        {data.map((product, index) => (
          <div className="card  kartice col-sm-5" key={index}>
            <div className="divImg">
              <img src={product.image} alt="Images" className="image" />
            </div>
            <div className="card-body">
              <h1>{product.title}</h1>
              <p><b>Opis:</b> {product.subtitle}</p>
              <p><b>Width</b> {product.width}cm <b>Height</b> {product.height}cm</p>
              <p><b>Cinena</b> {product.price} €</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgCard;
