import ParticlesBg from "particles-bg";
import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [showLogo, setShowLogo] = useState(false);
  
  
  return (
    <header id='header '>
      <div className='intro'>
              <div className='background-hero'>
        {/* <ParticlesBg type="line" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
        {/* <img alt='lokal' className='background-hero'>   
            </img> */}
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <div className='brand-logo page-scroll'>
            
            </div>{' '}
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://booksy.com/pl-pl/101921_pan-brzytwa-barber-shop-ratuszowa-3_barber-shop_12680_bielsko-biala'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Rezerwuj!
                </a>{' '}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
