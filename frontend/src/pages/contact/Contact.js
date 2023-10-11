import React from "react";
import location from "../../icon/location.png";
import phone from "../../icon/phone.png";
import email from "../../icon/email.png";
import Layout from "../../components/layout/Layout";
import "./Contact.css";

function Contact() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="info">
            <div className="divBlur">
              <div className="infoDiv">
                <div className="infoDivHelding">
                  <img className="infoImg" src={location} alt="" />
                  <p className="infoHelding">Address</p>
                </div>
                <div>
                  <p className="pInfo">Rade Bitange 18 Mostar 88000</p>
                  <p className="pInfo">Bosna i Hercegovina</p>
                </div>
              </div>

              <div className="infoDiv">
                <div className="infoDivHelding">
                  <img className="infoImg" src={phone} alt="" />
                  <p className="infoHelding">Lets Talk</p>
                </div>
                <div>
                  <p className="pInfo">+387 63 111 222 </p>
                </div>
              </div>

              <div className="infoDiv">
                <div className="infoDivHelding">
                  <img className="infoImg" src={email} alt="" />
                  <p className="infoHelding">Mail</p>
                </div>
                <div>
                  <p className="pInfo">neko@gmail.com </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sendMail">
            <div className="sendForm">
              <h1>Send us a message</h1> 
              <div className="mb-3 formDiv">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Name
                </label>
                <input
                  type="email"
                  className="form-control formLine"
                  id="exampleFormControlInput1"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-3 formDiv">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control formLine"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3 formDiv">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Phone
                </label>
                <input
                  type="email"
                  className="form-control formLine"
                  id="exampleFormControlInput1"
                  placeholder="1112 2222 3333"
                />
              </div>
              <div className="mb-3 formDiv">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label fw-bold"
                >
                  Message
                </label>
                <textarea
                  className="form-control formLine"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="d-grid gap-2 formDiv">
                <button className="btn btn-primary btn-lg" type="button">
                  Send mail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
