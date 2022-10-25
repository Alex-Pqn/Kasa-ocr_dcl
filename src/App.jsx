import './style/style.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';
import Location from './pages/Location/Location';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Kasa';
  });

  return (
    <div className="app">
      <div className="app--horizontal-padding">
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error404 />} />
            <Route path="location/:id" element={<Location />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
