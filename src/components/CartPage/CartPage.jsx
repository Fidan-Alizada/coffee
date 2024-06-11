import React, { useState } from 'react';
import './CartPage.css';
const CartPage = ({ cartItems }) => {
    const [deliveryOption, setDeliveryOption] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleDeliveryOption = (event) => {
        setDeliveryOption(event.target.value);
    };

    const handlePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            <div>
                {cartItems && cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Select Delivery Option</h2>
                <ul>
                    <li>
                        <label>
                            <input type="radio" name="deliveryOption" value="Standard Shipping" onChange={handleDeliveryOption} />
                            Standard Shipping
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="deliveryOption" value="Express Shipping" onChange={handleDeliveryOption} />
                            Express Shipping
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="deliveryOption" value="Same-day Delivery" onChange={handleDeliveryOption} />
                            Same-day Delivery
                        </label>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Select Payment Method</h2>
                <ul>
                    <li>
                        <label>
                            <input type="radio" name="paymentMethod" value="Card" onChange={handlePaymentMethod} />
                            Credit/Debit Card
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="paymentMethod" value="Cash" onChange={handlePaymentMethod} />
                            Cash on Delivery
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="paymentMethod" value="PayPal" onChange={handlePaymentMethod} />
                            Epoint
                        </label>
                    </li>
                </ul>
            </div>
            <button>Send</button>
        </div>
    );
};

export default CartPage;
