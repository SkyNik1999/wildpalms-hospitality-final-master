import React,{useEffect} from 'react';
import ScrollReveal from 'scrollreveal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
// import 'react-calendar/dist/Calendar.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import Detail from './Pages/Detail';
import Listing from './Pages/Listing';
import ScrollTopBtn from './Components/ScrollTopBtn/ScrollTopBtn';
import ScrollToTop from './Components/ScrollTopBtn/ScrollToTop';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    sr.reveal(
      '.hero__title, .popular__container, .subscribe__container, .footer__container'
    );
    sr.reveal('.hero__description, .footer__info', { delay: 500 });
    sr.reveal('.hero__search', { delay: 600 });
    sr.reveal('.hero__value', { delay: 700 });
    sr.reveal('.hero__images', { delay: 800, origin: 'bottom' });
    sr.reveal('.logos__img', { interval: 100 });
    sr.reveal('.value__images, .contact__content', { origin: 'left' });
    sr.reveal('.value__content, .contact__images', { origin: 'right' });

    // Clean up ScrollReveal instance when component unmounts
    return () => {
      sr.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <ChakraProvider theme={'light'}>
      <Router>
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/details" element={<Detail />} />
          <Route exact path="/listing" element={<Listing />} />
          <Route exact path='/details/:key' element={<Detail/>} />
        </Routes>
        <ScrollTopBtn />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
