import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css'; 

const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/023/628/609/small/coffee-shop-logo-design-png.png" alt="Coffee Shop Logo" width={70}/>
      </div>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/delivery">Delivery</Link></li>
          <li><Link to="/cart">
          <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" alt="Cart" className="cart-icon" width={30} />
          </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
