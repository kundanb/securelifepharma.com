import './Header.scss';
import Logo from '../img/logo-d.svg';
import { NavLink } from 'react-router-dom';
import PDFFile from '../pdfs/slp_prods.pdf';
import { useState } from 'react';
import { Menu } from 'react-feather';
import Feather from '../components/Feather';
import { ShoppingBag } from 'react-feather';

export default function Header() {
  const hideNavbarOn = 600;

  const [navbarActive, setNavbarActive] = useState(
    window.innerWidth > hideNavbarOn ? true : false
  );

  const toggleNavbar = () =>
    setNavbarActive(window.innerWidth > hideNavbarOn ? true : !navbarActive);

  window.addEventListener('resize', () => {
    setNavbarActive(window.innerWidth > hideNavbarOn);
  });

  return (
    <header id="header" className={navbarActive ? '' : 'navbar-hidden'}>
      <div className="container flx flx-jc-sb flx-ai-c">
        <button className="nav-tog-btn flx flx-c-c" onClick={toggleNavbar}>
          <Feather icon={Menu} />
        </button>

        <div className="brand flx">
          <img src={Logo} alt="secure life pharma logo" />
        </div>

        <nav className="flx navbar">
          <NavLink to="/" exact className="navlink">
            About
          </NavLink>

          <a href={PDFFile} to="/products" className="navlink">
            Products
          </a>

          <NavLink to="/blog" className="navlink">
            Blog
          </NavLink>

          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </nav>

        <NavLink to="/shop" className="shop-btn ui-btn">
          <Feather icon={ShoppingBag} />
          <span className="txt">Shop</span>
        </NavLink>
      </div>
    </header>
  );
}
