'use client'
import css from './page.module.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Electricity from '../components/Electricity/Electricity';
import Cases from '../components/Cases/Cases';
import Faq from '../components/FAQ/Faq';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';
import BackdropMenu from '../components/BackdropMenu/BackdropMenu.jsx';

export default function Page() {
  const [backdrop, setBackdrop ] = useState(css.menuHidden);
  const [menuOpen, setMenuOpen] = useState("false");

  const menuHandler = (event) => {
      
      if (backdrop === css.menuHidden) {
          setBackdrop(css.backdrop);
          setMenuOpen("true");
      } else {
          setBackdrop(css.menuHidden);
          setMenuOpen("false");
      }
  }

  useEffect(()=>{

      const escapeWatcher = (event) => {
          if (event.code === "Escape") {
            menuHandler();
          }
      };

      if (menuOpen) {
          window.addEventListener("keyup", escapeWatcher);
        }
  
      return () => {
          window.removeEventListener("keyup", escapeWatcher);
        };

  },[menuOpen])

  return (<>
    <Header menuHandler={menuHandler} />
    <Main />
    <About />
    <Electricity />
    <Cases />
    <Faq />
    <ContactUs />
    <Footer />
    <BackdropMenu menuHandler={menuHandler} backdrop={backdrop} />
  </>)
}