import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [atHome, setAtHome] = useState(true);
  const location = useLocation();
  const sections = ['home', 'popular', 'value', 'contact']; // Add more section IDs if needed

  useEffect(() => {
    setAtHome(location.pathname === '/' || location.pathname === '/home');
  }, [location.pathname]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 50;

      setScrolled(isScrolled);

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjusted to account for the header height
        const sectionBottom = sectionTop + sectionHeight; // Calculate the bottom of the section
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          // Adjusted comparison conditions
          setActiveTab(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = tabId => {
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div>
      <header
        className={`header ${scrolled || !atHome ? 'scroll-header' : ''}`}
        id="header"
      >
        <nav className="nav container">
          <Link
            to={'/'}
            onClick={() => handleClick('home')}
            className="nav__logo"
          >
            Wildpalms Hospitality <i className="bx bxs-home-alt-2"></i>
          </Link>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item" onClick={() => handleClick('home')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'home' ? 'active-link' : ''
                  }`}
                >
                  <i className="bx bx-home-alt-2"></i>
                  <span>Home</span>{' '}
                </Link>
              </li>
              <li className="nav__item" onClick={() => handleClick('popular')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'popular' ? 'active-link' : ''
                  }`}
                >
                  <i className="bx bx-building-house"></i>
                  <span>Properties</span>
                </Link>
              </li>
              <li className="nav__item" onClick={() => handleClick('value')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'value' ? 'active-link' : ''
                  }`}
                >
                  <i className="bx bx-award"></i>
                  <span>Services</span>
                </Link>
              </li>
              <li className="nav__item" onClick={() => handleClick('contact')}>
                <Link
                  to={'/'}
                  className={`nav__link ${
                    activeTab === 'contact' ? 'active-link' : ''
                  }`}
                >
                  <span>Contact</span>
                  <i className="bx bx-phone"></i>
                </Link>
              </li>
            </ul>
          </div>

          <span
            className="nav__button button"
            onClick={() => handleClick('subscribe')}
            style={{ marginLeft: '1rem' }}
          >
            Join US
          </span>
        </nav>
      </header>
    </div>
  );
};

export default Header;
