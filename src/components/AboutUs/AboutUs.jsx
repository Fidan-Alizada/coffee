
import React from 'react';

import './aboutus.css';

const About = () => {
    return (
    
        <div className="container1">
          <div className="text-container-about">
            <h2>About our Coffee Shop</h2>
           
            <p>Welcome to Coffee Shop , where every cup tells a story. Nestled in the heart of Baku, our coffee shop is a haven for coffee lovers, casual sippers, and anyone in need of a cozy space to relax, work, or connect with friends.</p>
           <h3>Our Story</h3>
            <p>
            At our Coffee Shop , we believe that great coffee starts with great beans. We source our beans from ethically responsible farmers who are as committed to quality and sustainability as we are. Each cup is brewed to perfection by our skilled baristas, who take pride in their craft and are always eager to share their knowledge with our customers.
            </p>
          </div>
          <div className="image-container-about">
            <img className="image1" src="https://images.edrawmax.com/article2023/coffee-shop-org-chart/organizational-structure-of-coffee-shop.jpg" alt="Business Statistics"  />
          </div>
        </div>
   
    );
  };
  
  export default About;