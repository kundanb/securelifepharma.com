import './Header.scss';
import Logo from '../img/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'react-feather';
import Feather from '../components/Feather';
import { ShoppingBag } from 'react-feather';

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
    <header id="header" className={navbarActive ? '' : 'navbar-hidden'}>
      <div className="container flx flx-jc-sb flx-ai-c">
        <button className="nav-tog-btn flx" onClick={toggleNavbar}>
          <Feather icon={Menu} />
        </button>

        <div className="brand flx">
          <img src={Logo} alt="secure life pharma logo" />
        </div>

        <nav id="navbar" className="flx">
          <NavLink to="/" exact className="navlink">
            About
          </NavLink>

          <NavLink to="/products" className="navlink">
            Products
          </NavLink>

          <NavLink to="/blog" className="navlink">
            Blog
          </NavLink>

          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </nav>

        <NavLink to="/shop" className="shop-btn flx flx-ai-c">
          <Feather icon={ShoppingBag} />
          <span className="txt">Shop</span>
        </NavLink>
      </div>
    </header>
  );
}
