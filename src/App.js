import Header from './layouts/Header';
import { Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';

export default function App() {
  return (
    <>
      <Header />
      <Route path="/" component={AboutUs} />
    </>
  );
}
