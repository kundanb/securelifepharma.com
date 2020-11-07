import './App.scss';
import Header from './layouts/Header';
import { Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Footer from './layouts/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Route path="/" exact component={AboutUs} />
      </main>
      <Footer />
    </>
  );
}
