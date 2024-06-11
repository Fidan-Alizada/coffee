import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Section from './Sections/Section.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Delivery from './components/Delivery/Delivery.jsx';
import FeedBack from './components/FeedBack/Feedback.jsx';
import Order from './components/Order/Order.jsx';
import CartPage from './components/CartPage/CartPage.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
