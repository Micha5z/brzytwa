import React, { useState, useEffect } from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export const Navigation = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Dodajemy nasłuchiwanie na zmianę szerokości ekranu
    window.addEventListener('resize', handleWindowResize);

    // Czyszczenie nasłuchiwania przy odmontowaniu komponentu
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isMobileView = windowWidth < 765;

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>

          </a>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Ekipa
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                O nas
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Usługi
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galeria
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Opinie
              </a>
            </li> */}
 <li>
              <a href='https://www.facebook.com/panbrzytwa' target='_blank' rel='noopener noreferrer'>
                {isMobileView ? 'Facebook' : <FaFacebookSquare />}
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/pan.brzytwa.barbershop/' target='_blank' rel='noopener noreferrer'>
                {isMobileView ? 'Instagram' : <FaInstagram />}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};