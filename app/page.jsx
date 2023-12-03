// import css from './page.module.css';
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Electricity from '../components/Electricity/Electricity';
import Cases from '../components/Cases/Cases';
import Faq from '../components/FAQ/Faq';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

export default function Page() {
  return (<>
    <Header />
    <Main />
    <About />
    <Electricity />
    <Cases />
    <Faq />
    <ContactUs />
    <Footer />
  </>)
}