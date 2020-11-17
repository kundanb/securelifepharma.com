import './App.scss';
import Header from './layouts/Header';
import { Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Footer from './layouts/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/Blog" component={Blog} />
      <Route path="/shop" component={Shop} />
      <Footer />
    </>
  );
}
