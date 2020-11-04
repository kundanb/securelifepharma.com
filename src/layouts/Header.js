import './Header.scss';
import Logo from '../img/logo.svg';
import LogoIcon from '../img/icon.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'react-feather';
import Feather from '../components/Feather';

export default function Header() {
  const [navbarActive, setNavbarActive] = useState(
    window.innerWidth > 768 ? true : false
  );

  const toggleNavbar = () =>
    setNavbarActive(window.innerWidth > 768 ? true : !navbarActive);

  window.addEventListener('resize', () => {
    setNavbarActive(window.innerWidth > 768);
  });

  return (
    <header id="header" className={navbarActive || 'navbar-hidden'}>
      <div className="container flx flx-jc-sb flx-ai-c">
        <div className="brand-cont flx">
          <img src={Logo} alt="Logo" className="device-desktop" />
          <img src={LogoIcon} alt="Logo Icon" className="device-mobile" />
        </div>

        <div className="navtog-btn-cont">
          <button className="navtog-btn flx" onClick={toggleNavbar}>
            <Feather icon={Menu} />
          </button>
        </div>

        <nav id="navbar" className="navbar-active flx">
          <NavLink to="/" className="navlink">
            About Us
          </NavLink>
          <NavLink to="/products" className="navlink">
            Product Catalogue
          </NavLink>
          <NavLink to="/shop" className="navlink">
            Buy Protein
          </NavLink>
          <NavLink to="/blog" className="navlink">
            Blog
          </NavLink>
          <NavLink to="/contact" className="navlink">
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
