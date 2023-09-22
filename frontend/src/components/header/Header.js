import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div >
      <div className="card ">
        <div className="card-header row" >
          <div className="col-sm-6 d-flex justify-content-start">
            <h1 className="mt-2">A.R.T. House</h1>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <div className="img">
                <div className="image">😊</div>
            </div>
            <div className="username">NekoIme</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
