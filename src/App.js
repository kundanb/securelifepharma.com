import './App.scss';
import Header from './layouts/Header';
import { Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Footer from './layouts/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Route path="/" exact component={AboutUs} />
        <Route path="/shop" component={Shop} />
      </main>
      <Footer />
    </>
  );
}
