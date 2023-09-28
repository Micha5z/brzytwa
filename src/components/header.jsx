import React from "react";

export const Header = (props) => {
  return (
    <header id="header ">
      <div className="intro">
        <div className="background-hero" >
          <div className="overlay">
            <div className="container" style={{ minHeight: "100vh" }}>
              <div className="row">
                <div className="col-md-6 col-md-offset-3 intro-text">
                  <div className="brand-logo page-scroll"></div>{" "}
                  <p className="btn-anim2">{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="https://booksy.com/pl-pl/101921_pan-brzytwa-barber-shop-ratuszowa-3_barber-shop_12680_bielsko-biala"
                    className="btn-anim1 btn btn-custom btn-lg page-scroll"
                  >
                    Rezerwuj!
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
