import './order.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 


const RecipeCard = ({ recipe, addToCart }) => {
    const [portion, setPortion] = useState(1);

    const increasePortion = () => setPortion(portion + 1);
    const decreasePortion = () => {
        if (portion > 1) setPortion(portion - 1);
    };

    const handleAddToCart = () => {
        addToCart(recipe, portion); 
        alert(`Added ${recipe.name} to the cart!`);
    };

    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>Price: ${recipe.userId}</p>
            <div className="controls">
                <button onClick={decreasePortion}>-</button>
                <span>{portion}</span>
                <button onClick={increasePortion}>+</button>
            </div>
            <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then(response => {
                setRecipes(response.data.recipes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const addToCart = (recipe, portion) => {
        const newItem = { ...recipe, portion };
        setCartItems([...cartItems, newItem]);
    };

    return (
        <div className="app">
            <h1>Menu</h1>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} addToCart={addToCart} />
                ))}
            </div>
            <Link to="/cart"> 
                <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" alt="Cart" className="cart-icon" width={30} />
            </Link>
        </div>
    ); 
};

export default App;
