import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/productsSlice';
import "../styles/Home.css";

const Home = () => {
    const [notification, setNotification] = useState(''); 
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    const handleAddToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        dispatch(addToCart(productId));
        setNotification(`${product.name} added to cart!`);

        setTimeout(() => {
            setNotification('');
        }, 5000);
    };

    return (
        <div className="home">
            <h1>Products</h1>
            {notification && (
                <div className="notification">{notification}</div>
            )}
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image" 
                        />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price">
                            {product.discount > 0 ? (
                                <>
                                    <span className="original-price">${product.price}</span>
                                    <span className="discounted-price">
                                        ${product.price - (product.price * product.discount / 100)}
                                    </span>
                                </>
                            ) : (
                                <span>${product.price}</span>
                            )}
                        </div>
                        <button 
                            className="add-to-cart-btn" 
                            onClick={() => handleAddToCart(product.id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

