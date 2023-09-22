import "./ImgCard.css";

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
              <p className="card-text">{product.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgCard;
